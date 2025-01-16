import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-500 to-purple-500 bg-clip-text text-transparent font-display">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            볼트랩과 함께라면 당신의 아이디어가 현실이 됩니다.
            <br />
            지금 바로 무료 컨설팅을 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              무료 컨설팅 신청
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-950 text-lg px-8">
              견적 문의하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}