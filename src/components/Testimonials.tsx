
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Smith',
    title: 'Sales Head at RealtyCorp',
    quote: 'Our VR solutions helped increase pre-bookings by 40% while reducing site visits by 30%! The interactive experiences have transformed how we showcase properties.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Marketing Director, Urban Developments',
    quote: 'The AR floor plans and 3D configurators have given us a competitive edge. Our clients can now make confident buying decisions without multiple in-person visits.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    title: 'CEO, Prime Properties',
    quote: "Implementing these immersive solutions has transformed our sales process. We've seen a 25% reduction in the sales cycle and significantly higher customer satisfaction.",
    rating: 4,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

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
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (logosRef.current) observer.observe(logosRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (logosRef.current) observer.unobserve(logosRef.current);
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding parallax-section bg-testimonials-pattern"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="heading-highlight">Success Stories</span>
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-6 opacity-0">
            Trusted by Leading Real Estate Developers
          </h2>
        </div>

        <div 
          ref={testimonialsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 opacity-0"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-morphism p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={i < testimonial.rating ? "white" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-white/80 mb-6">"{testimonial.quote}"</blockquote>
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-white/60">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={logosRef}
          className="text-center mb-12 opacity-0"
        >
          <div className="inline-flex items-center justify-center glass-morphism rounded-full px-6 py-2">
            <div className="flex space-x-10 items-center">
              <div className="text-white/50 font-medium uppercase text-sm tracking-wide">Trusted by</div>
              <div className="h-6 w-px bg-white/10"></div>
              <span className="text-xl font-light tracking-wide">CompanyOne</span>
              <div className="h-6 w-px bg-white/10"></div>
              <span className="text-xl font-light tracking-wide">RealtyGroup</span>
              <div className="h-6 w-px bg-white/10"></div>
              <span className="text-xl font-light tracking-wide">UrbanDev</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#case-studies" className="btn-secondary">
            Read Full Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
