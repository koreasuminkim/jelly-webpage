import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/lib/seo";

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
        title: "무코",
        category: "대형 커뮤니티 사이트",
        image: "/portfolio/muko.png",
        description: "국내 영화 커뮤니티 사이트.\n커뮤니티, 이벤트, 쪽지, 출석, 공지 등\nMAU 약 30만",
        tags: ["NextJS", "NestJS", "AWS", "ECS", "Docker"],
        duration: "3개월",
        url: "https://muko.kr"
    },
    {
        title: "자동차 평가 관리 시스템",
        category: "내부 시스템",
        image: "/portfolio/ctscompany.png",
        description: "자동차 사고 수리 평가 내부 시스템.\n어드민 평가사 관리, 평가 관리, 평가 입력, 출퇴근 시스템",
        tags: ["NextJS", "NestJS", "AWS"],
        duration: "2개월",
        url: ""
    },
    {
        title: "피터펫",
        category: "홈페이지",
        image: "/portfolio/peterpet.png",
        description: "펫카페 홈페이지.\n홈페이지, 예약관리, 관리자 CMS 시스템",
        tags: ["NextJS", "NestJS", "AWS"],
        duration: "1개월",
        url: "https://peterpet.net"
    },
    {
        title: "블루클럽 창업",
        category: "홈페이지",
        image: "/portfolio/blueclub.png",
        description: "블루클럽 창업 홈페이지.\n랜딩페이지",
        tags: ["NextJS", "Vercel"],
        duration: "0.5개월",
        url: "https://blueclub-changup.com"
    },
    {
        title: "스터디타파",
        category: "하이브리드 앱 플랫폼",
        image: "/portfolio/스터디타파.png",
        description:
            "CPA/CTA 전문직 수험생을 위한 플랫폼.\n커뮤니티, 채팅, 멘토링, 스터디그룹,\n강의평, 알림 등 통합 기능 제공",
        tags: ["React Native", "NestJS", "AWS"],
        duration: "4개월",
        url: "https://play.google.com/store/apps/details?id=com.irurilabs.studytapa&hl=ko"
    },
    {
        title: "MyQuark",
        category: "웹 플랫폼",
        image: "/portfolio/getMyquark.png",
        description: "수학 문제 은행 및 AI 기반 디지털 변환 플랫폼.\n문제은행 클라우드 구축,\nPDF to HWP 시스템 구축",
        tags: ["NextJS", "NestJS", "Python", "FastAPI", "TensorFlow"],
        duration: "2개월",
        url: "https://get.myquark.app"
    },
    {
        title: "Choonsim",
        category: "웹앱 플랫폼",
        image: "/portfolio/choonsim.png",
        description: "암호화폐 거래 플랫폼.\n실시간 가격 조회, 거래,\n차트 조회 기능",
        tags: ["React", "Vite", "NestJS"],
        duration: "0.5개월",
        url: "https://www.choonsim.com/"
    },
    {
        title: "Koso",
        category: "웹 플랫폼",
        image: "/portfolio/Koso.png",
        description: "이커머스 파우더 마켓 웹 플랫폼",
        tags: ["React", "Vite", "NestJS", "MongoDB"],
        duration: "1개월",
        url: "https://kosohada.com"
    },
    {
        title: "Eden",
        category: "웹 플랫폼",
        image: "/portfolio/Eden.png",
        description: "버츄얼 유튜버를 위한\n아바타 마켓플레이스",
        tags: ["React", "NestJS", "AWS"],
        duration: "1개월",
        url: "https://eden-world.net/"
    },
    {
        title: "DutyFree Price",
        category: "웹 플랫폼 & PWA",
        image: "/portfolio/DFP.png",
        description: "면세점 상품 크롤링\n가격비교 서비스",
        tags: ["React", "NestJS", "Python"],
        duration: "3개월",
        url: "https://dutyfree-price.com/"
    },
    {
        title: "Apex",
        category: "웹 플랫폼",
        image: "/portfolio/Apex.png",
        description: "영어 학습 자료 판매 플랫폼",
        tags: ["React", "NestJS", "AWS"],
        duration: "2개월",
        url: "https://a-pex.co.kr/"
    },
    {
      title: "Podcaster",
      category: "웹앱 플랫폼",
      image: "/portfolio/Podcaster.png",
      description: "팟캐스트 플랫폼.\nAI 팟캐스트 생성, 스트리밍,\n구독 기능",
      tags: ["React", "NestJS", "AWS", "OpenAI"],
      duration: "1개월",
      url: "https://podcaster.boltlab.co/"
    },
    {
      title: "Reportable",
      category: "웹앱 플랫폼",
      image: "/portfolio/Reportable.png",
      description: "리포트 자동화 플랫폼.\n데이터 시각화, 리포트 생성,\n공유 및 협업 기능",
      tags: ["React", "NestJS", "Python", "AWS"],
      duration: "0.5개월",
      url: "https://reportable.xyz"
    },
    {
        title: "DeepSol",
        category: "웹앱 플랫폼",
        image: "/portfolio/deepsol.png",
        description: "수학 문제 풀이 QNA 플랫폼.\n추론 모델 기반 수학 문제 풀이 시스템",
        tags: ["Python", "React", "NestJS"],
        duration: "1개월",
        url: "https://deepsol.kr"
    },
    {
        title: "Outta",
        category: "홈페이지",
        image: "/portfolio/Outta.png",
        description: "인공지능 단체 소개 페이지",
        tags: ["React", "Node.js"],
        duration: "0.2개월",
        url: "https://outta.ai"
    },
    {
        title: "OneEighty",
        category: "홈페이지",
        image: "/portfolio/OneEighty.png",
        description: "소개팅 서비스 웹사이트",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: "https://oneeighty.boltlab.co"
    },
    {
        title: "Bridge Marketing",
        category: "홈페이지",
        image: "/portfolio/BridgeMarketing.png",
        description: "마케팅 에이전시 랜딩페이지",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: "https://bridgemarketing.xyz/"
    },
    {
        title: "Heartsolo",
        category: "홈페이지",
        image: "/portfolio/Heartsolo.png",
        description: "스키장 강습 + 파티 상품 판매 페이지",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: "https://heartsolo.com"
    },
    {
        title: "Designation",
        category: "홈페이지",
        image: "/portfolio/Designation.png",
        description: "디자인 에이전시 랜딩페이지",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: ""
    },
];

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    const seoData = pageSEO({
        title: "젤리(Jelly) 포트폴리오",
        description: "젤리(Jelly)이 제작한 다양한 웹 및 앱 프로젝트 포트폴리오를 소개합니다. Jelly의 웹 개발, 앱 개발, 디지털 마케팅 등 다양한 분야의 프로젝트를 확인하세요.",
        keywords: "젤리 포트폴리오, Jelly 포트폴리오, 볼트 랩 프로젝트, Jelly 프로젝트, 젤리 개발 사례, Jelly 개발 사례, 젤리, Jelly, 웹개발, 앱개발, 프로젝트, 사례",
        canonicalUrl: "https://teamjelly.co.kr/portfolio"
    });

    return (
        <div className='min-h-screen bg-black'>
            <SEO seo={seoData} />
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

                <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white font-display'>젤리(Jelly) 포트폴리오</h1>
                <p className='text-xl text-gray-400 mb-12 max-w-2xl'>
                    젤리(Jelly)이 만든 포트폴리오들을 소개합니다. <br />
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
                                {project.url ? (
                                    <div className='mt-4'>
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm transition-colors'
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            사이트 바로가기
                                        </a>
                                    </div>
                                ) : (
                                    <div className='mt-4'>
                                        <span className='inline-flex items-center px-4 py-2 bg-gray-700 cursor-default rounded-md text-gray-300 text-sm'>
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            비공개 프로젝트
                                        </span>
                                    </div>
                                )}
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
