import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = { threshold: 0.1, rootMargin: '50px' }) {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // 모바일 디바이스 감지
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 모바일에서는 애니메이션 클래스를 추가하지 않고 바로 보이게 처리
          if (isMobile) {
            // 모바일에서는 opacity: 1과 transform: none을 직접 적용
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'none';
          } else {
            entry.target.classList.add('animate-in');
          }
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animate-section, .animate-fade-in, .animate-scale-in, .animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-rotate-in');
    elements.forEach((element) => observer.current?.observe(element));

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      observer.current?.disconnect();
    };
  }, [options, isMobile]);

  return { observer, isMobile };
}