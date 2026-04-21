import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRESETS = [
  { w: "CAT", l: ["C", "A", "T"] },
  { w: "DOG", l: ["D", "O", "G"] },
  { w: "SUN", l: ["S", "U", "N"] },
  { w: "HAT", l: ["H", "A", "T"] },
  { w: "PIG", l: ["P", "I", "G"] }
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function WordBuilder() {
  const [letters, setLetters] = useState(["C", "A", "T"]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const cycleLetter = (index: number) => {
    setLetters(prev => {
      const next = [...prev];
      const currentIdx = ALPHABET.indexOf(next[index]);
      next[index] = ALPHABET[(currentIdx + 1) % ALPHABET.length];
      return next;
    });
  };

  const loadPreset = (wordArr: string[]) => {
    setLetters([...wordArr]);
  };

  const speakWord = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const word = letters.join("");
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section className="py-24 bg-accent/5 relative overflow-hidden rounded-[3rem] my-12 border-4 border-accent/20">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Build a Word, Say it Out Loud
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Click the blocks to change letters, or try our starter words! This is how kids learn to blend sounds.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PRESETS.map((preset) => (
            <Button
              key={preset.w}
              variant="outline"
              onClick={() => loadPreset(preset.l)}
              className="rounded-full border-2 border-primary/50 text-foreground hover:bg-primary/10 font-display text-lg"
            >
              {preset.w}
            </Button>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-8 mb-12">
          {letters.map((letter, i) => (
            <motion.button
              key={`${i}-${letter}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => cycleLetter(i)}
              className="w-24 h-28 sm:w-32 sm:h-36 bg-white rounded-2xl border-b-8 border-r-4 border-secondary shadow-md flex items-center justify-center text-6xl sm:text-7xl font-display font-bold text-primary cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-secondary/50"
              aria-label={`Change letter ${letter}`}
            >
              <motion.span
                key={letter}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {letter}
              </motion.span>
            </motion.button>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            onClick={speakWord}
            disabled={isSpeaking}
            className={`rounded-full ${isSpeaking ? 'bg-green-500 hover:bg-green-600 border-green-700' : 'bg-accent hover:bg-accent/90 border-accent'} text-white font-display text-2xl py-8 px-12 shadow-lg border-b-4 transition-all flex items-center gap-3`}
          >
            {isSpeaking ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <RefreshCw className="w-8 h-8" />
              </motion.div>
            ) : (
              <PlayCircle className="w-8 h-8" />
            )}
            <span>Say it!</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}