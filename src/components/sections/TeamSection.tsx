import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const memberKeys = [
    "director",
    "techLead",
    "backend",
    "appDeveloper1",
    "designer",
    "appDeveloper2",
    "aiLead",
];

const memberImages = [
    "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    "/logo/columbia-logo.png",
    "/logo/washington.svg",
    "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
];

export default function TeamSection() {
    const { t } = useTranslation();
    
    const teamMembers = memberKeys.map((key, index) => {
        const memberData = t(`team.members.${key}`, { returnObjects: true }) as {
            role: string;
            education: string;
            specs: string[];
            description: string;
        };
        return {
            ...memberData,
            image: memberImages[index],
        };
    });
    const { ref, isInView, variants, isMobile } = useScrollAnimation();
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: isMobile ? 0 : i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    return (
        <section id='team' className='py-32 bg-black relative overflow-hidden mobile-section'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]' />
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                className='container mx-auto px-4 relative'
            >
                <div className='text-center mb-10 md:mb-16'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white font-display mobile-heading'>{t('team.title')}</h2>
                    <p className='text-gray-400 text-sm md:text-base mobile-text whitespace-pre-line'>
                        {t('team.subtitle')}
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-8 max-w-7xl mx-auto mobile-grid'>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.role}
                            custom={index}
                            variants={itemVariants}
                            className={`animate-section team-card ${isMobile && index === 0 ? "col-span-2" : ""}`}
                        >
                            <Card className='bg-gray-900/50 border-gray-800 p-2 md:p-6 hover:border-blue-500/50 transition-all text-center group mobile-card h-full'>
                                <div className='mb-1 md:mb-6 relative mx-auto'>
                                    <div className={`${index === 0 && isMobile ? 'w-16 h-16' : 'w-12 h-12 md:w-24 md:h-24'} mx-auto relative`}>
                                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse group-hover:animate-none opacity-50' />
                                        <Avatar className='w-full h-full border-1 md:border-4 border-gray-800 group-hover:border-blue-500 transition-colors bg-white p-1 md:p-2 flex items-center justify-center'>
                                            <img
                                                src={member.image}
                                                alt={member.role}
                                                className='w-full h-full object-contain'
                                            />
                                        </Avatar>
                                    </div>
                                </div>
                                <div className={`px-1 md:px-3 py-0.5 md:py-1 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm mb-1 md:mb-3 inline-block ${
                                    index === 0 && isMobile ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' : ''
                                }`}>
                                    {member.role}
                                </div>
                                <p className='text-gray-400 text-xs md:text-sm mb-1 md:mb-3 mobile-text'>{member.education}</p>
                                <div className={`space-y-0.5 md:space-y-1.5 mb-1 md:mb-4 mobile-list ${
                                    isMobile && index !== 0 ? 'hidden' : 'hidden md:block'
                                }`}>
                                    {member.specs.map((spec, idx) => (
                                        <p key={idx} className='text-gray-300 text-xs mobile-list-item'>
                                            {spec}
                                        </p>
                                    ))}
                                </div>
                                <p className={`text-white text-xs md:text-sm font-medium break-keep ${
                                    index === 0 && isMobile ? 'text-sm' : ''
                                }`}>{member.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
