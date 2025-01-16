import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import { HookSection } from "@/components/sections/HookSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { TargetSection } from "@/components/sections/TargetSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { Portfolio } from "@/pages/Portfolio";

function HomePage() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Navbar />
            <HeroSection />
            <HookSection />
            <ServicesSection />
            <TargetSection />
            <ProcessSection />
            <TeamSection />
            <CTASection />
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;
