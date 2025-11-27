import React from 'react';

const images = [
  { src: 'https://picsum.photos/600/400?random=10', label: 'Recepção Confortável' },
  { src: 'https://picsum.photos/600/400?random=11', label: 'Equipamentos Modernos' },
  { src: 'https://picsum.photos/600/400?random=12', label: 'Consultório Premium' }
];

export default function Structure() {
  return (
    <section id="estrutura" className="py-20 bg-bgSoft animate-fade-in-up">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold text-vinho mb-4">Nossa Estrutura</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um ambiente pensado nos mínimos detalhes para sua segurança e conforto.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-800">{img.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}