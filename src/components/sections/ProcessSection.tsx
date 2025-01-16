import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Settings } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
    {
        icon: <Lightbulb className='h-8 w-8' />,
        title: "프로덕트 분석",
        description: "비즈니스 목표를 이해하고 최적의 기술 스택을 제안합니다.",
    },
    {
        icon: <Code2 className='h-8 w-8' />,
        title: "설계 및 기획",
        description: "기획/디자인을 검토하고 개발 범위를 최적화합니다.",
    },
    {
        icon: <Settings className='h-8 w-8' />,
        title: "개발 및 출시",
        description: "AgentForce AI를 활용한 신속한 개발과 품질 관리를 진행합니다.",
    },
    {
        icon: <Rocket className='h-8 w-8' />,
        title: "품질 관리",
        description: "다각도 테스트와 성능 최적화를 통해 안정성을 검증합니다.",
    },
];

export default function ProcessSection() {
    const { ref, isInView, variants } = useScrollAnimation();
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    return (
        <section id='process' className='py-32 bg-gray-900 relative overflow-hidden'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]' />
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                className='container mx-auto px-4 relative'
            >
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4 text-white font-display'>How We Work?</h2>
                    <p className='text-gray-400 text-lg'>
                        체계적이고 효율적인 개발 프로세스로 <br className='md:hidden' />성공적인 프로젝트를 완성합니다
                    </p>
                </div>
                <div className='relative'>
                    <div className='absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform -translate-y-1/2 hidden md:block' />
                    <div className='grid md:grid-cols-4 gap-8 relative'>
                        {steps.map((step, index) => (
                            <motion.div key={step.title} custom={index} variants={itemVariants} className='relative'>
                                <Card className='bg-gray-800/50 border-gray-700 p-8 hover:border-blue-500 transition-all backdrop-blur-sm relative group hover:-translate-y-2 duration-300'>
                                    <div className='absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                                        {index + 1}
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className='hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600 transform -translate-y-1/2' />
                                    )}

                                    <div className='rounded-full bg-blue-500/10 p-4 w-fit mb-6 group-hover:bg-blue-500/20 transition-colors'>
                                        {step.icon}
                                    </div>
                                    <h3 className='text-xl font-bold mb-3 text-white'>{step.title}</h3>
                                    <p className='text-gray-400 group-hover:text-gray-300 transition-colors'>
                                        {step.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
