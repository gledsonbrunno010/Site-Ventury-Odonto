import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 200 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Ventury Odonto Logo"
  >
    <path
      d="M20 10 L35 50 L50 10 M10 10 L10 50"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-vinho"
    />
    <path
      d="M60 20 Q75 5 90 20 T120 20"
      stroke="currentColor"
      strokeWidth="3"
      className="text-vinho-700"
    />
    <circle cx="35" cy="30" r="15" stroke="currentColor" strokeWidth="2" className="text-vinho opacity-20" />
  </svg>
);