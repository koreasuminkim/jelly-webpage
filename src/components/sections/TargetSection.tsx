import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Rocket, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TargetSection() {
    const { t } = useTranslation();
    const { ref, isInView, isMobile } = useScrollAnimation();

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
                delay: isMobile ? 0 : undefined,
            },
        },
    };

    const targets = [
        {
            icon: <Rocket className='h-8 w-8 md:h-12 md:w-12 text-blue-500' />,
            title: t('target.items.startup.title'),
            description: t('target.items.startup.description'),
            features: [
                t('target.items.startup.features.0'),
                t('target.items.startup.features.1'),
                t('target.items.startup.features.2'),
                t('target.items.startup.features.3'),
            ],
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000&h=1000",
        },
        {
            icon: <Building2 className='h-8 w-8 md:h-12 md:w-12 text-blue-500' />,
            title: t('target.items.enterprise.title'),
            description: t('target.items.enterprise.description'),
            features: [
                t('target.items.enterprise.features.0'),
                t('target.items.enterprise.features.1'),
                t('target.items.enterprise.features.2'),
                t('target.items.enterprise.features.3'),
            ],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000&h=1000",
        },
        {
            icon: <Users className='h-8 w-8 md:h-12 md:w-12 text-blue-500' />,
            title: t('target.items.partner.title'),
            description: t('target.items.partner.description'),
            features: [
                t('target.items.partner.features.0'),
                t('target.items.partner.features.1'),
                t('target.items.partner.features.2'),
                t('target.items.partner.features.3'),
            ],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000&h=1000",
        },
    ];

    return (
        <section id='target' className='py-32 bg-black relative overflow-hidden mobile-section'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]' />
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className='container mx-auto px-4 relative'
            >
                <motion.div variants={itemVariants} className='text-center mb-10 md:mb-16'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white font-display mobile-heading'>{t('target.title')}</h2>
                    <p className='text-gray-400 text-sm md:text-lg mobile-text'>{t('target.subtitle')}</p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mobile-grid'>
                    {targets.map((target) => (
                        <motion.div
                            key={target.title}
                            variants={itemVariants}
                            className='group relative bg-gray-900/50 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 mobile-card'
                        >
                            <div className='relative h-32 md:h-48 overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/80' />
                                <img
                                    src={target.image}
                                    alt={target.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                />
                                <div className='absolute bottom-2 md:bottom-4 left-2 md:left-4 flex items-center gap-2 md:gap-3'>
                                    <div className='p-1 md:p-2 rounded-lg bg-blue-500/20 backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors duration-300'>
                                        {target.icon}
                                    </div>
                                    <h3 className='text-lg md:text-2xl font-bold text-white'>{target.title}</h3>
                                </div>
                            </div>

                            <div className='p-3 md:p-6'>
                                <p className='text-gray-300 text-xs md:text-base mb-2 md:mb-6 break-keep'>{target.description}</p>
                                <ul className='space-y-1 md:space-y-3 mobile-list'>
                                    {target.features.map((feature, fIndex) => (
                                        <li
                                            key={fIndex}
                                            className='text-gray-400 flex items-center gap-1 md:gap-2 group-hover:text-gray-300 transition-colors text-xs md:text-base mobile-list-item'
                                        >
                                            <div className='h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-blue-500' />
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
