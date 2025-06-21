import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Rocket } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { title: "Home", id: "hero" },
    { title: "About", id: "about" },
    { title: "Pricing", id: "pricing" },
    { title: "Gallery", id: "gallery" },
    { title: "Contact", id: "contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-lg shadow-2xl border-b border-gray-800' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3">
            <Logo />
            <span className="text-2xl font-extrabold text-white">
              Gym Launch
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-gold-400 to-gold-500 hover:scale-105 transform transition-transform duration-300 text-gray-900 font-bold px-6 py-3 shadow-lg"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I am interested in your gym services.', '_blank')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Join Now
            </Button>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-gold-400 transition-colors duration-300 font-medium text-lg"
              >
                {link.title}
              </button>
            ))}
            <Button 
              className="mt-4 bg-gradient-to-r from-gold-400 to-gold-500 text-gray-900 font-bold px-8 py-4"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I am interested in your gym services.', '_blank')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Join Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
