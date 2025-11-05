import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

export default function HeroSection() {
    const { ref, isInView, variants, isMobile } = useScrollAnimation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className='relative min-h-screen flex items-center pt-20'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent' />
                <div className='absolute inset-0'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.1),transparent_50%)]' />
                    <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse' />
                    <div className='absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700' />
                </div>
                {isMobile ? (
                    <div className='container mx-auto px-4 relative'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <span className='inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm mb-6 hero-text'>
                                Built by SNU Engineers
                            </span>
                            <h1 className='text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-blue-500 to-purple-500 bg-clip-text text-transparent font-display tracking-tight hero-title'>
                                Best Product,
                                <br className='md:hidden' /> Best Price
                            </h1>
                            <h2 className='text-3xl md:text-5xl font-bold mb-6 text-white/90 font-display tracking-tight hero-subtitle'>
                                IT Product Agency
                            </h2>
                            <p className='text-lg md:text-xl text-gray-400 mb-3 font-light hero-text'>
                                AI AgentForce를 통한
                                <br className='md:hidden' /> 최고의 프로덕트를,
                                <br className='md:hidden' /> 최고의 가격에.
                                <br />
                                신세대 IT 개발 에이전시
                                <br className='md:hidden' /> 볼트랩
                            </p>
                            <div className='flex justify-center items-center mb-6 hero-text'>
                                <img src='/logo/boltlab-logo-blue.svg' alt='BOLTLAB' className='h-14 w-auto' />
                            </div>
                            <div className='flex justify-center hero-button'>
                                <Button
                                    size='lg'
                                    className='bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-lg px-10 py-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group'
                                    onClick={handleContactClick}
                                >
                                    Contact Us
                                    <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        ref={ref}
                        initial='hidden'
                        animate={isInView ? "visible" : "hidden"}
                        variants={variants}
                        className='container mx-auto px-4 relative'
                    >
                        <div className='max-w-4xl mx-auto text-center'>
                            <span className='inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm mb-6 hero-text'>
                                Built by SNU Engineers
                            </span>
                            <h1 className='text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-blue-500 to-purple-500 bg-clip-text text-transparent font-display tracking-tight hero-title'>
                                Best Product,
                                <br className='md:hidden' /> Best Price
                            </h1>
                            <h2 className='text-3xl md:text-5xl font-bold mb-6 text-white/90 font-display tracking-tight hero-subtitle'>
                                IT Product Agency
                            </h2>
                            <p className='text-lg md:text-xl text-gray-400 mb-3 font-light hero-text'>
                                AI AgentForce를 통한
                                <br className='md:hidden' /> 최고의 프로덕트를,
                                <br className='md:hidden' /> 최고의 가격에.
                                <br />
                                신세대 IT 개발 에이전시
                                <br className='md:hidden' /> 볼트랩
                            </p>
                            <div className='flex justify-center items-center mb-6 hero-text'>
                                <img src='/logo/boltlab-logo-blue.svg' alt='BOLTLAB' className='h-14 w-auto' />
                            </div>
                            <div className='flex justify-center hero-button'>
                                <Button
                                    size='lg'
                                    className='bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-lg px-10 py-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group'
                                    onClick={handleContactClick}
                                >
                                    Contact Us
                                    <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </section>
            <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
}
