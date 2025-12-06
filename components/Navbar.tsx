import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--white)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-[var(--primary-black)] font-bold text-xl tracking-wider uppercase">
              <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Manisha Varma</a>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[var(--grey)] hover:text-[var(--primary-color-80)] px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--primary-black)] hover:text-[var(--primary-color-80)] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-1/2 bg-black shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
       `}
      >

        <div className="flex flex-col h-full px-4 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white hover:text-[var(--primary-color-80)] text-lg font-medium"
            >
              {link.name}
            </a>

          ))}
        </div>
      </div>

      {/* Optional overlay for click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
