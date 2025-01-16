import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Rocket, Users } from "lucide-react";

export function TargetSection() {
    const { ref, isInView } = useScrollAnimation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            rotateY: -15,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 1,
            },
        },
    };

    const targets = [
        {
            icon: <Rocket className='h-12 w-12 text-blue-500' />,
            title: "스타트업",
            description: "MVP 개발부터 스케일업까지, 빠른 성장을 원하는 스타트업",
            features: [
                "빠른 MVP 개발 필요",
                "기술 스택 선정 고민",
                "제한된 개발 리소스",
                "시장 검증이 필요한 아이디어",
            ],
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000&h=1000",
        },
        {
            icon: <Building2 className='h-12 w-12 text-blue-500' />,
            title: "중소/중견기업",
            description: "신사업 프로젝트 아웃소싱이 필요한 성장기업",
            features: ["신규 사업 개발 프로젝트", "전문 개발팀 아웃소싱", "기술 검증 및 도입", "프로젝트 기간 준수"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000&h=1000",
        },
        {
            icon: <Users className='h-12 w-12 text-blue-500' />,
            title: "협업 파트너사",
            description: "클라이언트를 위한 프리미엄 IT 솔루션이 필요한 에이전시",
            features: [
                "프리미엄 IT 개발 협업",
                "클라이언트 프로젝트 수주",
                "안정적인 기술 파트너십",
                "원스톱 솔루션 제공",
            ],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000&h=1000",
        },
    ];

    return (
        <section id='target' className='py-32 bg-black relative overflow-hidden'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]' />
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className='container mx-auto px-4 relative'
            >
                <motion.div variants={itemVariants} className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4 text-white font-display'>Who We Serve?</h2>
                    <p className='text-gray-400 text-lg'>AgentForce와 함께 성장할 파트너를 찾습니다</p>
                </motion.div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {targets.map((target) => (
                        <motion.div
                            key={target.title}
                            variants={itemVariants}
                            className='group relative bg-gray-900/50 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2'
                        >
                            <div className='relative h-48 overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/80' />
                                <img
                                    src={target.image}
                                    alt={target.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                />
                                <div className='absolute bottom-4 left-4 flex items-center gap-3'>
                                    <div className='p-2 rounded-lg bg-blue-500/20 backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors duration-300'>
                                        {target.icon}
                                    </div>
                                    <h3 className='text-2xl font-bold text-white'>{target.title}</h3>
                                </div>
                            </div>

                            <div className='p-6'>
                                <p className='text-gray-300 mb-6'>{target.description}</p>
                                <ul className='space-y-3'>
                                    {target.features.map((feature, fIndex) => (
                                        <li
                                            key={fIndex}
                                            className='text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors'
                                        >
                                            <div className='h-1.5 w-1.5 rounded-full bg-blue-500' />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
