import React from 'react';
import { Calendar, ClipboardList, CheckSquare, SmilePlus, HeartHandshake } from 'lucide-react';

const steps = [
  { title: 'Contato Inicial', icon: <Calendar className="w-6 h-6" /> },
  { title: 'Avaliação Digital', icon: <ClipboardList className="w-6 h-6" /> },
  { title: 'Plano de Tratamento', icon: <CheckSquare className="w-6 h-6" /> },
  { title: 'Execução', icon: <SmilePlus className="w-6 h-6" /> },
  { title: 'Manutenção', icon: <HeartHandshake className="w-6 h-6" /> }
];

export default function Process() {
  return (
    <section className="py-20 bg-bgSoft border-y border-gray-100 animate-fade-in-up">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vinho mb-4">Como Funciona</h2>
          <p className="text-gray-600">Um processo transparente focado na sua satisfação.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Connector Line (Desktop only, except last item) */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
              )}

              <div className="w-16 h-16 rounded-full bg-white border-2 border-vinho text-vinho flex items-center justify-center mb-4 shadow-sm group-hover:bg-vinho group-hover:text-white transition-colors duration-300 z-10">
                {step.icon}
              </div>
              <h4 className="font-semibold text-gray-800 text-sm md:text-base">{step.title}</h4>
              <div className="mt-2 text-xs text-gray-400 font-mono">Passo {idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}