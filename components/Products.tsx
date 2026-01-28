import React from 'react';
import { Headphones, BookOpen, FileText } from 'lucide-react';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description, image }) => (
  <div className="flex flex-col group">
    <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-[var(--white)] p-2 rounded-full z-20 text-[var(--primary-black)] shadow-lg">
        {icon}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-[var(--primary-black)] mb-2">{title}</h3>
    <p className="text-[var(--grey)] text-sm mb-4 line-clamp-2">{description}</p>
    
    <a href="#" className="text-[var(--primary-black)] text-xs font-bold uppercase tracking-wider hover:text-[var(--primary-color-80)] transition-colors inline-block mt-auto">
      KNOW MORE
    </a>
  </div>
);

const Products: React.FC = () => {
  const products = [
    {
      icon: <Headphones size={20} />,
      title: "Mindfulness Audios",
      description: "Guided audio resources to help you practice mindfulness anytime, anywhere.",
      image: "https://picsum.photos/400/300?random=9"
    },
    {
      icon: <BookOpen size={20} />,
      title: "Worksheets & Workbooks",
      description: "Structured self-growth worksheets designed to foster reflection and clarity.",
      image: "https://picsum.photos/400/300?random=10"
    },
    {
      icon: <FileText size={20} />,
      title: "Articles",
      description: "Informational articles covering a wide range of mental health topics.",
      image: "https://picsum.photos/400/300?random=11"
    }
  ];

  return (
    <section id="products" className="py-20 bg-[var(--white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-[var(--primary-black)] font-bold text-sm tracking-widest uppercase mb-2 block opacity-70">
              Shop & Learn
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-black)]">
              Wellness Products
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color-two)] rounded-full mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;