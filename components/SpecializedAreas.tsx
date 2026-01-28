import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 md:py-24 bg-[var(--white)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <motion.span
            className="text-[var(--primary-black)] font-bold text-sm tracking-widest uppercase mb-3 block opacity-70"
            variants={itemVariants}
          >
            What I Offer
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[var(--primary-black)] mb-3"
            variants={itemVariants}
          >
            Specialized Areas
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color-two)] rounded-full mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
        >
          {areas.map((area, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-4 p-4 rounded-xl bg-[var(--primary-color-tint-98)] hover:bg-[var(--primary-color-tint-95)] border border-[var(--primary-color-tint-90)] hover:border-[var(--primary-color)] transition-all duration-300 group cursor-default"
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <CheckCircle2 
                  size={24} 
                  className="text-[var(--primary-color)] group-hover:text-[var(--secondary-color-two)] transition-colors duration-300" 
                />
              </div>
              <span className="text-sm md:text-base font-medium text-[var(--primary-black)] leading-snug group-hover:text-[var(--primary-color)] transition-colors duration-300">
                {area}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpecializedAreas;