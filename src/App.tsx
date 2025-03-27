import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className='relative flex min-h-screen flex-col'>
                    <Navbar />
                    <main className='flex-1'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
                <Toaster />
            </Router>
        </HelmetProvider>
    );
}
