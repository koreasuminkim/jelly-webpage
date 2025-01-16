import HeroSection from "@/components/sections/HeroSection";
import { HookSection } from "@/components/sections/HookSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { TargetSection } from "@/components/sections/TargetSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <HeroSection />
            <HookSection />
            <ServicesSection />
            <TargetSection />
            <ProcessSection />
            <TeamSection />
            <CTASection />
        </div>
    );
}
