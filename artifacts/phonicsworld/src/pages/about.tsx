import { useEffect } from "react";
import { motion } from "framer-motion";
import classImg from "@/assets/images/playful-classroom.png";
import alphabetImg from "@/assets/images/alphabet-blocks.png";

export default function About() {
  useEffect(() => {
    document.title = "About Us — PhonicsWorld";
  }, []);

  return (
    <div className="w-full pt-12 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6"
        >
          Our <span className="text-accent">Story</span> ✨
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-muted-foreground font-medium"
        >
          We believe that every child can become a confident, joyful reader if given the right tools and a whole lot of fun.
        </motion.p>
      </section>

      {/* Content block 1 */}
      <section className="container mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 md:p-12 border-4 border-sky-200 shadow-lg">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img src={classImg} alt="Our classroom" className="w-full rounded-[2rem] border-4 border-primary shadow-sm rotate-2" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl font-display font-bold text-foreground">How It Started</h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              PhonicsWorld was founded by a team of early childhood educators who were tired of seeing kids struggle with reading through rote memorization. We knew there had to be a better, more engaging way.
            </p>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              We took the proven science of systematic synthetic phonics and wrapped it in games, songs, stories, and silly characters. The result? Kids who beg for their reading lessons!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats/Facts */}
      <section className="bg-primary/10 py-20 border-y-4 border-primary/20 mb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
              <div className="text-6xl font-display font-bold text-primary mb-2">5000+</div>
              <div className="text-xl font-bold text-foreground">Happy Readers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6">
              <div className="text-6xl font-display font-bold text-accent mb-2">100%</div>
              <div className="text-xl font-bold text-foreground">Certified Teachers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6">
              <div className="text-6xl font-display font-bold text-secondary mb-2">42</div>
              <div className="text-xl font-bold text-foreground">Letter Sounds Taught</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content block 2 */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl font-display font-bold text-foreground">Our Philosophy</h2>
            <ul className="space-y-6">
              <li className="bg-white p-6 rounded-2xl border-2 border-muted shadow-sm">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Play is Work</h3>
                <p className="text-lg text-muted-foreground font-medium">Children learn best when they don't realize they're learning. Every lesson is disguised as a game.</p>
              </li>
              <li className="bg-white p-6 rounded-2xl border-2 border-muted shadow-sm">
                <h3 className="text-2xl font-display font-bold text-accent mb-2">Praise the Effort</h3>
                <p className="text-lg text-muted-foreground font-medium">We celebrate trying, making mistakes, and trying again. Confidence is the key to reading.</p>
              </li>
              <li className="bg-white p-6 rounded-2xl border-2 border-muted shadow-sm">
                <h3 className="text-2xl font-display font-bold text-secondary mb-2">Small Steps</h3>
                <p className="text-lg text-muted-foreground font-medium">We break complex reading skills down into tiny, manageable chunks so every child feels successful.</p>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img src={alphabetImg} alt="Our philosophy" className="w-full rounded-[2rem] border-4 border-secondary shadow-sm -rotate-2" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
