import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    // Solo ejecuta en el navegador (cliente)
    if (typeof window === 'undefined') return;

    const sketch = (p: p5) => {
      let x = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(20);
      };

      p.draw = () => {
        p.background(20, 20, 20, 50);
        p.fill(255, 100, 150);
        p.noStroke();
        p.ellipse(x, p.height / 2, 50, 50);
        x += 3;
        if (x > p.width) x = 0;
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
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



  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />;
};

export default P5Wrapper;
