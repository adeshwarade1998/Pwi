import { useEffect } from "react";
import { motion } from "framer-motion";
import classImg from "@/assets/images/playful-classroom.png";
import alphabetImg from "@/assets/images/alphabet-blocks.png";
import { AlphabetPlayground } from "@/components/alphabet-playground";

export default function About() {
  useEffect(() => {
    document.title = "About Us — PhonicsWorld";
  }, []);

  return (
    <div className="w-full pt-16 pb-24 bg-background">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
        >
          Our Commitment to Parents & Children
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground font-sans leading-relaxed"
        >
          We partner with families to build strong reading foundations, transforming early literacy into an engaging, structured journey.
        </motion.p>
      </section>

      {/* Methodology block */}
      <section className="container mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img src={classImg} alt="Our learning methodology" className="w-full rounded-xl border border-border shadow-sm" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-foreground">Why Parents Choose PhonicsWorld</h2>
            <p className="text-muted-foreground font-sans text-base leading-relaxed">
              Reading is the foundation of all future academic success. We use a proven, evidence-based phonics approach to ensure children don't just memorize words, but understand the mechanics of language.
            </p>
            <ul className="space-y-4 text-base font-sans text-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Structured Phonics:</strong> Systematic introduction to 42 letter sounds.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Fluency & Pronunciation:</strong> Correcting early habits for clear articulation.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Confidence Building:</strong> Small classes ensure every child participates.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Expert Educators:</strong> 100% certified teachers with years of early-childhood experience.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats/Facts - Professional */}
      <section className="bg-muted/30 py-16 border-y border-border mb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">3–8</div>
              <div className="text-base font-sans font-medium text-foreground">Age Range We Serve</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6">
              <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-3">100%</div>
              <div className="text-base font-sans font-medium text-foreground">Certified Teachers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-3">42</div>
              <div className="text-base font-sans font-medium text-foreground">Core Phonemes Covered</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Meet the Educational Team</h2>
          <p className="text-muted-foreground font-sans">Dedicated professionals committed to your child's academic growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 text-2xl font-display font-bold">
              AS
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-1">Asmii Sidhu</h3>
            <p className="text-sm font-sans text-primary font-medium mb-4">Senior Phonics Educator</p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              With over 5 years of specialized experience in early childhood literacy, Asmii designs structured learning paths that adapt to each student's pace.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6 text-2xl font-display font-bold">
              HS
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-1">Hritika Sharma</h3>
            <p className="text-sm font-sans text-secondary font-medium mb-4">Reading Specialist</p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              Hritika brings 5+ years of expertise in engaging young learners, ensuring foundational reading concepts are mastered thoroughly before advancing.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Activity lower down */}
      <section className="container mx-auto px-4 mt-24 pt-16 border-t border-border">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Try it with your child</h2>
          <p className="text-muted-foreground font-sans text-sm">A quick preview of our interactive learning tools.</p>
        </div>
        <AlphabetPlayground />
      </section>
    </div>
  );
}
