import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState } from "react";

export default function CTASection() {
    const { ref, isInView, variants } = useScrollAnimation();
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

    return (
        <>
            <section className='py-32 bg-black relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent' />
                <motion.div
                    ref={ref}
                    initial='hidden'
                    animate={isInView ? "visible" : "hidden"}
                    variants={variants}
                    className='container mx-auto px-4 relative'
                >
                    <div className='max-w-3xl mx-auto text-center'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-500 to-purple-500 bg-clip-text text-transparent font-display'>
                            Ready to Start?
                        </h2>
                        <p className='text-xl text-gray-300 mb-12 leading-relaxed'>
                            젤리과 함께라면 <br className='md:hidden' />
                            당신의 아이디어가 현실이 됩니다.
                            <br />
                            지금 바로 무료 컨설팅을 받아보세요.
                        </p>
                        <div className='flex justify-center'>
                            <Button
                                size='lg'
                                className='bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-lg px-10 py-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group'
                                onClick={handleContactClick}
                            >
                                프로젝트 의뢰하기
                                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>
            <ContactModal isOpen={isModalOpen} onClose={handleModalClose} onConfirm={handleModalConfirm} />
        </>
    );
}
