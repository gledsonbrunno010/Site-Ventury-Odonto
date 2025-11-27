import React from 'react';

const projectImages = [
  'https://picsum.photos/600/600?random=2',
  'https://picsum.photos/600/600?random=3',
  'https://picsum.photos/600/600?random=4'
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-bgSoft animate-fade-in-up">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vinho mb-4">Galeria de Sorrisos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos resultados que alcançamos. Cada sorriso conta uma história de autoestima renovada.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {projectImages.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-square"
            >
              <img
                src={src}
                alt={`Projeto ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vinho/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver Detalhes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}