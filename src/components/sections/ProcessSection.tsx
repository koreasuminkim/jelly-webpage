import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

export default function ProcessSection() {
    const { t } = useTranslation();
    const { ref, isInView, variants, isMobile } = useScrollAnimation();
    
    const steps = [
        {
            icon: <Lightbulb className='h-8 w-8' />,
            title: t('process.steps.analysis.title'),
            description: t('process.steps.analysis.description'),
        },
        {
            icon: <Code2 className='h-8 w-8' />,
            title: t('process.steps.planning.title'),
            description: t('process.steps.planning.description'),
        },
        {
            icon: <Settings className='h-8 w-8' />,
            title: t('process.steps.development.title'),
            description: t('process.steps.development.description'),
        },
        {
            icon: <Rocket className='h-8 w-8' />,
            title: t('process.steps.quality.title'),
            description: t('process.steps.quality.description'),
        },
    ];
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: isMobile ? 0 : i * 0.2,
                duration: isMobile ? 0 : 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    return (
        <section id='process' className='py-32 bg-gray-900 relative overflow-hidden mobile-section'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]' />
            {isMobile ? (
                <div className='container mx-auto px-4 relative'>
                    <div className='text-center mb-10 md:mb-16'>
                        <h2 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white font-display mobile-heading'>{t('process.title')}</h2>
                        <p className='text-gray-400 text-sm md:text-lg mobile-text whitespace-pre-line'>
                            {t('process.subtitle')}
                        </p>
                    </div>
                    <div className='relative'>
                        <div className='absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform -translate-y-1/2 hidden md:block' />
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 relative mobile-grid'>
                            {steps.map((step, index) => (
                                <div key={step.title} className='relative'>
                                    <Card className='bg-gray-800/50 border-gray-700 p-3 md:p-8 hover:border-blue-500 transition-all backdrop-blur-sm relative group hover:-translate-y-2 duration-300 mobile-card'>
                                        <div className='absolute -top-2 -left-2 md:-top-4 md:-left-4 w-5 h-5 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm'>
                                            {index + 1}
                                        </div>

                                        {index < steps.length - 1 && (
                                            <div className='hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600 transform -translate-y-1/2' />
                                        )}

                                        <div className='rounded-full bg-blue-500/10 p-2 md:p-4 w-fit mb-2 md:mb-6 group-hover:bg-blue-500/20 transition-colors'>
                                            <div className="scale-75 md:scale-100">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <h3 className='text-base md:text-xl font-bold mb-1 md:mb-3 text-white'>{step.title}</h3>
                                        <p className='text-gray-400 text-xs md:text-base group-hover:text-gray-300 transition-colors break-keep'>
                                            {step.description}
                                        </p>
                                    </Card>
                                </div>
                            ))}
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
                    <div className='text-center mb-10 md:mb-16'>
                        <h2 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white font-display mobile-heading'>{t('process.title')}</h2>
                        <p className='text-gray-400 text-sm md:text-lg mobile-text whitespace-pre-line'>
                            {t('process.subtitle')}
                        </p>
                    </div>
                    <div className='relative'>
                        <div className='absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform -translate-y-1/2 hidden md:block' />
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 relative mobile-grid'>
                            {steps.map((step, index) => (
                                <motion.div key={step.title} custom={index} variants={itemVariants} className='relative'>
                                    <Card className='bg-gray-800/50 border-gray-700 p-3 md:p-8 hover:border-blue-500 transition-all backdrop-blur-sm relative group hover:-translate-y-2 duration-300 mobile-card'>
                                        <div className='absolute -top-2 -left-2 md:-top-4 md:-left-4 w-5 h-5 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm'>
                                            {index + 1}
                                        </div>

                                        {index < steps.length - 1 && (
                                            <div className='hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600 transform -translate-y-1/2' />
                                        )}

                                        <div className='rounded-full bg-blue-500/10 p-2 md:p-4 w-fit mb-2 md:mb-6 group-hover:bg-blue-500/20 transition-colors'>
                                            <div className="scale-75 md:scale-100">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <h3 className='text-base md:text-xl font-bold mb-1 md:mb-3 text-white'>{step.title}</h3>
                                        <p className='text-gray-400 text-xs md:text-base group-hover:text-gray-300 transition-colors break-keep'>
                                            {step.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
