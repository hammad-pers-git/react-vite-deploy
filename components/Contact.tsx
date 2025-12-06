import React from 'react';
import { MapPin, Phone, Mail, Clock, User, PhoneCall } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-[var(--white)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Contact Card */}
        <div className="bg-[var(--primary-color-tint-99)] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[var(--primary-color-tint-90)]">

          {/* Left Side: Illustration Area */}
          <div className="w-full md:w-5/12 bg-[var(--primary-color-tint-80)] relative flex items-center justify-center p-8 md:p-12 overflow-hidden min-h-[300px] md:min-h-[400px]">
            <div className="absolute w-96 h-96 rounded-full border-[40px] border-[var(--white)] opacity-20 scale-125"></div>
            <div className="absolute w-80 h-80 bg-[var(--primary-color)] rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-[var(--primary-color-tint-90)] rounded-full flex items-center justify-center shadow-inner ring-8 ring-[var(--white)]/30">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full flex items-center justify-center overflow-hidden border-4 border-[var(--primary-black)] bg-[var(--secondary-color-one-70)] relative">
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=600"
                  alt="Contact Us"
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-2 right-4 bg-[var(--primary-color)] p-2 md:p-3 rounded-full border-2 border-[var(--primary-black)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] animate-bounce">
                <div className="flex gap-1">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[var(--primary-black)] rounded-full"></div>
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[var(--primary-black)] rounded-full"></div>
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[var(--primary-black)] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-7/12 p-6 md:p-16 flex flex-col justify-center bg-[#FFFBEB]">
            <h2 className="text-2xl md:text-4xl font-bold text-[var(--primary-black)] mb-6 md:mb-10 font-serif tracking-tight text-center md:text-left">
              Get matched with a therapist
            </h2>

            <form className="space-y-4 md:space-y-6">

              {/* Mobile Number Field */}
              <div className="space-y-2">
                <label className="block text-[var(--grey)] text-sm font-medium ml-1">Mobile number (Whatsapp)</label>
                <div className="flex rounded-xl border border-[var(--grey-6)] overflow-hidden bg-[var(--white)] shadow-sm focus-within:ring-2 focus-within:ring-[var(--primary-color)] transition-all">
                  <div className="bg-[var(--grey-6)] px-4 py-3 text-[var(--grey)] font-medium border-r border-[var(--grey-4)] flex items-center gap-2 min-w-[80px] md:min-w-[100px]">
                    <PhoneCall size={18} className="text-[var(--grey)]" />
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="XXXXXXX"
                    className="flex-grow px-4 py-3 outline-none text-[var(--primary-black)] placeholder-[var(--grey-4)] bg-[var(--white)] w-full"
                  />
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-[var(--grey)] text-sm font-medium ml-1">Name</label>
                <div className="flex rounded-xl border border-[var(--grey-6)] overflow-hidden bg-[var(--white)] shadow-sm focus-within:ring-2 focus-within:ring-[var(--primary-color)] transition-all">
                  <div className="pl-4 py-3 text-[var(--grey-4)] flex items-center bg-[var(--white)]">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="flex-grow px-4 py-3 outline-none text-[var(--primary-black)] placeholder-[var(--grey-4)] bg-[var(--white)] w-full"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-[var(--grey)] text-sm font-medium ml-1">Email (Gmail / Others)</label>
                <div className="flex rounded-xl border border-[var(--grey-6)] overflow-hidden bg-[var(--white)] shadow-sm focus-within:ring-2 focus-within:ring-[var(--primary-color)] transition-all">
                  <div className="pl-4 py-3 text-[var(--grey-4)] flex items-center bg-[var(--white)]">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="flex-grow px-4 py-3 outline-none text-[var(--primary-black)] placeholder-[var(--grey-4)] bg-[var(--white)] w-full"
                  />
                </div>
              </div>

              <button className="w-full bg-[var(--primary-color)] text-[var(--primary-black)] font-bold py-3 md:py-4 rounded-xl hover:bg-[var(--primary-color-80)] transition-colors mt-6 shadow-md text-lg">
                Submit
              </button>

              <p className="text-center text-xs text-[var(--primary-black)] mt-4 opacity-80">
                Note: We don't share your information with anyone.
              </p>
            </form>
          </div>
        </div>

        {/* Traditional Contact Info Grid */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--grey-6)] pt-12">
          {/* Business Hours */}
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-14 h-14 rounded-full bg-[var(--primary-color-tint-95)] flex items-center justify-center text-[var(--primary-black)] mb-4 group-hover:bg-[var(--primary-color)] transition-colors">
              <Clock size={24} />
            </div>
            <h4 className="font-bold text-[var(--primary-black)] mb-1">Business Hours</h4>
            <p className="text-[var(--grey)] text-sm">Mon - Sat: 11am - 6pm</p>
          </div>

          {/* Location */}
          <a
            href="https://www.google.com/maps?q=Your+Business+Location"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--primary-color-tint-95)] flex items-center justify-center text-[var(--primary-black)] mb-4 group-hover:bg-[var(--primary-color)] transition-colors">
              <MapPin size={24} />
            </div>
            <h4 className="font-bold text-[var(--primary-black)] mb-1">Location</h4>
            <p className="text-[var(--grey)] text-sm hover:text-[var(--primary-black)] underline decoration-dotted">View on Google Maps</p>
          </a>

          {/* Call Us */}
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--primary-color-tint-95)] flex items-center justify-center text-[var(--primary-black)] mb-4 group-hover:bg-[var(--primary-color)] transition-colors">
              <Phone size={24} />
            </div>
            <h4 className="font-bold text-[var(--primary-black)] mb-1">Call Us</h4>
            <p className="text-[var(--grey)] text-sm hover:text-[var(--primary-black)]">+91 98765 43210</p>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@manishavarma.com"
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--primary-color-tint-95)] flex items-center justify-center text-[var(--primary-black)] mb-4 group-hover:bg-[var(--primary-color)] transition-colors">
              <Mail size={24} />
            </div>
            <h4 className="font-bold text-[var(--primary-black)] mb-1">Email</h4>
            <p className="text-[var(--grey)] text-sm hover:text-[var(--primary-black)]">contact@manishavarma.com</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
