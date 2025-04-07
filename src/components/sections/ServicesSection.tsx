import { Card } from "@/components/ui/card";
import { Code2, Layout, Laptop, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
    {
        icon: <Layout className='h-8 w-8' />,
        title: "홈/랜딩페이지",
        description: "매력적인 브랜드 경험 제공",
        price: "₩100,000~",
        features: ["반응형 디자인", "최적화된 성능", "모던한 UI/UX", "Analytics 트래킹"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&h=1000",
    },
    {
        icon: <Laptop className='h-8 w-8' />,
        title: "웹 플랫폼",
        description: "확장 가능한 웹 서비스 개발",
        price: "₩400,000~",
        features: ["SaaS 플랫폼", "커머스 솔루션", "맞춤형 웹 서비스", "실시간 데이터 처리"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000&h=1000",
    },
    {
        icon: <Smartphone className='h-8 w-8' />,
        title: "모바일 앱",
        description: "iOS/Android 앱 개발",
        price: "₩700,000~",
        features: ["네이티브 앱", "크로스플랫폼 앱", "하이브리드 앱", "PWA"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000&h=1000",
    },
    {
        icon: <Code2 className='h-8 w-8' />,
        title: "AI 솔루션",
        description: "인공지능 서비스 통합",
        price: "₩1,000,000~",
        features: ["LLM 통합", "머신러닝 모델", "데이터 분석", "AI 워크플로우"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000&h=1000",
    },
];

export default function ServicesSection() {
    const { ref, isInView, variants, isMobile } = useScrollAnimation({ once: false });
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: isMobile ? 0 : i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <section id='services' className='py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden mobile-section'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]' />
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                className='container mx-auto px-4 relative'
            >
                <div className='text-center mb-10 md:mb-16'>
                    <h2 className='text-4xl font-bold mb-2 md:mb-4 text-white font-display mobile-heading'>What We Build?</h2>
                    <p className='text-gray-400 text-base mobile-text'>
                        혁신적인 비즈니스 아이디어를 <br className='md:hidden' />
                        현실로 만들어드립니다
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 mb-10 md:mb-16 mobile-grid'>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            custom={index}
                            variants={itemVariants}
                            className='animate-section service-card'
                        >
                            <Card className='group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 mobile-card'>
                                <div className='relative h-24 md:h-48 overflow-hidden'>
                                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/80' />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                    />
                                    <div className='absolute bottom-2 md:bottom-4 left-2 md:left-4 flex items-center gap-1 md:gap-3'>
                                        <div className='w-6 h-6 md:w-12 md:h-12 rounded-lg bg-blue-500/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-500/30 transition-colors'>
                                            <div className='text-blue-400 group-hover:text-blue-300 transition-colors scale-50 md:scale-100'>
                                                {service.icon}
                                            </div>
                                        </div>
                                        <h3 className='text-sm md:text-2xl font-bold text-white'>{service.title}</h3>
                                    </div>
                                </div>

                                <div className='p-2 md:p-6 mobile-card-content'>
                                    <p className='text-gray-300 mb-2 md:mb-4 text-xs md:text-base mobile-text break-keep'>
                                        {service.description}
                                    </p>
                                    <div className='bg-blue-500/10 text-blue-400 px-2 md:px-4 py-0.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-6 inline-block'>
                                        {service.price}
                                    </div>
                                    <ul className='space-y-0.5 md:space-y-3 mobile-list'>
                                        {service.features.map((feature, fIndex) => (
                                            <li
                                                key={fIndex}
                                                className='flex items-start gap-1 md:gap-2 text-gray-400 group-hover:text-gray-300 transition-colors mobile-list-item'
                                            >
                                                <div className='h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-blue-500 mt-1 md:mt-2 shrink-0' />
                                                <span className='text-xs md:text-base'>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial='hidden'
                    animate={isInView ? "visible" : "hidden"}
                    variants={variants}
                    className='flex justify-center'
                >
                    <Link to='/portfolio' onClick={() => window.scrollTo(0, 0)}>
                        <Button
                            size='lg'
                            variant='outline'
                            className='bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400 text-lg px-8'
                        >
                            포트폴리오 더 보기
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
