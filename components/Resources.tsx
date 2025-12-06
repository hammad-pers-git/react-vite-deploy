import React from 'react';
import { ChevronRight } from 'lucide-react';

// Custom Authentic Icons for a premium look
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-600">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const BloggerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-orange-500">
    <rect x="2" y="2" width="20" height="20" rx="4" ry="4" className="fill-orange-500" />
    <path d="M16.5 10.5c0-1.5-1-2-2.5-2h-5v8h5c1.5 0 2.5-0.5 2.5-2s-0.5-1.5-1.5-1.8c0.8-0.3 1.5-0.8 1.5-2.2zM11.5 10h2.5c0.5 0 1 0.2 1 1s-0.5 1-1 1h-2.5v-2zM14.5 15h-3v-2.5h3c0.5 0 1 0.2 1 1.25s-0.5 1.25-1 1.25z" fill="white"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#24A1DE]">
    <circle cx="12" cy="12" r="10" className="fill-[#24A1DE]" />
    <path d="M5.4 12c0 0 13.2-5.2 13.6-5.4 0.6-0.3 1.2 0.2 1 0.9 -0.2 0.8-2.6 12.5-2.6 12.5 -0.2 0.8-1.5 1-2.2 0.4 -0.5-0.4-3.5-2.5-4-2.8 -1.2-0.8-0.2-2.3 0.6-3.2 1.6-1.7 3.5-3.6 3.5-3.6s0.2-0.4-0.4-0.1c-0.6 0.3-6.6 4.3-7.5 4.9 -0.9 0.6-1.8 0.4-2.6-0.1 -0.8-0.5-1.8-1.1-1.8-1.1s-0.9-0.5 0.5-1.3z" fill="white"/>
  </svg>
);

const Resources: React.FC = () => {
  const links = [
    {
      title: "YOUTUBE CHANNEL",
      icon: <YoutubeIcon />,
      href: "https://www.youtube.com/", // Replace with your channel URL
      subtitle: "Watch guided sessions"
    },
    {
      title: "BLOGGER BLOG",
      icon: <BloggerIcon />,
      href: "https://yourblog.blogspot.com/", // Replace with your blog URL
      subtitle: "Read daily insights"
    },
    {
      title: "TELEGRAM CHANNEL",
      icon: <TelegramIcon />,
      href: "https://t.me/yourchannel", // Replace with your Telegram channel URL
      subtitle: "Join the community"
    }
  ];

  return (
    <section id="resources" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop" 
          alt="Hands joining together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBEB]/95 via-[#FFFBEB]/85 to-[#FFFBEB]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--white)] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
               <span className="text-[var(--primary-black)] font-bold text-xs tracking-[0.2em] uppercase border-b border-[var(--primary-color)] pb-1">
                 Free Knowledge Hub
               </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--primary-black)] mb-8 tracking-tight leading-tight">
              Resources <br/> 
              <span className="text-4xl md:text-5xl lg:text-6xl italic opacity-70 font-light">for your growth.</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-[var(--grey)] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>We believe mental wellness should be accessible to everyone.</p>
              <p>
                Explore our library of <span className="font-medium text-[var(--primary-black)] underline decoration-[var(--primary-color)] decoration-2 underline-offset-4">free audio-visual content</span> designed to provide you with ongoing tips, daily affirmations, and professional perspectives on productive living.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full max-w-[400px] mx-auto lg:ml-auto">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[var(--primary-black)] text-white p-2 pr-6 rounded-full flex items-center transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 overflow-hidden isolate"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shrink-0 mr-5 shadow-lg group-hover:scale-110 transition-transform duration-500 p-3.5">
                  {link.icon}
                </div>
                
                <div className="relative z-10 flex flex-col items-start flex-grow py-2">
                  <span className="font-bold tracking-[0.15em] text-sm md:text-base text-white group-hover:text-[var(--primary-color)] transition-colors duration-300">
                    {link.title}
                  </span>
                  <span className="text-[10px] md:text-xs text-white/60 font-medium uppercase tracking-wider group-hover:text-white/90 transition-colors delay-75">
                    {link.subtitle}
                  </span>
                </div>

                <div className="relative z-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[var(--primary-color)]">
                  <ChevronRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
