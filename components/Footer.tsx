import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#1C1E23] py-8 border-t border-[var(--primary-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[var(--grey-4)] text-xs">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h5 className="text-[var(--white)] font-bold text-sm mb-1 uppercase tracking-wide">Manisha Varma</h5>
          <p>© 2024 All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[var(--secondary-color-two-40)] transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-[var(--secondary-color-two-40)] transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;