import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Users } from "lucide-react";
import { WordBuilder } from "@/components/word-builder";

export default function Courses() {
  useEffect(() => {
    document.title = "Curriculum — PhonicsWorld";
  }, []);

  const modules = [
    {
      level: "Level 1",
      title: "Foundations",
      age: "Ages 3–5",
      duration: "12 Weeks",
      desc: "The essential starting point for early learners to build phonemic awareness and basic letter recognition.",
      outcomes: ["Recognize 42 core letter sounds", "Basic CVC word blending", "Identify initial/final sounds", "Correct pencil grip and letter formation"],
      color: "border-primary",
      bg: "bg-primary/5"
    },
    {
      level: "Level 2",
      title: "Emergent Readers",
      age: "Ages 5–6",
      duration: "16 Weeks",
      desc: "Transitioning from individual sounds to reading complete words and simple, decodable sentences.",
      outcomes: ["Read simple sentences fluently", "Master consonant digraphs (sh, ch, th)", "Learn common sight words", "Write short, dictated words"],
      color: "border-secondary",
      bg: "bg-secondary/5"
    },
    {
      level: "Level 3",
      title: "Independent Readers",
      age: "Ages 6–8",
      duration: "20 Weeks",
      desc: "Advanced phonics instruction focusing on reading fluency, spelling rules, and reading comprehension.",
      outcomes: ["Read age-appropriate books independently", "Master the 'Magic E' rule", "Understand alternative vowel spellings", "Write complete, structured sentences"],
      color: "border-accent",
      bg: "bg-accent/5"
    }
  ];

  return (
    <div className="w-full pt-16 pb-24 px-4 container mx-auto bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
        >
          Structured Phonics Curriculum
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground font-sans leading-relaxed"
        >
          A progressive, step-by-step path designed to take your child from learning basic sounds to becoming a confident, independent reader.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="h-full"
          >
            <Card className={`h-full rounded-2xl border ${mod.color} shadow-sm bg-white overflow-hidden flex flex-col`}>
              <div className={`p-6 ${mod.bg} border-b ${mod.color}`}>
                <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-sans font-bold uppercase tracking-wider text-foreground mb-4 border border-border">
                  {mod.level}
                </span>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">{mod.title}</h3>
                <div className="flex items-center gap-6 text-sm font-sans text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{mod.age}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{mod.duration}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-6">
                  {mod.desc}
                </p>
                <div className="space-y-4 mt-auto">
                  <p className="font-sans font-semibold text-sm text-foreground">Learning Outcomes:</p>
                  <ul className="space-y-3">
                    {mod.outcomes.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                        <span className="text-sm font-sans text-muted-foreground leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-muted/30 rounded-2xl p-10 text-center border border-border max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">Not sure which level is appropriate?</h2>
        <p className="text-base text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
          Every child's reading journey is unique. Book a free assessment class, and our educators will evaluate your child's current skills to recommend the perfect starting point.
        </p>
        <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-sans font-medium px-8 transition-all" asChild>
          <Link href="/contact">Book a Free Assessment</Link>
        </Button>
      </motion.div>

      {/* Interactive Activity lower down */}
      <section className="mt-24 pt-16 border-t border-border">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Try it with your child</h2>
          <p className="text-muted-foreground font-sans text-sm">Interactive word building demonstration.</p>
        </div>
        <WordBuilder />
      </section>
    </div>
  );
}
