import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function Navbar() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [activeSection, setActiveSection] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ko' ? 'en' : 'ko';
        i18n.changeLanguage(newLang);
    };

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
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
                                            {t('navbar.services')}
                                        </button>
                                        <button
                                            onClick={() => scrollToSection("process")}
                                            className={`text-base text-gray-300 hover:text-white transition-colors ${
                                                activeSection === "process" ? "text-blue-400 font-semibold" : ""
                                            }`}
                                        >
                                            {t('navbar.process')}
                                        </button>
                                        <button
                                            onClick={() => scrollToSection("team")}
                                            className={`text-base text-gray-300 hover:text-white transition-colors ${
                                                activeSection === "team" ? "text-blue-400 font-semibold" : ""
                                            }`}
                                        >
                                            {t('navbar.team')}
                                        </button>
                                    </>
                                ) : (
                                    <Link to='/' className='text-base text-gray-300 hover:text-white transition-colors'>
                                        {t('navbar.home')}
                                    </Link>
                                )}
                                <Link
                                    to='/portfolio'
                                    className={`text-base text-gray-300 hover:text-white transition-colors ${
                                        location.pathname === "/portfolio" ? "text-blue-400 font-semibold" : ""
                                    }`}
                                >
                                    {t('navbar.portfolio')}
                                </Link>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button
                                    onClick={toggleLanguage}
                                    className='text-gray-300 hover:text-white transition-colors flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800/50'
                                    title={i18n.language === 'ko' ? 'Switch to English' : '한국어로 전환'}
                                >
                                    <Globe className='h-4 w-4' />
                                    <span className='text-sm font-medium'>{i18n.language === 'ko' ? 'EN' : '한'}</span>
                                </button>
                                <Button
                                    className='bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-base px-6 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300'
                                    onClick={handleContactClick}
                                >
                                    {t('navbar.contact')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
}
