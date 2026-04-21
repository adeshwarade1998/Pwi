import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARACTERS = [
  {
    id: "sunny",
    name: "Sunny the Squiggle",
    color: "bg-primary",
    borderColor: "border-primary",
    bio: "Loves the letter S!",
    catchphrase: "Ssssuper!",
    shape: "rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]"
  },
  {
    id: "beat",
    name: "Beat the Bouncer",
    color: "bg-accent",
    borderColor: "border-accent",
    bio: "Always rhyming!",
    catchphrase: "Let's bounce and rhyme!",
    shape: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
  },
  {
    id: "coco",
    name: "Coco the Curious",
    color: "bg-secondary",
    borderColor: "border-secondary",
    bio: "Asks lots of questions!",
    catchphrase: "Why? How? What?",
    shape: "rounded-[50%_50%_20%_80%_/_25%_80%_20%_75%]"
  },
  {
    id: "wiggle",
    name: "Wiggle the Wordsmith",
    color: "bg-destructive",
    borderColor: "border-destructive",
    bio: "Builds new words for fun!",
    catchphrase: "Words are like magic blocks!",
    shape: "rounded-[70%_30%_50%_50%_/_30%_30%_70%_70%]"
  },
  {
    id: "glow",
    name: "Glow the Genius",
    color: "bg-green-500",
    borderColor: "border-green-600",
    bio: "Knows every story by heart!",
    catchphrase: "Once upon a time...",
    shape: "rounded-[40%_60%_60%_40%_/_70%_30%_70%_30%]"
  }
];

export function CharacterBand() {
  const [activeChar, setActiveChar] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Meet the PWi Friends!
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Our reading buddies are here to make learning fun. Tap them to say hello!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-end gap-6 sm:gap-12 max-w-5xl mx-auto mt-20">
          {CHARACTERS.map((char, i) => (
            <div key={char.id} className="relative flex flex-col items-center">
              <AnimatePresence>
                {activeChar === char.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-2xl shadow-lg border-2 border-muted z-10 w-48"
                  >
                    <p className="font-display font-bold text-lg leading-tight text-foreground">"{char.catchphrase}"</p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-muted rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ 
                  y: -15, 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { rotate: { repeat: Infinity, duration: 0.5 } }
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveChar(activeChar === char.id ? null : char.id)}
                className={`relative w-28 h-28 sm:w-36 sm:h-36 ${char.color} ${char.shape} border-b-8 border-r-4 ${char.borderColor} shadow-sm focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 cursor-pointer`}
                aria-label={`Meet ${char.name}`}
              >
                {/* Face SVG */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <div className="flex gap-4 mb-2">
                    <div className="w-3 h-4 sm:w-4 sm:h-5 bg-foreground rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
                    <div className="w-3 h-4 sm:w-4 sm:h-5 bg-foreground rounded-full animate-pulse" style={{ animationDuration: '3.5s' }} />
                  </div>
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5C15 20 25 20 35 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-foreground" />
                  </svg>
                </div>
              </motion.button>
              
              <div className="mt-6 text-center">
                <h3 className="font-display font-bold text-xl text-foreground">{char.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{char.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}