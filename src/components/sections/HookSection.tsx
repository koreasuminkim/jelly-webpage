import { useEffect, useRef } from 'react';
import { Bot, Rocket, Sparkles, Zap } from 'lucide-react';

const achievements = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'AI 기술의 혁신',
    highlight: '볼트랩은 AI의 기술 발전을\n그대로 외주 비용에 녹여냈습니다',
    description: '혁신적인 자체 개발 자동화 시스템으로\n개발 효율 극대화'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: '3배 빠른 개발',
    highlight: '50+ 성공 프로젝트',
    description: '웹/모바일 앱, AI 솔루션 등\n다양한 분야의 프로젝트 수행'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: '3배 저렴한 비용',
    highlight: '98% 고객 만족도',
    description: '높은 품질과 합리적인 비용으로\n고객 만족 실현'
  }
];

export function HookSection() {
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll('.hook-item');
    items.forEach((item) => observer.current?.observe(item));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <section id="hook" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-display leading-relaxed">
            AI 기술로 인해 개발자들은 편리해지고 있는데,<br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              왜 외주 프로덕트 가격은 변동이 없을까요?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="hook-item opacity-0 translate-y-8" 
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group h-full perspective">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110" />
                
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800 group-hover:border-blue-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 h-full transform-gpu group-hover:translate-y-[-0.5rem] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 w-fit group-hover:scale-110 transition-transform duration-500">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-blue-400 font-semibold leading-relaxed whitespace-pre-line">
                      {item.highlight}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}