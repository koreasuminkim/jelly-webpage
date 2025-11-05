import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center'
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className='bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl'
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className='text-2xl font-bold text-white mb-4'>문의 안내</h3>
                    <p className='text-gray-300 mb-8'>크몽을 통해 문의한 고객은 직접 연락이 불가합니다. 크몽 상담창을 이용해 주세요.</p>
                    <div className='flex justify-end'>
                        <Button
                            className='px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl'
                            onClick={onClose}
                        >
                            확인
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
