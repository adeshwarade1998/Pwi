import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

export default function Courses() {
  useEffect(() => {
    document.title = "Courses — PhonicsWorld";
  }, []);

  const modules = [
    {
      level: "Level 1",
      title: "Letter Sounds",
      desc: "Master the 42 pure letter sounds through fun actions and songs.",
      color: "bg-primary/20",
      textColor: "text-primary",
      borderColor: "border-primary",
      items: ["A-Z Sounds", "Vowel Sounds", "Consonant Sounds", "Action-based recall"]
    },
    {
      level: "Level 2",
      title: "Blending Magic",
      desc: "Learn to smush sounds together to read simple 3-letter CVC words.",
      color: "bg-secondary/20",
      textColor: "text-secondary",
      borderColor: "border-secondary",
      items: ["CVC Words (cat, dog)", "Sound blending", "Word building", "Early reading"]
    },
    {
      level: "Level 3",
      title: "Tricky Digraphs",
      desc: "When two letters make one sound! Unlocking 'sh', 'ch', 'th', and more.",
      color: "bg-accent/20",
      textColor: "text-accent",
      borderColor: "border-accent",
      items: ["Consonant Digraphs", "Vowel Digraphs", "Magic E rule", "Complex words"]
    },
    {
      level: "Level 4",
      title: "Sight Words",
      desc: "Memorizing the tricky words that don't follow the normal phonics rules.",
      color: "bg-orange-100",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
      items: ["High-frequency words", "Visual memory games", "Sentence context", "Quick recall"]
    },
    {
      level: "Level 5",
      title: "Reading Fluency",
      desc: "Moving from slow decoding to smooth, natural reading speed.",
      color: "bg-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-500",
      items: ["Pacing and rhythm", "Expression reading", "Paragraphs", "Confidence building"]
    },
    {
      level: "Level 6",
      title: "Comprehension",
      desc: "Understanding the story, answering questions, and loving books!",
      color: "bg-purple-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-500",
      items: ["Story retelling", "Answering questions", "Predicting outcomes", "Independent reading"]
    }
  ];

  return (
    <div className="w-full pt-12 pb-24 px-4 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6"
        >
          Our <span className="text-primary">Learning</span> Journey 🚀
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground font-medium"
        >
          A step-by-step path from learning sounds to becoming a confident, independent reader. Designed specifically for young minds!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="h-full"
          >
            <Card className={`h-full rounded-3xl border-4 ${mod.borderColor} shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
              <div className={`py-6 px-8 ${mod.color} border-b-4 ${mod.borderColor}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-bold uppercase tracking-wider text-sm ${mod.textColor}`}>{mod.level}</span>
                  <Star className={`w-5 h-5 ${mod.textColor}`} />
                </div>
                <h3 className="text-3xl font-display font-bold text-foreground">{mod.title}</h3>
              </div>
              <CardContent className="p-8 bg-white">
                <p className="text-muted-foreground text-lg mb-6 font-medium h-20">
                  {mod.desc}
                </p>
                <div className="space-y-3">
                  <p className="font-display font-semibold text-foreground mb-4">What kids learn:</p>
                  {mod.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 ${mod.textColor}`} />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 bg-primary rounded-3xl p-10 text-center shadow-lg border-4 border-foreground"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">Not sure which level is right?</h2>
        <p className="text-xl text-primary-foreground/90 font-medium mb-8 max-w-2xl mx-auto">
          Book a free demo class, and our expert teachers will assess your child's current reading level.
        </p>
        <Button size="lg" className="rounded-full bg-white hover:bg-gray-100 text-foreground font-display text-xl py-8 px-10 shadow-[0_4px_0_0_rgba(0,0,0,1)] hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all" asChild>
          <Link href="/contact">Book Assessment Class</Link>
        </Button>
      </motion.div>
    </div>
  );
}
