// src/effects/p5/EffectStars.tsx
'use client';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

export default function EffectStars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sketch = (p: p5) => {
      const stars: { x: number; y: number; z: number }[] = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < 400; i++) {
          stars.push({ x: p.random(-p.width, p.width), y: p.random(-p.height, p.height), z: p.random(p.width) });
        }
      };

      p.draw = () => {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        for (let star of stars) {
          star.z -= 4;
          if (star.z < 1) {
            star.z = p.width;
          }

          const sx = (star.x / star.z) * p.width;
          const sy = (star.y / star.z) * p.height;
          const r = (1 - star.z / p.width) * 5;

          p.fill(255);
          p.noStroke();
          p.ellipse(sx, sy, r, r);
        }
      };
    };

    if (containerRef.current && !p5Instance.current) {
      p5Instance.current = new p5(sketch, containerRef.current);
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}
