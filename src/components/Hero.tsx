
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center parallax-section bg-hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <span className="heading-highlight text-lg bg-gradient-to-r from-blue-400 to-purple-500 py-2 px-5 rounded-full font-medium tracking-wider shadow-lg">Immersive Solutions for Real Estate</span>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl font-semibold leading-tight opacity-0" 
              style={{transitionDelay: '0.1s'}}
            >
              Transform Real Estate Sales with Immersive 3D & VR Solutions
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto opacity-0" 
              style={{transitionDelay: '0.3s'}}
            >
              Enhance property visualization, boost engagement, and accelerate sales with cutting-edge AR, VR, and 3D experiences tailored for the real estate industry.
            </p>
            
            <div 
              ref={ctaRef}
              className="pt-6 opacity-0" 
              style={{transitionDelay: '0.5s'}}
            >
              <a href="#contact" className="btn-primary">
                Request a Demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
