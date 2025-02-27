
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How do your VR solutions work for real estate?',
    answer: 'Our VR walkthroughs and interactive floor plans allow buyers to explore properties remotely, increasing sales efficiency. We create highly detailed digital twins of properties that potential buyers can navigate through using VR headsets, mobile devices, or web browsers.'
  },
  {
    id: 2,
    question: 'Do I need special hardware?',
    answer: 'Our solutions work on mobile, tablets, kiosks, and web browsers—VR headsets are optional. We design our experiences to be hardware-agnostic, ensuring maximum accessibility for your potential buyers.'
  },
  {
    id: 3,
    question: 'How long does it take to create a virtual property tour?',
    answer: 'Typically 1-2 weeks from property access to delivery of the final experience, depending on the size and complexity of the property. Our streamlined process ensures quick turnaround without compromising on quality.'
  },
  {
    id: 4,
    question: 'Can I update the virtual experiences if the property changes?',
    answer: 'Yes, we offer update services for all our virtual experiences. Changes to finishes, furniture, layouts, or other elements can be implemented to keep your virtual property current with physical changes.'
  },
  {
    id: 5,
    question: 'What kind of ROI can I expect?',
    answer: 'Clients typically see 30-50% increases in engagement, 20-35% reduction in decision time, and 25-40% increases in conversion rates. These metrics vary based on property type, market, and implementation strategy.'
  },
  {
    id: 6,
    question: 'How do you handle privacy and security?',
    answer: 'We maintain strict data security protocols and privacy measures throughout the creation and hosting of all virtual experiences. All user data is encrypted and managed according to international privacy standards.'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/70">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
    if (faqsRef.current) observer.observe(faqsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (faqsRef.current) observer.unobserve(faqsRef.current);
    };
  }, []);

  return (
    <section id="faq" className="section-padding parallax-section bg-faq-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="heading-highlight">Support</span>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-semibold mb-4 opacity-0">
              Got Questions? We've Got Answers.
            </h2>
          </div>

          <div ref={faqsRef} className="glass-morphism rounded-xl p-6 md:p-8 opacity-0">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
