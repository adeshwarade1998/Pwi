import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

type CardData = { id: string; word: string; rhymedWith: string; matched: boolean; failed: boolean };

const PAIRS = [
  { left: "CAT", right: "HAT", pairId: "1" },
  { left: "DOG", right: "LOG", pairId: "2" },
  { left: "STAR", right: "CAR", pairId: "3" },
  { left: "MOON", right: "SPOON", pairId: "4" }
];

export function RhymeMatch() {
  const [leftCards, setLeftCards] = useState<CardData[]>([]);
  const [rightCards, setRightCards] = useState<CardData[]>([]);
  
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState(0);

  const initGame = () => {
    const left = PAIRS.map(p => ({ id: `L-${p.pairId}`, word: p.left, rhymedWith: p.pairId, matched: false, failed: false }));
    const right = PAIRS.map(p => ({ id: `R-${p.pairId}`, word: p.right, rhymedWith: p.pairId, matched: false, failed: false }));
    
    // Shuffle right cards
    for (let i = right.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [right[i], right[j]] = [right[j], right[i]];
    }
    
    setLeftCards(left);
    setRightCards(right);
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatches(0);
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const leftCard = leftCards.find(c => c.id === selectedLeft);
      const rightCard = rightCards.find(c => c.id === selectedRight);
      
      if (leftCard?.rhymedWith === rightCard?.rhymedWith) {
        // Match!
        setTimeout(() => {
          setLeftCards(prev => prev.map(c => c.id === selectedLeft ? { ...c, matched: true } : c));
          setRightCards(prev => prev.map(c => c.id === selectedRight ? { ...c, matched: true } : c));
          setSelectedLeft(null);
          setSelectedRight(null);
          setMatches(m => m + 1);
        }, 500);
      } else {
        // No match
        setLeftCards(prev => prev.map(c => c.id === selectedLeft ? { ...c, failed: true } : c));
        setRightCards(prev => prev.map(c => c.id === selectedRight ? { ...c, failed: true } : c));
        
        setTimeout(() => {
          setLeftCards(prev => prev.map(c => c.id === selectedLeft ? { ...c, failed: false } : c));
          setRightCards(prev => prev.map(c => c.id === selectedRight ? { ...c, failed: false } : c));
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 800);
      }
    }
  }, [selectedLeft, selectedRight]);

  const handleCardClick = (id: string, side: "left" | "right") => {
    if (side === "left") {
      if (!leftCards.find(c => c.id === id)?.matched) {
        setSelectedLeft(id);
      }
    } else {
      if (!rightCards.find(c => c.id === id)?.matched) {
        setSelectedRight(id);
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-display font-bold text-foreground mb-4">Rhyme-Time Match</h2>
        <p className="text-xl text-muted-foreground font-medium mb-10">
          Click a word on the left, then find its rhyming friend on the right!
        </p>

        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-display font-bold text-primary bg-primary/10 px-6 py-2 rounded-full border-2 border-primary">
            {matches} / 4 matched!
          </div>
          <Button variant="outline" onClick={initGame} className="rounded-full border-2 border-muted hover:bg-muted font-display text-lg">
            <RefreshCw className="w-5 h-5 mr-2" />
            Reset Game
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftCards.map(card => (
              <motion.button
                key={card.id}
                animate={card.failed ? { x: [-10, 10, -10, 10, 0] } : card.matched ? { scale: [1, 1.1, 1] } : {}}
                transition={card.failed ? { duration: 0.4 } : { duration: 0.3 }}
                onClick={() => handleCardClick(card.id, "left")}
                className={`
                  p-6 text-2xl md:text-3xl font-display font-bold rounded-2xl shadow-sm border-b-4 border-r-4 transition-colors w-full
                  ${card.matched ? 'bg-green-500 text-white border-green-600' : 
                    selectedLeft === card.id ? 'bg-primary text-primary-foreground border-primary' : 
                    card.failed ? 'bg-destructive text-white border-destructive' :
                    'bg-white text-foreground border-secondary hover:bg-secondary/10'}
                `}
                disabled={card.matched}
              >
                {card.word}
              </motion.button>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightCards.map(card => (
              <motion.button
                key={card.id}
                animate={card.failed ? { x: [-10, 10, -10, 10, 0] } : card.matched ? { scale: [1, 1.1, 1] } : {}}
                transition={card.failed ? { duration: 0.4 } : { duration: 0.3 }}
                onClick={() => handleCardClick(card.id, "right")}
                className={`
                  p-6 text-2xl md:text-3xl font-display font-bold rounded-2xl shadow-sm border-b-4 border-l-4 transition-colors w-full
                  ${card.matched ? 'bg-green-500 text-white border-green-600' : 
                    selectedRight === card.id ? 'bg-accent text-white border-accent' : 
                    card.failed ? 'bg-destructive text-white border-destructive' :
                    'bg-white text-foreground border-secondary hover:bg-secondary/10'}
                `}
                disabled={card.matched}
              >
                {card.word}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}