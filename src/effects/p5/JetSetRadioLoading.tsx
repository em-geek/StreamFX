'use client';

import { motion } from 'framer-motion';

export default function JetSetRadioLoading() {
  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden flex items-center justify-center">
      
      {/* === Fondo Animado Gradiente Neón === */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: 0 }}
        animate={{
          background: [
            'radial-gradient(circle at center, rgba(0, 194, 223, 0.15) 0%, rgba(0, 0, 0, 1) 70%)',
            'radial-gradient(circle at center, rgba(255, 0, 170, 0.15) 0%, rgba(0, 0, 0, 1) 70%)',
            'radial-gradient(circle at center, rgba(0, 255, 204, 0.15) 0%, rgba(0, 0, 0, 1) 70%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* === Ruido tipo TV estática === */}
      <motion.div
        className="absolute inset-0 bg-[url('https://i.imgur.com/zXvTfLp.png')] bg-cover opacity-10 pointer-events-none"
        style={{ zIndex: 1 }}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />

      {/* === Círculos concéntricos estilo radar === */}
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {[100, 200, 300].map((size, i) => (
          <motion.div
            key={i}
            className="absolute border rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `-${size / 2}px`,
              top: `-${size / 2}px`,
              borderColor: i % 2 === 0 ? '#00c2df' : '#ff00aa',
              borderWidth: i === 0 ? '2px' : '1px',
              opacity: 0.4
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* === Líneas diagonales tipo escáner === */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          const color = i % 3 === 0 ? '#00c2df' : i % 3 === 1 ? '#ff00aa' : '#00ffcc';
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '150%',
                height: '1px',
                backgroundColor: color,
                opacity: 0.3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * -50}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`
              }}
              animate={{
                x: [0, 100, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity
              }}
            />
          );
        })}
      </div>

      {/* === Barras de escáner pulsantes === */}
      <div className="absolute z-10 bottom-[22%] left-0 w-full h-[10%] flex gap-1 px-4">
        {Array.from({ length: 20 }).map((_, i) => {
          const color = i % 2 === 0 ? '#00c2df' : '#ff00aa';
          return (
            <motion.div
              key={i}
              className="relative"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                backgroundColor: color,
                boxShadow: `0 0 5px ${color}`
              }}
              animate={{
                height: [20, 100, 20],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 1.5 + Math.random() * 2,
                repeat: Infinity
              }}
            />
          );
        })}
      </div>

      {/* === Texto NOW LOADING centrado y animado === */}
      <motion.h1
        className="absolute z-20 bottom-[10%] left-1/2 transform -translate-x-1/2 text-[3rem] sm:text-[5rem] uppercase font-bold tracking-[0.3em]"
        animate={{
          opacity: [0.6, 1, 0.6],
          textShadow: [
            '0 0 10px #00c2df, 0 0 20px #00c2df, 2px 2px 0 #000',
            '0 0 15px #ff00aa, 0 0 30px #ff00aa, 2px 2px 0 #000',
            '0 0 10px #00c2df, 0 0 20px #00c2df, 2px 2px 0 #000'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ fontFamily: "'Orbitron', sans-serif", color: 'white' }}
      >
        NOW LOADING
      </motion.h1>
    </div>
  );
}
