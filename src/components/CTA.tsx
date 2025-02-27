
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section id="contact" className="section-padding parallax-section bg-cta-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="heading-highlight">Get Started</span>
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-8 opacity-0">
            Ready to Elevate Your Real Estate Sales?
          </h2>
          
          <div ref={ctaRef} className="flex flex-col md:flex-row justify-center gap-4 mb-16 opacity-0">
            <a href="#contact-form" className="btn-primary">
              Request a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#pricing" className="btn-secondary">
              View Pricing
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            id="contact-form" 
            ref={formRef}
            className="glass-morphism rounded-xl p-8 opacity-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Your company"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Tell us about your project or ask a question..."
              ></textarea>
            </div>
            
            <button type="submit" className="w-full btn-primary justify-center">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
