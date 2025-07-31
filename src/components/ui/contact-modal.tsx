import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function ContactModal({ isOpen, onClose, onConfirm }: ContactModalProps) {
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
                    <h3 className='text-2xl font-bold text-white mb-2'>카카오 채널로 연결</h3>
                    <p className='text-gray-400 mb-6'>젤리 카카오 채널로 이동하여 상담을 시작하시겠습니까?</p>
                    <div className='flex gap-3'>
                        <Button
                            className='flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl'
                            onClick={onConfirm}
                        >
                            계속하기
                        </Button>
                        <Button
                            variant='outline'
                            className='flex-1 border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 rounded-xl'
                            onClick={onClose}
                        >
                            취소
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
