import React from 'react';

const SpecializedAreas: React.FC = () => {
  const areas = [
    "Promotional Mental Health Services",
    "Corporate Trainings for Organizations",
    "Counselling & Training (16-60 years)",
    "Life Coaching",
    "Psychotherapy for Clinical Concerns",
    "Career Planning & Coaching",
    "Grief & Trauma Counselling",
    "Mindfulness Facilitation Sessions"
  ];

  return (
    <section className="py-16 bg-[var(--white)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--primary-black)] mb-12">
          Specialized Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-[var(--grey-7)] rounded-xl p-4 flex items-center gap-3 hover:bg-[var(--primary-color-tint-95)] transition-colors border border-transparent hover:border-[var(--primary-color-tint-80)]"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--secondary-color-two-40)] flex-shrink-0"></div>
              <span className="text-xs font-medium text-[var(--primary-black)] leading-snug">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedAreas;