import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg z-40 hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded shadow text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
        Agende agora
      </span>
    </a>
  );
}