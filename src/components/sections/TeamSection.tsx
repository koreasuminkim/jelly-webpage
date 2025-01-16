import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const teamMembers = [
    {
        role: "PM",
        education: "서울대학교 경영학과",
        specs: ["스타트업 창업 경험", "PMP 자격증", "프로젝트 관리 전문가"],
        description: "프로젝트 기획 및 관리",
        image: "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    },
    {
        role: "Tech Lead",
        education: "서울대학교 컴퓨터공학부",
        specs: ["스타트업 리드 개발자", "풀스택 엔지니어", "시스템 아키텍처 설계"],
        description: "개발 프로세스 및 기술 스택 총괄",
        image: "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    },
    {
        role: "Director",
        education: "서울대학교 전기정보공학부",
        specs: ["AI 특허 보유", "BoltLab Agent 개발", "풀스택 엔지니어"],
        description: "프로젝트 관리 총괄 및 품질보증",
        image: "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    },
    {
        role: "Infrastructure Lead",
        education: "서울대학교 수학과",
        specs: ["알고리즘 최적화 전문가", "Kubernetes 아키텍트", "분산 시스템 설계"],
        description: "인프라 및 성능 최적화 총괄",
        image: "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    },
    {
        role: "AI Lead",
        education: "서울대학교 AI 대학원",
        specs: ["LLM 연구 전문가", "AI 논문 다수 보유", "MLOps 아키텍트"],
        description: "AI 모델 개발 및 최적화 총괄",
        image: "https://upload.wikimedia.org/wikipedia/ko/8/8d/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90_%EB%A1%9C%EA%B3%A0.png?20161103100702",
    },
];

export default function TeamSection() {
    const { ref, isInView, variants } = useScrollAnimation();
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    return (
        <section id='team' className='py-32 bg-black relative overflow-hidden'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]' />
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                className='container mx-auto px-4 relative'
            >
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4 text-white font-display'>Why Trust Us?</h2>
                    <p className='text-gray-400 text-lg'>
                        대한민국 최고 수준의 개발 역량을 보유한 <br className='md:hidden' />
                        최고의 전문가들이 함께합니다
                    </p>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto'>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.role}
                            custom={index}
                            variants={itemVariants}
                            className={`animate-section team-card ${index === 2 ? "lg:col-start-3" : ""}`}
                        >
                            <Card className='bg-gray-900/50 border-gray-800 p-6 hover:border-blue-500/50 transition-all text-center group'>
                                <div className='mb-6 relative mx-auto'>
                                    <div className='w-24 h-24 mx-auto relative'>
                                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse group-hover:animate-none opacity-50' />
                                        <Avatar className='w-full h-full border-4 border-gray-800 group-hover:border-blue-500 transition-colors bg-white p-2 flex items-center justify-center'>
                                            <img
                                                src={member.image}
                                                alt={member.role}
                                                className='w-full h-full object-contain'
                                            />
                                        </Avatar>
                                    </div>
                                </div>
                                <div className='px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm mb-3 inline-block'>
                                    {member.role}
                                </div>
                                <p className='text-gray-400 text-sm mb-3'>{member.education}</p>
                                <div className='space-y-1.5 mb-4'>
                                    {member.specs.map((spec, index) => (
                                        <p key={index} className='text-gray-300 text-xs'>
                                            {spec}
                                        </p>
                                    ))}
                                </div>
                                <p className='text-white text-sm font-medium'>{member.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
