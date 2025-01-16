import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options = { once: false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: options.once,
        margin: "0px 0px -100px 0px",
        amount: 0, // 50% 정도만 보여도 애니메이션 시작
    });

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return { ref, isInView, variants };
};
