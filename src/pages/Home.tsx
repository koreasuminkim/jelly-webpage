import HeroSection from "@/components/sections/HeroSection";
import { HookSection } from "@/components/sections/HookSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { TargetSection } from "@/components/sections/TargetSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/lib/seo";

export default function Home() {
    const seoData = pageSEO({
        title: "젤리(Jelly) | 홈",
        description: "젤리(Jelly) - 혁신적인 웹 개발 및 디지털 솔루션 제공업체. Jellys는 최신 기술로 비즈니스의 디지털 전환을 지원합니다. 웹사이트 개발, 앱 개발, 디지털 마케팅 서비스를 제공합니다.",
        keywords: "젤리, Jelly, 볼트 랩, 젤리 홈페이지, Jelly 홈페이지, 젤리 개발, Jelly 개발, 웹개발, 앱개발, 디지털 마케팅, 소프트웨어 개발, 기술 컨설팅",
        canonicalUrl: "https://boltlab.co/"
    });

    return (
        <div className='min-h-screen bg-black text-white'>
            <SEO seo={seoData} />
            <HeroSection />
            <HookSection />
            <ProcessSection />
            <TeamSection />
            <TargetSection />
            <ServicesSection />
            <CTASection />
        </div>
    );
}
