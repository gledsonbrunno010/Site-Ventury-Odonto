import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { ShieldCheck, Award, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-vinho/5 -skew-x-12 transform translate-x-20 hidden lg:block" />

      <div className="container max-w-1200 mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 items-center py-16 relative z-10">
        {/* Left: Copy */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-vinho leading-[1.15]">
            Sorria de Volta com Confiança Total. <br />
            <span className="text-gray-900">Resultados premium.</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Na Ventury Odonto, unimos tecnologia avançada e atendimento humanizado.
            Implantes, ortodontia e estética dental com previsibilidade e segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ventury%20Odonto,%20gostaria%20de%20agendar%20uma%20avaliação`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vinho text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-vinho-700 hover:scale-[1.02] transition-all text-center"
            >
              Agendar Avaliação
            </a>
            <a
              href="#depoimentos"
              className="border-2 border-vinho text-vinho px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vinho/5 transition-colors text-center"
            >
              Ver Resultados
            </a>
          </div>

          {/* Credibility Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-vinho/10 p-2 rounded-lg text-vinho">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">4 anos de excelência</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-vinho/10 p-2 rounded-lg text-vinho">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">Equipe Certificada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-vinho/10 p-2 rounded-lg text-vinho">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">Tecnologia 3D</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative group perspective-1000">
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg transform transition-transform duration-500 hover:scale-[1.01]">
            <img
              src="https://picsum.photos/800/600?random=1"
              alt="Consultório Ventury Odonto"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs">ON</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Localização</p>
                <p className="text-sm font-bold text-gray-900">Águas Claras, Brasília</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}