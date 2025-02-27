
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const demoSlides = [
  {
    id: 1,
    title: 'Virtual Property Tours',
    description: 'Immersive VR experiences that let buyers explore every corner of a property from anywhere in the world.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=1600&q=80'
  },
  {
    id: 2,
    title: 'Interactive Floor Plans',
    description: 'AR-powered floor plans that bring property layouts to life in real-world scale.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&w=1600&q=80'
  },
  {
    id: 3,
    title: '3D Property Configuration',
    description: 'Let buyers customize finishes, furniture, and layouts in real-time before making decisions.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=1600&q=80'
  }
];

const Demo = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descRef.current) observer.observe(descRef.current);
    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descRef.current) observer.unobserve(descRef.current);
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === demoSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="demo" 
      ref={sectionRef}
      className="section-padding parallax-section bg-demo-pattern relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="heading-highlight">Interactive Demo</span>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-6 opacity-0">
              See Our Real Estate Visualization in Action
            </h2>
            <p ref={descRef} className="text-white/70 mb-8 opacity-0">
              Experience how buyers can explore property interiors, compare layouts, and visualize spaces before making a purchase. Our solutions transform the way properties are marketed and sold.
            </p>
            <a href="#contact" className="btn-primary">
              Try the Demo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div ref={carouselRef} className="carousel h-[400px] rounded-xl overflow-hidden opacity-0">
            {demoSlides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`carousel-item w-full h-full ${index === activeSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 glass-morphism">
                  <h3 className="text-xl font-medium mb-2">{slide.title}</h3>
                  <p className="text-sm text-white/80">{slide.description}</p>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {demoSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeSlide ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
