import HeroSection from "@/components/sections/HeroSection";
import { HookSection } from "@/components/sections/HookSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { TargetSection } from "@/components/sections/TargetSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/lib/seo";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    
    const seoData = pageSEO({
        title: t('seo.home.title'),
        description: t('seo.home.description'),
        keywords: t('seo.home.keywords'),
        canonicalUrl: "https://boltlab.co.kr/"
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
