import React from 'react';
import { WHATSAPP_NUMBER, COMPANY_CNPJ, COMPANY_ADDRESS, COMPANY_CITY } from '../constants';
import { Logo } from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-1200 mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <Logo className="h-8 w-auto text-white" />
               <span className="font-bold text-lg">Ventury Odonto</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando sorrisos e vidas com odontologia de alta performance e atendimento humanizado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-vinho-100">Navegação</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#especialidades" className="hover:text-white transition">Especialidades</a></li>
              <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
              <li><a href="#estrutura" className="hover:text-white transition">Estrutura</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-vinho-100">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{COMPANY_ADDRESS}</li>
              <li>{COMPANY_CITY}</li>
              <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white">WhatsApp: (61) 9XXXX-XXXX</a></li>
              <li>contato@ventury.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-vinho-100">Horários</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Seg - Sex:</span> <span>08:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sábado:</span> <span>08:00 - 12:00</span></li>
              <li className="flex justify-between"><span>Domingo:</span> <span>Fechado</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Ventury Odonto. Todos os direitos reservados.</p>
          <p>CNPJ: {COMPANY_CNPJ}</p>
        </div>
      </div>
    </footer>
  );
}