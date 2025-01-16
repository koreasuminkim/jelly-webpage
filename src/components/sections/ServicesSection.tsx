import { Card } from '@/components/ui/card';
import { Code2, Layout, Laptop, Smartphone } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const services = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: '홈/랜딩페이지',
    description: '매력적인 브랜드 경험 제공',
    price: '₩100,000~',
    features: [
      '반응형 디자인',
      '최적화된 성능',
      '모던한 UI/UX',
      'Analytics 트래킹'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&h=1000'
  },
  {
    icon: <Laptop className="h-8 w-8" />,
    title: '웹 플랫폼',
    description: '확장 가능한 웹 서비스 개발',
    price: '₩400,000~',
    features: [
      'SaaS 플랫폼',
      '커머스 솔루션',
      '맞춤형 웹 서비스',
      '실시간 데이터 처리'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000&h=1000'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: '모바일 앱',
    description: 'iOS/Android 앱 개발',
    price: '₩700,000~',
    features: [
      '네이티브 앱',
      '크로스플랫폼 앱',
      '하이브리드 앱',
      'PWA'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000&h=1000'
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'AI 솔루션',
    description: '인공지능 서비스 통합',
    price: '₩1,000,000~',
    features: [
      'LLM 통합',
      '머신러닝 모델',
      '데이터 분석',
      'AI 워크플로우'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000&h=1000'
  }
];

export function ServicesSection() {
  useIntersectionObserver();

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-4xl font-bold mb-4 text-white font-display">What We Build?</h2>
          <p className="text-gray-400 text-lg">혁신적인 비즈니스 아이디어를 현실로 만들어드립니다</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`animate-section service-card stagger-${index + 1}`}
            >
              <Card className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                    {service.price}
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}