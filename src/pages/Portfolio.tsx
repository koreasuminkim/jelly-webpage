import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    title: string;
}

function ImageModal({ isOpen, onClose, image, title }: ImageModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className='relative w-full max-w-[1200px] max-h-[80vh] bg-gray-900/50 rounded-2xl overflow-hidden'
                    onClick={(e) => e.stopPropagation()}
                >
                    <Button
                        variant='ghost'
                        size='icon'
                        className='absolute top-4 right-4 text-white hover:bg-white/20 z-10'
                        onClick={onClose}
                    >
                        <X className='h-6 w-6' />
                    </Button>
                    <div className='w-full h-full flex items-center justify-center p-4'>
                        <img src={image} alt={title} className='max-w-full max-h-[70vh] object-contain rounded-lg' />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

const projects = [
    {
        title: "스터디타파",
        category: "하이브리드 앱 플랫폼",
        image: "/portfolio/스터디타파.png",
        description:
            "CPA/CTA 전문직 수험생을 위한 플랫폼.\n커뮤니티, 채팅, 멘토링, 스터디그룹,\n강의평, 알림 등 통합 기능 제공",
        tags: ["React Native", "NestJS", "AWS"],
        duration: "4개월",
    },
    {
        title: "MyQuark",
        category: "웹 플랫폼",
        image: "/portfolio/getMyquark.png",
        description: "수학 문제 은행 및 AI 기반 디지털 변환 플랫폼.\n문제은행 클라우드 구축,\nPDF to HWP 시스템 구축",
        tags: ["NextJS", "NestJS", "Python", "FastAPI", "TensorFlow"],
        duration: "2개월",
    },
    {
        title: "Choonsim",
        category: "웹앱 플랫폼",
        image: "/portfolio/choonsim.png",
        description: "암호화폐 거래 플랫폼.\n실시간 가격 조회, 거래,\n차트 조회 기능",
        tags: ["React", "Vite", "NestJS"],
        duration: "0.5개월",
    },
    {
        title: "Koso",
        category: "웹 플랫폼",
        image: "/portfolio/Koso.png",
        description: "이커머스 파우더 마켓 웹 플랫폼",
        tags: ["React", "Vite", "NestJS", "MongoDB"],
        duration: "1개월",
    },
    {
        title: "Eden",
        category: "웹 플랫폼",
        image: "/portfolio/Eden.png",
        description: "버츄얼 유튜버를 위한\n아바타 마켓플레이스",
        tags: ["React", "NestJS", "AWS"],
        duration: "1개월",
    },
    {
        title: "DutyFree Price",
        category: "웹 플랫폼 & PWA",
        image: "/portfolio/DFP.png",
        description: "면세점 상품 크롤링\n가격비교 서비스",
        tags: ["React", "NestJS", "Python"],
        duration: "3개월",
    },
    {
        title: "Apex",
        category: "웹 플랫폼",
        image: "/portfolio/Apex.png",
        description: "영어 학습 자료 판매 플랫폼",
        tags: ["React", "NestJS", "AWS"],
        duration: "2개월",
    },
    {
        title: "DeepSol",
        category: "웹앱 플랫폼",
        image: "/portfolio/deepsol.png",
        description: "수학 문제 풀이 QNA 플랫폼.\n추론 모델 기반 수학 문제 풀이 시스템",
        tags: ["Python", "React", "NestJS"],
        duration: "1개월",
    },
    {
        title: "Outta",
        category: "홈페이지",
        image: "/portfolio/Outta.png",
        description: "인공지능 단체 소개 페이지",
        tags: ["React", "Node.js"],
        duration: "0.2개월",
    },
    {
        title: "OneEighty",
        category: "홈페이지",
        image: "/portfolio/OneEighty.png",
        description: "소개팅 서비스 웹사이트",
        tags: ["React", "Vite"],
        duration: "0.1개월",
    },
    {
        title: "Bridge Marketing",
        category: "홈페이지",
        image: "/portfolio/BridgeMarketing.png",
        description: "마케팅 에이전시 랜딩페이지",
        tags: ["React", "Vite"],
        duration: "0.1개월",
    },
    {
        title: "Heartsolo",
        category: "홈페이지",
        image: "/portfolio/Heartsolo.png",
        description: "스키장 강습 + 파티 상품 판매 페이지",
        tags: ["React", "Vite"],
        duration: "0.1개월",
    },
    {
        title: "Designation",
        category: "홈페이지",
        image: "/portfolio/Designation.png",
        description: "디자인 에이전시 랜딩페이지",
        tags: ["React", "Vite"],
        duration: "0.1개월",
    },
];

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    return (
        <div className='min-h-screen bg-black'>
            <div className='container mx-auto px-4 py-12'>
                <div className='mb-8'>
                    <Link to='/'>
                        <Button
                            variant='ghost'
                            className='text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors'
                        >
                            <ArrowLeft className='mr-2 h-4 w-4' />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white font-display'>Our Portfolio</h1>
                <p className='text-xl text-gray-400 mb-12 max-w-2xl'>
                    BoltLab이 만든 포트폴리오들을 소개합니다. <br />
                    각 프로젝트는 고객의 비즈니스를 성장시키고 있습니다.
                    <br />
                    포트폴리오는 현시점에도 늘어나고 있습니다.
                </p>

                <div className='grid md:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className='bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all group'
                        >
                            <div
                                className='aspect-video overflow-hidden cursor-pointer'
                                onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                            </div>
                            <div className='p-6'>
                                <div className='flex justify-between items-start mb-3'>
                                    <div>
                                        <span className='text-blue-500 text-sm font-medium mb-1 block'>
                                            {project.category}
                                        </span>
                                        <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
                                    </div>
                                    <span className='text-gray-500 text-sm'>{project.duration}</span>
                                </div>
                                <p className='text-gray-400 mb-4 text-sm whitespace-pre-line'>{project.description}</p>
                                <div className='flex flex-wrap gap-1.5 mb-3'>
                                    {project.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className='px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-xs'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                image={selectedImage?.src || ""}
                title={selectedImage?.title || ""}
            />
        </div>
    );
}
