import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white animate-fade-in-up">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-bgSoft rounded-2xl -z-10 rotate-3" />
            <img
              src="https://picsum.photos/800/1000?random=5"
              alt="Equipe Ventury Odonto"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-vinho mb-6">Sobre a Ventury Odonto</h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Com anos de experiência e dedicação à odontologia de excelência, a Ventury Odonto se destaca pelo compromisso com a qualidade e o bem-estar dos pacientes.
              </p>
              <p>
                Nossa clínica foi projetada para oferecer uma experiência acolhedora, desde a recepção até o pós-tratamento. Utilizamos equipamentos de última geração para diagnósticos precisos e tratamentos eficazes.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                'Equipe multidisciplinar especializada',
                'Tecnologia de ponta (Scanner Intraoral, RX Digital)',
                'Biossegurança rigorosa',
                'Localização privilegiada em Águas Claras'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-vinho flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}