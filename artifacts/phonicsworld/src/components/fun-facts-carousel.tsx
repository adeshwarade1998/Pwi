import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Brain, BookOpen, Quote, Smile, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FACTS = [
  {
    icon: Lightbulb,
    text: "Most kids learn 3,000 new words every year!",
    color: "bg-primary",
    textColor: "text-primary-foreground"
  },
  {
    icon: Sparkles,
    text: "There are 44 different sounds in the English language!",
    color: "bg-accent",
    textColor: "text-accent-foreground"
  },
  {
    icon: BookOpen,
    text: "Kids who read for fun do better in every subject — not just English.",
    color: "bg-secondary",
    textColor: "text-secondary-foreground"
  },
  {
    icon: Quote,
    text: "The longest word in a child's first dictionary is usually 'butterfly'.",
    color: "bg-green-500",
    textColor: "text-white"
  },
  {
    icon: Brain,
    text: "Reading aloud just 15 minutes a day builds a stronger brain.",
    color: "bg-primary",
    textColor: "text-primary-foreground"
  },
  {
    icon: Smile,
    text: "The letter 'E' is the most common letter in English.",
    color: "bg-accent",
    textColor: "text-accent-foreground"
  }
];

export function FunFactsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FACTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-display font-bold text-foreground mb-12">
          Fun Facts to Spark Curiosity
        </h2>

        <div className="relative max-w-2xl mx-auto h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -50, rotate: -5 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute w-full"
            >
              {(() => {
                const fact = FACTS[currentIndex];
                const Icon = fact.icon;
                return (
                  <Card className={`rounded-[3rem] border-0 shadow-lg ${fact.color}`}>
                    <CardContent className="p-10 flex flex-col items-center text-center gap-6">
                      {Icon && (
                        <div className="bg-white/20 p-4 rounded-full">
                          <Icon className={`w-12 h-12 ${fact.textColor}`} />
                        </div>
                      )}
                      <p className={`text-2xl md:text-3xl font-display font-bold leading-tight ${fact.textColor}`}>
                        "Did you know? {fact.text}"
                      </p>
                    </CardContent>
                  </Card>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {FACTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-4 h-4 rounded-full transition-all ${
                i === currentIndex ? "bg-primary scale-125" : "bg-muted"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}