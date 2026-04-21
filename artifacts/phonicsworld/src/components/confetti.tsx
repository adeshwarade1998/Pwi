import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Confetti({ active, onComplete }: { active: boolean; onComplete: () => void }) {
  const [particles, setParticles] = useState<{ id: number; x: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    if (active) {
      const colors = ["#F59E0B", "#EF4444", "#3B82F6", "#10B981", "#EC4899"];
      const newParticles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [active, onComplete]);

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden flex justify-center pointer-events-none">
          {particles.map(p => (
            <motion.div
              key={p.id}
              initial={{ y: "110vh", x: `${p.x}vw`, rotate: 0, opacity: 1, scale: Math.random() * 0.5 + 0.5 }}
              animate={{ 
                y: "-10vh", 
                x: `${p.x + (Math.random() * 20 - 10)}vw`, 
                rotate: Math.random() * 360,
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 2 + Math.random(), 
                delay: p.delay,
                ease: "easeOut" 
              }}
              className="absolute bottom-0"
            >
              {/* Star shape */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill={p.color} className="drop-shadow-sm">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}