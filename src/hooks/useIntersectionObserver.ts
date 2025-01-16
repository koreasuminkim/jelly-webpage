import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options = { threshold: 0.1, rootMargin: '50px' }) {
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animate-section, .animate-fade-in, .animate-scale-in, .animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-rotate-in');
    elements.forEach((element) => observer.current?.observe(element));

    return () => observer.current?.disconnect();
  }, [options]);

  return observer;
}