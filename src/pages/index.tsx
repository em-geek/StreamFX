'use client';

import { useState } from 'react';
import EffectSelector from '@/components/EffectSelector';
import EffectWrapper from '@/components/EffectWrapper';

export default function Home() {
  const [currentEffect, setCurrentEffect] = useState('EffectStars');

  return (
    <main className="min-h-screen bg-black text-white">
      <EffectWrapper effect={currentEffect} />
      <EffectSelector onSelect={setCurrentEffect} />

      <div className="relative z-10 flex items-center justify-center h-screen">
        <h1 className="text-5xl font-bold">Stream FX</h1>
      </div>
    </main>
  );
}
