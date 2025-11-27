import React from 'react';
import { Specialty } from '../types';
import { Sparkles, Smile, PenTool, Activity, Shield, Clock } from 'lucide-react';

// Helper icon component since lucide doesn't have a direct SunIcon export that matches exactly sometimes depending on version, mocking a simple one
const SunIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const list: (Specialty & { icon: React.ReactNode })[] = [
  {
    title: 'Implantes Dentários',
    text: 'Tecnologia CAD/CAM e planejamento 3D para resultados previsíveis e recuperação rápida.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Ortodontia Moderna',
    text: 'Alinhadores invisíveis e aparelhos estéticos para corrigir seu sorriso com conforto.',
    icon: <Smile className="w-6 h-6" />
  },
  {
    title: 'Lentes de Contato',
    text: 'Transformação do sorriso com facetas de porcelana minimamente invasivas.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: 'Clareamento',
    text: 'Protocolos seguros a laser ou caseiro supervisionado para um branco natural.',
    icon: <SunIcon className="w-6 h-6" />
  },
  {
    title: 'Próteses e Reabilitação',
    text: 'Devolva a função mastigatória e a estética com materiais de alta durabilidade.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: 'Endodontia',
    text: 'Tratamento de canal com microscopia para máxima precisão e conforto.',
    icon: <Activity className="w-6 h-6" />
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-20 bg-white animate-fade-in-up">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-vinho mb-4">Especialidades</h2>
          <p className="text-gray-600 text-lg">
            Oferecemos uma gama completa de tratamentos para cuidar da saúde e estética do seu sorriso em um só lugar.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((s, i) => (
            <article
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-bgSoft text-vinho rounded-xl flex items-center justify-center mb-6 group-hover:bg-vinho group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-vinho transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}