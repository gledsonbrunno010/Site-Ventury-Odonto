import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

export default function CTAblue() {
  return (
    <section className="bg-vinho text-white py-20 relative overflow-hidden animate-fade-in-up">
      {/* Abstract patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container max-w-1200 mx-auto px-6 md:px-8 text-center relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar seu sorriso?
        </h3>
        <p className="mb-10 text-vinho-100 text-lg max-w-2xl mx-auto">
          Agende sua avaliação hoje mesmo e descubra o plano de tratamento ideal para você, com condições facilitadas.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero%20agendar%20uma%20avaliação%20na%20Ventury%20Odonto`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-vinho px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Falar com Atendente
        </a>
      </div>
    </section>
  );
}