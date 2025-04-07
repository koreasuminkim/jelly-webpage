import { motion, useInView } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, Zap, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 2000, className = "" }: { end: number; duration?: number; className?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const countRef = useRef(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            const startTime = Date.now();
            const endValue = end;
            const timer = setInterval(() => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);

                if (progress === 1) {
                    clearInterval(timer);
                    setCount(endValue);
                    setHasAnimated(true);
                } else {
                    const currentCount = Math.floor(endValue * progress);
                    if (currentCount !== countRef.current) {
                        countRef.current = currentCount;
                        setCount(currentCount);
                    }
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {count}
        </span>
    );
}

type Achievement = {
    icon: JSX.Element;
    title: JSX.Element;
    description: string;
} & (
    | {
          stat: {
              value: number;
              unit: string;
              label: string;
          };
      }
    | {
          stats: Array<{
              value: number;
              unit: string;
              label: string;
          }>;
      }
);

export function HookSection() {
    const { ref, isInView, isMobile } = useScrollAnimation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                duration: 0.8,
            },
        },
    };

    const achievements: Achievement[] = [
        {
            icon: <Bot className='h-8 w-8' />,
            title: (
                <span className='flex items-center gap-2'>
                    <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-3xl'>
                        AI
                    </span>
                    <span>자체 개발 자동화 시스템</span>
                </span>
            ),
            description: "볼트랩은 AI의 기술 발전을\n그대로 외주 비용에 녹여냈습니다",
            stat: {
                value: 300,
                unit: "%",
                label: "개발 효율 증가",
            },
        },
        {
            icon: <Zap className='h-8 w-8' />,
            title: (
                <span className='flex items-center gap-1'>
                    <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-3xl'>
                        3
                    </span>
                    <span>배 빠른 개발</span>
                </span>
            ),
            description: "웹/모바일 앱, AI 솔루션 등\n다양한 분야의 프로젝트 수행",
            stats: [
                {
                    value: 50,
                    unit: "+",
                    label: "프로젝트 완수",
                },
                {
                    value: 1.5,
                    unit: "개월",
                    label: "평균 개발기간",
                },
            ],
        },
        {
            icon: <Sparkles className='h-8 w-8' />,
            title: (
                <span className='flex items-center gap-1'>
                    <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-3xl'>
                        3
                    </span>
                    <span>배 저렴한 비용</span>
                </span>
            ),
            description: "높은 품질과 합리적인 비용으로\n고객 만족 실현",
            stats: [
                {
                    value: 98,
                    unit: "%",
                    label: "고객 만족도",
                },
                {
                    value: 85,
                    unit: "%",
                    label: "재계약률",
                },
            ],
        },
    ];

    return (
        <section id='hook' className='py-24 bg-black relative overflow-hidden mobile-section'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent' />
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className='container mx-auto px-4 relative'
            >
                <motion.div variants={itemVariants} className='max-w-4xl mx-auto text-center mb-12 md:mb-16'>
                    <h2 className='font-display mobile-heading'>
                        <span className='block text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white tracking-tight'>
                            AI 시대의 개발 비용
                        </span>
                        <span className='block text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight'>
                            이제는 달라져야 합니다
                        </span>
                    </h2>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mobile-grid'>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={typeof item.title === "string" ? item.title : "key"}
                            variants={itemVariants}
                            className={`relative group h-full perspective mobile-card ${index === 0 ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''}`}
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110' />

                            <div className='relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800 group-hover:border-blue-500/50 rounded-2xl p-3 md:p-8 backdrop-blur-sm transition-all duration-500 h-full transform-gpu group-hover:translate-y-[-0.5rem] group-hover:shadow-2xl group-hover:shadow-blue-500/10 mobile-card-inner'>
                                <div className='flex flex-row items-center gap-2 md:gap-4 mb-3 md:mb-6'>
                                    <div className='relative shrink-0'>
                                        <div className='absolute inset-0 bg-blue-500/20 blur-xl rounded-full transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                                        <div className='relative rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-2 md:p-4 w-fit group-hover:scale-110 transition-transform duration-500'>
                                            <div className='text-blue-400 group-hover:text-blue-300 transition-colors'>
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='text-sm md:text-xl font-bold text-white tracking-tight leading-tight'>
                                        {typeof item.title === 'string' ? item.title : (
                                            <span className='flex flex-col items-start gap-0'>
                                                <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-lg md:text-2xl'>
                                                    {item.title.props.children[0].props.children}
                                                </span>
                                                <span className='text-xs md:text-sm'>{item.title.props.children[1].props.children}</span>
                                            </span>
                                        )}
                                    </h3>
                                </div>

                                <div className='space-y-2 md:space-y-4'>
                                    <p className='text-gray-400 text-xs md:text-sm leading-tight md:leading-relaxed break-keep'>
                                        {item.description.split('\n').map((line, i) => (
                                            <span key={i} className="block mb-1">{line}</span>
                                        ))}
                                    </p>

                                    {"stat" in item ? (
                                        <div className='bg-blue-500/10 rounded-xl p-2 md:p-4 text-center mt-2 md:mt-4'>
                                            <div className='text-xl md:text-3xl font-bold text-blue-400'>
                                                <CountUp end={item.stat.value} className='text-blue-400' />
                                                {item.stat.unit}
                                            </div>
                                            <div className='text-xs md:text-sm text-gray-400 mt-1'>{item.stat.label}</div>
                                        </div>
                                    ) : "stats" in item ? (
                                        <div className='grid grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4'>
                                            {item.stats.map((stat, index) => (
                                                <div key={index} className='bg-blue-500/10 rounded-xl p-2 md:p-4 text-center'>
                                                    <div className='text-base md:text-2xl font-bold text-blue-400'>
                                                        <CountUp end={stat.value} className='text-blue-400' />
                                                        {stat.unit}
                                                    </div>
                                                    <div className='text-xs md:text-sm text-gray-400 mt-1'>{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>

                                <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700' />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
