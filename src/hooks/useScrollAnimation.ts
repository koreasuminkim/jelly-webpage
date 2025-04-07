import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const useScrollAnimation = (options = { once: false }) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    
    // 모바일 디바이스 감지
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);
    
    const isInView = useInView(ref, {
        once: options.once,
        margin: "0px 0px -100px 0px",
        amount: 0, // 50% 정도만 보여도 애니메이션 시작
    });

    const variants = {
        hidden: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: isMobile ? 0 : 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return { ref, isInView, variants, isMobile };
};
