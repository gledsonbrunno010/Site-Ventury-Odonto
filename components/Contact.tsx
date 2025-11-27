import React, { useState } from 'react';
import { WHATSAPP_NUMBER, COMPANY_ADDRESS, COMPANY_CITY } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate async submission
    setTimeout(() => {
      setStatus('success');
      const form = e.currentTarget;
      form.reset();

      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-white animate-fade-in-up">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-vinho mb-6">Entre em contato</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Estamos prontos para atender você. Agende sua consulta ou tire suas dúvidas através dos nossos canais.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-bgSoft p-3 rounded-lg text-vinho">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                  <p className="text-gray-600">{COMPANY_CITY}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-bgSoft p-3 rounded-lg text-vinho">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(61) 99192-2993</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-bgSoft p-3 rounded-lg text-vinho">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">E-mail</h4>
                  <p className="text-gray-600">contato@ventury.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-48 bg-gray-100 rounded-xl overflow-hidden relative">
              <img src="https://picsum.photos/600/300?grayscale" alt="Mapa" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-2 rounded shadow text-sm font-semibold hover:bg-gray-50"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinho focus:border-vinho outline-none transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinho focus:border-vinho outline-none transition"
                  placeholder="(XX) 9XXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Interesse</label>
                <select
                  id="service"
                  name="service"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinho focus:border-vinho outline-none transition bg-white"
                >
                  <option value="">Selecione um tratamento</option>
                  <option value="implantes">Implantes Dentários</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="estetica">Estética / Lentes</option>
                  <option value="clinico">Clínico Geral</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-3.5 px-6 rounded-lg font-bold text-white shadow-md transition-all ${status === 'submitting'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-vinho hover:bg-vinho-700 hover:-translate-y-0.5'
                    }`}
                >
                  {status === 'submitting' ? 'Enviando...' : 'Solicitar Agendamento'}
                </button>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center animate-fade-in">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}