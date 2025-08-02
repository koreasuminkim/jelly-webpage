import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [activeSection, setActiveSection] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalConfirm = () => {
        window.location.href = "http://pf.kakao.com/_nWcxen";
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100; // 네비게이션 바 높이만큼 오프셋
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["services", "process", "team"];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= 150 && bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800'>
                <div className='container mx-auto px-4'>
                    <div className='flex items-center justify-between h-20'>
                        <Link to='/' className='flex items-center'>
                            <img src='/logo/boltlab-logo-blue.svg' alt='BOLTLAB' className='h-16 w-auto' />
                        </Link>

                        <div className='flex items-center gap-8'>
                            <div className='hidden md:flex items-center gap-8'>
                                {isHomePage ? (
                                    <>
                                        <button
                                            onClick={() => scrollToSection("services")}
                                            className={`text-base text-gray-300 hover:text-white transition-colors ${
                                                activeSection === "services" ? "text-blue-400 font-semibold" : ""
                                            }`}
                                        >
                                            Services
                                        </button>
                                        <button
                                            onClick={() => scrollToSection("process")}
                                            className={`text-base text-gray-300 hover:text-white transition-colors ${
                                                activeSection === "process" ? "text-blue-400 font-semibold" : ""
                                            }`}
                                        >
                                            Process
                                        </button>
                                        <button
                                            onClick={() => scrollToSection("team")}
                                            className={`text-base text-gray-300 hover:text-white transition-colors ${
                                                activeSection === "team" ? "text-blue-400 font-semibold" : ""
                                            }`}
                                        >
                                            Team
                                        </button>
                                    </>
                                ) : (
                                    <Link to='/' className='text-base text-gray-300 hover:text-white transition-colors'>
                                        Home
                                    </Link>
                                )}
                                <Link
                                    to='/portfolio'
                                    className={`text-base text-gray-300 hover:text-white transition-colors ${
                                        location.pathname === "/portfolio" ? "text-blue-400 font-semibold" : ""
                                    }`}
                                >
                                    Portfolio
                                </Link>
                            </div>
                            <Button
                                className='bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-base px-6 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300'
                                onClick={handleContactClick}
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
            <ContactModal isOpen={isModalOpen} onClose={handleModalClose} onConfirm={handleModalConfirm} />
        </>
    );
}
