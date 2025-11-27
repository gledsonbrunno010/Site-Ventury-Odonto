import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { ShieldCheck, Award, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-vinho/95 via-vinho to-vinho-700 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-20 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="container max-w-1200 mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 items-center py-16 relative z-10">
        {/* Left: Copy */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15]">
            Sorria de Volta com Confiança. <br />
            <span className="text-white/90">Resultados premium.</span>
          </h1>

          <p className="text-lg text-white/90 max-w-xl leading-relaxed">
            Na Ventury Odonto, unimos tecnologia avançada e atendimento humanizado.
            Implantes, ortodontia e estética dental com previsibilidade e segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ventury%20Odonto,%20gostaria%20de%20agendar%20uma%20avaliação`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-vinho px-8 py-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-white/90 hover:scale-[1.02] transition-all text-center"
            >
              Agendar Avaliação
            </a>
            <a
              href="#depoimentos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Ver Resultados
            </a>
          </div>

          {/* Credibility Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg text-white">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-white/90">4 anos de excelência</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-white/90">Equipe Certificada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg text-white">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-white/90">Tecnologia 3D</span>
            </div>
          </div>
        </div>

        {/* Right: Image with premium blur backdrop */}
        <div className="relative group perspective-1000">
          {/* Multi-layer premium blur backdrop */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute w-[95%] h-[95%] bg-white/20 blur-3xl rounded-full"></div>
            {/* Middle layer */}
            <div className="absolute w-[85%] h-[85%] bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-3xl rounded-3xl shadow-2xl"></div>
            {/* Inner highlight */}
            <div className="absolute w-[80%] h-[80%] bg-white/15 backdrop-blur-2xl rounded-3xl"></div>
          </div>

          {/* Main image */}
          <div className="relative rounded-2xl overflow-visible transform transition-transform duration-500 hover:scale-[1.02] z-10">
            <img
              src="/assets/dra-bianca.png"
              alt="Dra. Bianca - Ventury Odonto"
              className="w-full h-auto object-contain aspect-[3/4] drop-shadow-2xl filter brightness-105 contrast-105"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block z-20">
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