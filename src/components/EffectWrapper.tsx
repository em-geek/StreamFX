'use client';

import dynamic from 'next/dynamic';

export default function EffectWrapper({ effect }: { effect: string }) {
  if (!effect) return null;

  const DynamicEffect = dynamic(() => import(`../effects/p5/${effect}`), {
    ssr: false,
  });

  return <DynamicEffect />;
}
