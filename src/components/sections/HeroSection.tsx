import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm mb-6 hero-text">
            Built by SNU Engineers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-blue-500 to-purple-500 bg-clip-text text-transparent font-display tracking-tight hero-title">
            Best Product, Best Price
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90 font-display tracking-tight hero-subtitle">
            IT Product Agency
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-bolt tracking-tight hero-text">
            BOLTLAB
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-light hero-text">
            AI AgentForce를 통한 최고의 프로덕트를, 최고의 가격에.<br />
            신세대 IT 개발 에이전시 볼트랩
          </p>
          <div className="flex justify-center hero-button">
            <Button 
              size="lg" 
              className="group relative bg-transparent border-2 border-blue-400/30 hover:border-blue-400 text-blue-400 hover:text-blue-300 text-lg px-10 py-6 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}