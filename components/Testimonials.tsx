import React from 'react';
import { TestimonialData } from '../types';
import { Star } from 'lucide-react';

const testimonials: TestimonialData[] = [
  {
    name: 'Mariana S.',
    text: 'Fiz minhas lentes de contato e o resultado ficou super natural, exatamente como eu queria. O atendimento foi impecável do início ao fim.',
    before: 'https://picsum.photos/300/200?random=20',
    after: 'https://picsum.photos/300/200?random=21'
  },
  {
    name: 'Carlos M.',
    text: 'Profissionais muito competentes. Fiz meu implante e a recuperação foi muito tranquila. Recomendo para todos em Águas Claras.',
    before: 'https://picsum.photos/300/200?random=22',
    after: 'https://picsum.photos/300/200?random=23'
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white animate-fade-in-up">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold text-vinho mb-4">O que dizem nossos pacientes</h2>
          <div className="flex justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl text-vinho/30 font-serif">"</span>
                </div>
                <p className="text-gray-700 italic text-lg mb-6 relative z-10 -mt-6 px-4">
                  {t.text}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-gray-900">{t.name}</span>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Verificado</span>
                </div>

                {/* Before/After mockup */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold text-gray-500">Antes</span>
                    <img src={t.before} alt="Antes" className="w-full h-32 object-cover rounded-lg bg-gray-200" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold text-vinho">Depois</span>
                    <img src={t.after} alt="Depois" className="w-full h-32 object-cover rounded-lg bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}