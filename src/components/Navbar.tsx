
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          RealView<span className="text-white/70">Immersive</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#benefits" className="text-sm text-white/80 hover:text-white transition-colors duration-300">Benefits</a>
          <a href="#demo" className="text-sm text-white/80 hover:text-white transition-colors duration-300">Demo</a>
          <a href="#testimonials" className="text-sm text-white/80 hover:text-white transition-colors duration-300">Testimonials</a>
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors duration-300">Features</a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white transition-colors duration-300">FAQ</a>
        </nav>
        
        <a href="#contact" className="btn-primary text-sm py-2.5 px-6">
          Request Demo <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
