import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="bg-[var(--white)] rounded-lg mb-4 overflow-hidden shadow-sm border border-[var(--grey-6)]">
      <button
        className={`w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none transition-colors duration-300 ${
          isOpen 
            ? 'bg-[var(--primary-color)]' 
            : 'bg-[var(--white)] hover:bg-[var(--primary-color-tint-95)]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Individual question text is normal weight */}
        <span className="text-[var(--primary-black)] text-sm md:text-base pr-8 font-normal">{question}</span>
        <span className="text-[var(--primary-black)] flex-shrink-0">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-6 overflow-hidden transition-all duration-500 text-[var(--primary-black)] text-sm leading-relaxed border-t border-[var(--primary-color-80)]"
      >
        <div className="py-4">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const questions = [
    {
      question: "What is the duration & frequency of Counselling sessions?",
      answer: "Sessions typically last between 50 to 60 minutes. The frequency depends on individual needs, but usually, sessions are held once a week to ensure consistent progress."
    },
    {
      question: "How much do Counselling sessions cost?",
      answer: "The cost varies depending on the type of session (individual vs. group) and the package chosen. Please contact us directly for detailed pricing structures."
    },
    {
      question: "What are the highlights of Workshops/Training?",
      answer: "Our workshops are interactive, practical, and tailored to the specific needs of the group. They include role-playing, case studies, and actionable takeaways."
    },
    {
      question: "What is included in Mindfulness-based sessions?",
      answer: "These sessions include guided meditations, breathing exercises, and cognitive techniques to help manage stress and improve focus."
    },
    {
      question: "Is online therapy as effective as in-person therapy?",
      answer: "Research has consistently shown that online therapy can be just as effective as in-person therapy for a wide range of mental health issues, offering convenience and comfort."
    },
    {
      question: "How do I know if I need therapy?",
      answer: "If you're feeling overwhelmed, stuck, or finding it difficult to manage daily life, therapy can be beneficial. It's a supportive space to explore feelings and develop coping strategies."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, confidentiality is a core principle of therapy. Your personal information and session details are kept strictly private, adhering to ethical and legal standards."
    }
  ];

  const visibleQuestions = showAll ? questions : questions.slice(0, 4);

  return (
    <section id="faq" className="py-20 bg-[var(--primary-color-tint-95)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[var(--primary-black)] text-sm tracking-widest uppercase mb-2 block opacity-70">
            Common Questions
          </span>
          {/* Main heading stays bold */}
          <h2 className="text-3xl font-bold text-[var(--primary-black)]">
            FAQ's
          </h2>
        </div>

        <div className="space-y-2">
          {visibleQuestions.map((q, index) => (
            <FAQItem key={index} {...q} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-[var(--primary-color)] text-[var(--primary-black)] px-8 py-3 rounded-full text-sm hover:bg-[var(--primary-color-80)] transition-colors shadow-sm font-bold"
          >
            {showAll ? 'VIEW LESS QUESTIONS' : 'VIEW MORE QUESTIONS'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
