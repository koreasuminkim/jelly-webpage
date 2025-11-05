import { Facebook, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-300 py-8 md:py-16'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12'>
                    <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
                        <h3 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-6'>BOLTLAB</h3>
                        <p className='text-gray-400 text-sm md:text-base mb-4 md:mb-6'>Premium IT Product Development Agency</p>
                        <div className='flex space-x-3 md:space-x-4'>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Facebook className='h-4 w-4 md:h-5 md:w-5' />
                            </a>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Instagram className='h-4 w-4 md:h-5 md:w-5' />
                            </a>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Github className='h-4 w-4 md:h-5 md:w-5' />
                            </a>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Linkedin className='h-4 w-4 md:h-5 md:w-5' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-base md:text-lg font-semibold text-white mb-2 md:mb-4'>Services</h4>
                        <ul className='space-y-1 md:space-y-2 text-xs md:text-base'>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    Premium Website
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    Platform Development
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    AI Integration
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    Consulting
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-base md:text-lg font-semibold text-white mb-2 md:mb-4'>Company</h4>
                        <ul className='space-y-1 md:space-y-2 text-xs md:text-base'>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-blue-500 transition-colors'>
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
                        <h4 className='text-base md:text-lg font-semibold text-white mb-2 md:mb-4'>Contact</h4>
                        <ul className='space-y-2 md:space-y-4 text-xs md:text-base'>
                            <li className='flex items-start md:items-center gap-1 md:gap-2'>
                                <MapPin className='h-4 w-4 md:h-5 md:w-5 text-blue-500 mt-0.5 md:mt-0 shrink-0' />
                                <span>서울시 동작구 상도로55길 8,챌린지스테이션 2층 </span>
                            </li>
                            <li className='flex items-center gap-1 md:gap-2'>
                                <Mail className='h-4 w-4 md:h-5 md:w-5 text-blue-500 shrink-0' />
                                <span>비공개</span>
                            </li>
                            <li className='flex items-center gap-1 md:gap-2'>
                                <span className='text-blue-500 font-medium'>사업자 번호:</span>
                                <span>333-14-02467</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-800 mt-6 md:mt-12 pt-4 md:pt-8 text-center text-gray-400'>
                    <p className="text-xs md:text-sm">&copy; 2025 BOLTLAB. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
