import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

interface AboutProps {
  onOpenAbout?: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenAbout }) => {
  return (
    <section id="about" className="py-20 bg-[var(--white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with Badge */}
          <div className="relative group cursor-pointer" onClick={onOpenAbout}>
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] w-full transition-transform duration-300 group-hover:scale-[1.02]">
               <img 
                 src="https://picsum.photos/600/800?grayscale&random=5" 
                 alt="Manisha Varma" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-[var(--primary-black)] px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Read Full Bio
                  </span>
               </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-8 bg-[var(--white)] px-6 py-4 rounded-xl shadow-xl flex flex-col items-center justify-center border border-[var(--grey-6)] pointer-events-none">
               <div className="flex gap-1 mb-1">
                 {[1, 2, 3, 4, 5].map((s) => (
                   <Star key={s} size={16} fill="var(--primary-color)" stroke="var(--primary-color)" />
                 ))}
               </div>
               <span className="text-[var(--primary-black)] font-bold text-sm">20+ Years Experience</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-[var(--primary-black)] font-bold text-sm tracking-widest uppercase mb-2 block opacity-70">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-black)] mb-6">
              Empowering Lives Through Empathy
            </h2>
            <p className="text-[var(--grey)] mb-6 leading-relaxed">
              Hi there! I am Mrs. Manisha Varma, a Senior Counselling Psychologist with over 20 years of experience in facilitating mental wellness and personal growth. My journey has been dedicated to understanding the intricacies of the human mind and helping individuals navigate life's challenges with grace.
            </p>
            <p className="text-[var(--grey)] mb-8 leading-relaxed">
              My vision is to facilitate individuals' inner growth through skill-building, self-awareness, and therapeutic interventions. I believe that every person possesses the strength to overcome hurdles, and my role is to provide the tools and support needed to unlock that potential. Whether through one-on-one sessions or group workshops, I strive to create a safe, non-judgmental space for transformation.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Senior Psychologist', 'Corporate Trainer', 'Life Coach'].map((role) => (
                <span key={role} className="bg-[var(--primary-color-tint-95)] text-[var(--primary-black)] px-4 py-2 rounded-lg text-sm font-medium border border-[var(--primary-color-tint-90)]">
                  {role}
                </span>
              ))}
            </div>

            <button 
                onClick={onOpenAbout}
                className="text-[var(--primary-black)] font-bold text-sm border-b-2 border-[var(--primary-color)] pb-1 hover:text-[var(--primary-color-80)] transition-colors flex items-center gap-1 group"
            >
                READ MORE ABOUT ME
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;