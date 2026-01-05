import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/lib/seo";
import { useTranslation } from "react-i18next";

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

const projectKeys = [
    "wepickup",
    "muko",
    "ctscompany",
    "peterpet",
    "blueclub",
    "studytapa",
    "myquark",
    "choonsim",
    "koso",
    "eden",
    "dfp",
    "apex",
    "podcaster",
    "reportable",
    "deepsol",
    "outta",
    "oneeighty",
    "bridgemarketing",
    "heartsolo",
    "designation",
];

const projectData = {
    wepickup: {
        title: "위픽업",
        image: "/portfolio/wepickup.png",
        tags: ["NextJS", "NestJS", "MariaDB", "OpenAI", "LangChain", "Firecrawl"],
        duration: "4개월",
        url: "https://up.wepick.kr/",
    },
    muko: {
        title: "무코",
        image: "/portfolio/muko.png",
        tags: ["NextJS", "NestJS", "AWS", "ECS", "Docker"],
        duration: "3개월",
        url: "https://muko.kr",
    },
    ctscompany: {
        title: "자동차 평가 관리 시스템",
        image: "/portfolio/ctscompany.png",
        tags: ["NextJS", "NestJS", "AWS"],
        duration: "2개월",
        url: "",
    },
    peterpet: {
        title: "피터펫",
        image: "/portfolio/peterpet.png",
        tags: ["NextJS", "NestJS", "AWS"],
        duration: "1개월",
        url: "https://peterpet.net",
    },
    blueclub: {
        title: "블루클럽 창업",
        image: "/portfolio/blueclub.png",
        tags: ["NextJS", "Vercel"],
        duration: "0.5개월",
        url: "https://blueclub-changup.com",
    },
    studytapa: {
        title: "스터디타파",
        image: "/portfolio/스터디타파.png",
        tags: ["React Native", "NestJS", "AWS", "Oracle"],
        duration: "4개월",
        url: "https://play.google.com/store/apps/details?id=com.irurilabs.studytapa&hl=ko",
    },
    myquark: {
        title: "MyQuark",
        image: "/portfolio/getMyquark.png",
        tags: ["NextJS", "NestJS", "Python", "FastAPI", "TensorFlow"],
        duration: "2개월",
        url: "https://get.myquark.app",
    },
    choonsim: {
        title: "Choonsim",
        image: "/portfolio/choonsim.png",
        tags: ["React", "Vite", "NestJS", "PostgreSQL"],
        duration: "0.5개월",
        url: "https://www.choonsim.com/",
    },
    koso: {
        title: "Koso",
        image: "/portfolio/Koso.png",
        tags: ["React", "Vite", "NestJS", "MongoDB"],
        duration: "1개월",
        url: "https://kosohada.com",
    },
    eden: {
        title: "Eden",
        image: "/portfolio/Eden.png",
        tags: ["React", "NestJS", "AWS"],
        duration: "1개월",
        url: "https://eden-world.net/",
    },
    dfp: {
        title: "DutyFree Price",
        image: "/portfolio/DFP.png",
        tags: ["React", "NestJS", "Python"],
        duration: "3개월",
        url: "https://dutyfree-price.com/",
    },
    apex: {
        title: "Apex",
        image: "/portfolio/Apex.png",
        tags: ["React", "NestJS", "AWS"],
        duration: "2개월",
        url: "https://a-pex.co.kr/",
    },
    podcaster: {
        title: "Podcaster",
        image: "/portfolio/Podcaster.png",
        tags: ["React", "NestJS", "AWS", "OpenAI"],
        duration: "1개월",
        url: "https://podcaster.boltlab.co/",
    },
    reportable: {
        title: "Reportable",
        image: "/portfolio/Reportable.png",
        tags: ["React", "NestJS", "Python", "AWS"],
        duration: "0.5개월",
        url: "https://reportable.xyz",
    },
    deepsol: {
        title: "DeepSol",
        image: "/portfolio/deepsol.png",
        tags: ["Python", "React", "NestJS"],
        duration: "1개월",
        url: "https://deepsol.kr",
    },
    outta: {
        title: "Outta",
        image: "/portfolio/Outta.png",
        tags: ["React", "Node.js"],
        duration: "0.2개월",
        url: "https://outta.ai",
    },
    oneeighty: {
        title: "OneEighty",
        image: "/portfolio/OneEighty.png",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: "https://oneeighty.boltlab.co",
    },
    bridgemarketing: {
        title: "Bridge Marketing",
        image: "/portfolio/BridgeMarketing.png",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: "https://bridgemarketing.xyz/",
    },
    heartsolo: {
        title: "Heartsolo",
        image: "/portfolio/Heartsolo.png",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: "https://heartsolo.com",
    },
    designation: {
        title: "Designation",
        image: "/portfolio/Designation.png",
        tags: ["React", "Vite"],
        duration: "0.1개월",
        url: "",
    },
};

export default function Portfolio() {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    const projects = projectKeys.map((key) => {
        const data = projectData[key as keyof typeof projectData];
        const projectInfo = t(`portfolio.projects.${key}`, { returnObjects: true });
        const info = typeof projectInfo === 'object' && projectInfo !== null 
            ? projectInfo as { category: string; description: string }
            : { category: 'homepage', description: '' };
        return {
            ...data,
            category: t(`portfolio.categories.${info.category}`) || info.category,
            description: info.description || '',
        };
    });

    const seoData = pageSEO({
        title: "볼트랩 포트폴리오",
        description: "볼트랩이 제작한 다양한 웹 및 앱 프로젝트 포트폴리오를 소개합니다. Boltlab의 웹 개발, 앱 개발, 디지털 마케팅 등 다양한 분야의 프로젝트를 확인하세요.",
        keywords: "볼트랩 포트폴리오, Boltlab 포트폴리오, 볼트 랩 프로젝트, Boltlab 프로젝트, 볼트랩 개발 사례, Boltlab 개발 사례, 볼트랩, Boltlab, 웹개발, 앱개발, 프로젝트, 사례",
        canonicalUrl: "https://teamBoltlab.co.kr/portfolio"
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
                            {t('portfolio.backToHome')}
                        </Button>
                    </Link>
                </div>

                <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white font-display'>{t('portfolio.title')}</h1>
                <p className='text-xl text-gray-400 mb-12 max-w-2xl whitespace-pre-line'>
                    {t('portfolio.description')}
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
                                            {t('portfolio.visitSite')}
                                        </a>
                                    </div>
                                ) : (
                                    <div className='mt-4'>
                                        <span className='inline-flex items-center px-4 py-2 bg-gray-700 cursor-default rounded-md text-gray-300 text-sm'>
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            {t('portfolio.privateProject')}
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
