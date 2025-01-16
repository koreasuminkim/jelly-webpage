import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bolt">BOLTLAB</Link>
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <a href="#hook" className="hover:text-blue-500 transition-colors">Why Us</a>
                <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
                <a href="#target" className="hover:text-blue-500 transition-colors">Clients</a>
                <a href="#process" className="hover:text-blue-500 transition-colors">Process</a>
                <a href="#team" className="hover:text-blue-500 transition-colors">Team</a>
                <Link to="/portfolio" className="hover:text-blue-500 transition-colors">Portfolio</Link>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
                <Link to="/portfolio" className="hover:text-blue-500 transition-colors">Portfolio</Link>
              </>
            )}
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}