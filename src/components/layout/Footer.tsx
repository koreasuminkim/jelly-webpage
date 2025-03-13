import { Facebook, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-300 py-16'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
                    <div>
                        <h3 className='text-2xl font-bold text-white mb-6'>BOLTLAB</h3>
                        <p className='text-gray-400 mb-6'>Premium IT Product Development Agency</p>
                        <div className='flex space-x-4'>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Facebook className='h-5 w-5' />
                            </a>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Instagram className='h-5 w-5' />
                            </a>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Github className='h-5 w-5' />
                            </a>
                            <a href='#' className='hover:text-blue-500 transition-colors'>
                                <Linkedin className='h-5 w-5' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-lg font-semibold text-white mb-4'>Services</h4>
                        <ul className='space-y-2'>
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
                        <h4 className='text-lg font-semibold text-white mb-4'>Company</h4>
                        <ul className='space-y-2'>
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

                    <div>
                        <h4 className='text-lg font-semibold text-white mb-4'>Contact</h4>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                                <MapPin className='h-5 w-5 text-blue-500' />
                                <span>서울시 강남구 테헤란로2길 27 패스트파이브 빌딩 1226호 </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <Mail className='h-5 w-5 text-blue-500' />
                                <span>tachyon@boltlab.co</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='text-blue-500 font-medium'>사업자 번호:</span>
                                <span>290-15-02231</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
                    <p>&copy; 2024 BOLTLAB. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
