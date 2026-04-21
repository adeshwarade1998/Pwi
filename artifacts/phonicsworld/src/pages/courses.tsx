import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";
import { WordBuilder } from "@/components/word-builder";

export default function Courses() {
  useEffect(() => {
    document.title = "Courses — PhonicsWorld";
  }, []);

  const modules = [
    {
      level: "Level 1",
      title: "Starting Point",
      desc: "The perfect starting point for young readers. Level 1 introduces children to the building blocks of reading with fun, engaging lessons.",
      color: "bg-primary/20",
      textColor: "text-primary",
      borderColor: "border-primary",
      items: ["Letter sounds", "Basic blending", "Fun actions and songs", "Early recognition"]
    },
    {
      level: "Level 2",
      title: "Building Readers",
      desc: "Building strong readers with confidence. Level 2 takes children beyond the basics, helping them blend sounds and read simple sentences.",
      color: "bg-secondary/20",
      textColor: "text-secondary",
      borderColor: "border-secondary",
      items: ["CVC Words", "Sound blending", "Word building", "Simple sentences"]
    },
    {
      level: "Level 3",
      title: "Confident Explorers",
      desc: "From early readers to confident explorers. Level 3 equips children with advanced phonics skills to read fluently and write with clarity.",
      color: "bg-accent/20",
      textColor: "text-accent",
      borderColor: "border-accent",
      items: ["Advanced phonics", "Reading fluently", "Writing with clarity", "Complex words"]
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
          Our <span className="text-primary">Course Levels</span> 🚀
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

      <WordBuilder />

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
