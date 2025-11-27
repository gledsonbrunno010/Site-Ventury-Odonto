import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { Logo } from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#estrutura', label: 'Estrutura' },
    { href: '#depoimentos', label: 'Depoimentos' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container max-w-1200 mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <Logo className="h-10 w-auto text-vinho group-hover:opacity-90 transition-opacity" />
          <span className="hidden md:inline font-bold text-xl text-vinho tracking-tight">
            Ventury Odonto
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-vinho font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-vinho text-white px-5 py-2.5 rounded-full shadow-sm hover:bg-vinho-700 transition-colors font-semibold text-sm"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-vinho hover:bg-vinho/10 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 z-50 bg-white w-[80%] max-w-sm h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
             <span className="font-bold text-xl text-vinho">Menu</span>
             <button onClick={() => setOpen(false)} className="p-2 text-gray-500 hover:text-vinho">
               <X className="w-6 h-6" />
             </button>
          </div>
          <div className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-800 hover:text-vinho font-medium border-b border-gray-100 pb-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 text-center bg-vinho text-white px-4 py-3 rounded-lg font-semibold hover:bg-vinho-700 transition"
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}