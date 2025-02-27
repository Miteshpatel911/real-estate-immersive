
import React, { useEffect, useRef } from 'react';

const features = [
  {
    id: 1,
    title: 'Immersive VR Walkthroughs',
    description: 'Allow potential buyers to explore properties remotely with stunning VR experiences that showcase every detail.',
    delay: 100,
  },
  {
    id: 2,
    title: 'AR & WebAR Floor Plans',
    description: 'Turn flat floor plans into interactive 3D layouts that buyers can explore in real-world scale.',
    delay: 200,
  },
  {
    id: 3,
    title: '3D Configurators for Kiosks/Tablets',
    description: 'Let clients compare apartment layouts and customize finishes in real-time on interactive displays.',
    delay: 300,
  },
  {
    id: 4,
    title: 'Photorealistic 2D & 360° Renders',
    description: 'Showcase properties with ultra-realistic visuals that highlight the best features of each space.',
    delay: 400,
  },
  {
    id: 5,
    title: 'Cinematic Walkthrough Videos',
    description: 'Create compelling video tours that tell the story of each property with professional cinematography.',
    delay: 500,
  },
  {
    id: 6,
    title: 'Multi-Platform Compatibility',
    description: 'Deploy experiences across web, mobile, tablets, kiosks, and VR headsets for maximum accessibility.',
    delay: 600,
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ title, description, delay }: FeatureCardProps) => {
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
    <div ref={cardRef} className="feature-card opacity-0 h-full">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const Features = () => {
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
    <section id="features" className="section-padding parallax-section bg-features-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="heading-highlight">Key Features</span>
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-4 opacity-0">
            Advanced Features for Real Estate Success
          </h2>
          <p ref={subtitleRef} className="text-white/70 opacity-0">
            Our comprehensive suite of immersive solutions provides everything real estate professionals need to succeed in today's digital marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
