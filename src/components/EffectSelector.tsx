'use client';

import { useState } from 'react';
import JetSetRadioLoading from '@/effects/p5/JetSetRadioLoading';

type EffectOption = {
  name: string;
  path: string;
};

const effects: EffectOption[] = [
    { name: 'Estrellas', path: 'EffectStars' },
    { name: 'Círculos', path: 'EffectCircles' },
    { name: 'Jet Set Radio', path: 'JetSetRadioLoading' },
];

export default function EffectSelector({ onSelect }: { onSelect: (path: string) => void }) {
  return (
    <div className="absolute top-4 left-4 z-50 space-y-2 bg-black/70 p-4 rounded-xl text-white">
      <h2 className="text-xl font-bold">Efectos disponibles</h2>
      {effects.map((effect) => (
        <button
          key={effect.name}
          onClick={() => onSelect(effect.path)}
          className="w-full text-left hover:bg-white/10 px-2 py-1 rounded"
        >
          {effect.name}
        </button>
      ))}
    </div>
  );
}
