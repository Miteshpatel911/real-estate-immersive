
import React, { useEffect, useRef } from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  stat: string;
  delay: number;
}

const BenefitCard = ({ title, description, stat, delay }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-enter');
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={cardRef} className="stat-card opacity-0">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-lg">{title}</h3>
        <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded-full">
          {stat}
        </span>
      </div>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  return (
    <section id="benefits" className="section-padding parallax-section bg-benefits-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="heading-highlight">Why Choose Us</span>
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-4 opacity-0">
            Why Our Immersive Solutions are Changing Real Estate Sales
          </h2>
          <p ref={subtitleRef} className="text-white/70 opacity-0">
            Our cutting-edge technology delivers measurable results for real estate professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            title="Virtual Walkthroughs"
            description="Let buyers explore properties in VR from anywhere."
            stat="📈 50% Increase in engagement"
            delay={100}
          />
          <BenefitCard
            title="AR & WebAR Floor Plans"
            description="View top-down dollhouse-scale or real-life-scale layouts."
            stat="📈 35% Faster decisions"
            delay={200}
          />
          <BenefitCard
            title="Kiosk & Tablet 3D Experiences"
            description="Compare apartment layouts and configurations interactively."
            stat="📈 30% Higher conversion"
            delay={300}
          />
          <BenefitCard
            title="High-Quality 2D & 360° Renders"
            description="Showcase photorealistic images for better marketing."
            stat="📈 40% More leads"
            delay={400}
          />
          <BenefitCard
            title="Walkthrough Videos"
            description="Create compelling video tours for real estate marketing."
            stat="📈 60% Longer engagement"
            delay={500}
          />
          <BenefitCard
            title="Interactive Configuration"
            description="Let clients customize finishes and layouts in real-time."
            stat="📈 45% More satisfied buyers"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
