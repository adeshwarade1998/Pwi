import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

const LETTERS = [
  { char: "A", sound: "ah", color: "bg-primary text-primary-foreground", borderColor: "border-primary" },
  { char: "B", sound: "buh", color: "bg-accent text-accent-foreground", borderColor: "border-accent" },
  { char: "C", sound: "kuh", color: "bg-secondary text-secondary-foreground", borderColor: "border-secondary" },
  { char: "D", sound: "duh", color: "bg-green-500 text-white", borderColor: "border-green-600" },
  { char: "E", sound: "eh", color: "bg-primary text-primary-foreground", borderColor: "border-primary" },
  { char: "F", sound: "fff", color: "bg-accent text-accent-foreground", borderColor: "border-accent" },
  { char: "G", sound: "guh", color: "bg-secondary text-secondary-foreground", borderColor: "border-secondary" },
  { char: "H", sound: "huh", color: "bg-green-500 text-white", borderColor: "border-green-600" },
  { char: "I", sound: "ih", color: "bg-primary text-primary-foreground", borderColor: "border-primary" },
  { char: "J", sound: "juh", color: "bg-accent text-accent-foreground", borderColor: "border-accent" },
  { char: "K", sound: "kuh", color: "bg-secondary text-secondary-foreground", borderColor: "border-secondary" },
  { char: "L", sound: "lll", color: "bg-green-500 text-white", borderColor: "border-green-600" },
  { char: "M", sound: "mmm", color: "bg-primary text-primary-foreground", borderColor: "border-primary" },
  { char: "N", sound: "nnn", color: "bg-accent text-accent-foreground", borderColor: "border-accent" },
  { char: "O", sound: "ah", color: "bg-secondary text-secondary-foreground", borderColor: "border-secondary" },
  { char: "P", sound: "puh", color: "bg-green-500 text-white", borderColor: "border-green-600" },
  { char: "Q", sound: "kwuh", color: "bg-primary text-primary-foreground", borderColor: "border-primary" },
  { char: "R", sound: "rrr", color: "bg-accent text-accent-foreground", borderColor: "border-accent" },
  { char: "S", sound: "sss", color: "bg-secondary text-secondary-foreground", borderColor: "border-secondary" },
  { char: "T", sound: "tuh", color: "bg-green-500 text-white", borderColor: "border-green-600" },
  { char: "U", sound: "uh", color: "bg-primary text-primary-foreground", borderColor: "border-primary" },
  { char: "V", sound: "vvv", color: "bg-accent text-accent-foreground", borderColor: "border-accent" },
  { char: "W", sound: "wuh", color: "bg-secondary text-secondary-foreground", borderColor: "border-secondary" },
  { char: "X", sound: "ksss", color: "bg-green-500 text-white", borderColor: "border-green-600" },
  { char: "Y", sound: "yuh", color: "bg-primary text-primary-foreground", borderColor: "border-primary" },
  { char: "Z", sound: "zzz", color: "bg-accent text-accent-foreground", borderColor: "border-accent" },
];

export function AlphabetPlayground() {
  const [hoveredLetter, setHoveredLetter] = useState<string | null>(null);

  const playSound = (sound: string) => {
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(sound);
      utterance.rate = 0.8; // slightly slower for clarity
      utterance.pitch = 1.2; // slightly higher pitch for kid-friendly voice
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Volume2 className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Tap a Letter, Hear its Sound!
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Phonics is all about sounds! Tap on any bubble to hear how that letter sounds in a word.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {LETTERS.map((letter, i) => (
            <motion.button
              key={letter.char}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -5, 5, -5, 0],
                transition: { rotate: { repeat: Infinity, duration: 0.5 } }
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => playSound(letter.sound)}
              onMouseEnter={() => setHoveredLetter(letter.char)}
              onMouseLeave={() => setHoveredLetter(null)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-display font-bold shadow-md border-b-4 border-r-4 ${letter.borderColor} ${letter.color} cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2`}
              aria-label={`Play sound for letter ${letter.char}`}
            >
              {letter.char}
              {hoveredLetter === letter.char && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-sm px-3 py-1 rounded-full whitespace-nowrap font-sans font-bold shadow-sm pointer-events-none"
                >
                  "{letter.sound}"
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}