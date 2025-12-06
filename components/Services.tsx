import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[var(--white)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[var(--grey-6)] flex flex-col h-full group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[var(--primary-black)] mb-3">{title}</h3>
        <p className="text-[var(--grey)] text-sm mb-6 flex-grow">{description}</p>
        <button 
          onClick={scrollToContact} 
          className="w-full bg-[var(--primary-color)] text-[var(--primary-black)] py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-[var(--primary-color-80)] transition-colors"
        >
          BOOK NOW
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};



const Services: React.FC = () => {
  const services = [
    {
      title: "1:1 Customised Sessions",
      description: "Personalized counselling for anxiety, depression, relationship issues, and overall psychological well-being.",
      image: "https://picsum.photos/400/300?random=6"
    },
    {
      title: "Group Sessions",
      description: "Interactive theme-based sessions focusing on career development, life coaching, and shared experiences.",
      image: "https://picsum.photos/400/300?random=7"
    },
    {
      title: "Trainings/Courses",
      description: "Comprehensive workshops on skill-building, soft skills, and employee wellness for organizations.",
      image: "https://picsum.photos/400/300?random=8"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[var(--grey-7)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-[var(--primary-black)] font-bold text-sm tracking-widest uppercase mb-2 block opacity-70">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-black)]">
              Comprehensive Services
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;