import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'AI 기반 HR 플랫폼',
    category: '웹 플랫폼',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600',
    description: '인공지능을 활용한 채용 프로세스 자동화 및 인재 매칭 시스템',
    tags: ['React', 'Node.js', 'AI/ML', 'AWS'],
    duration: '4개월',
    client: '국내 대기업'
  },
  {
    title: '스마트 팩토리 모니터링',
    category: '산업용 솔루션',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600',
    description: '실시간 생산 현황 모니터링 및 예측 정비 시스템',
    tags: ['IoT', 'React', 'Python', 'TensorFlow'],
    duration: '6개월',
    client: '제조업체'
  },
  {
    title: '핀테크 결제 시스템',
    category: '금융 솔루션',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
    description: '블록체인 기반 안전한 결제 처리 시스템',
    tags: ['Blockchain', 'Node.js', 'React Native'],
    duration: '5개월',
    client: '핀테크 스타트업'
  },
  {
    title: '헬스케어 플랫폼',
    category: '모바일 앱',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600',
    description: '개인 맞춤형 건강 관리 및 의료 서비스 연계 플랫폼',
    tags: ['React Native', 'Node.js', 'AI/ML'],
    duration: '4개월',
    client: '의료 서비스 기업'
  }
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <Link to="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display">Our Portfolio</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          AgentForce가 만든 혁신적인 솔루션들을 소개합니다. 
          각 프로젝트는 고객의 비즈니스 성장에 실질적인 가치를 제공했습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-500 text-sm font-medium mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                  <span className="text-gray-500 text-sm">{project.duration}</span>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-gray-500 text-sm">
                  Client: {project.client}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}