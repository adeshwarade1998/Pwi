import { useEffect } from "react";
import { motion } from "framer-motion";
import classImg from "@/assets/images/playful-classroom.png";
import alphabetImg from "@/assets/images/alphabet-blocks.png";
import { FunFactsCarousel } from "@/components/fun-facts-carousel";

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
          Our <span className="text-accent">Brand Promise</span> ✨
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-muted-foreground font-medium"
        >
          We are here to help parents raise English Superstars.
        </motion.p>
      </section>

      {/* Content block 1 */}
      <section className="container mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 md:p-12 border-4 border-secondary shadow-lg">
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
            <h2 className="text-4xl font-display font-bold text-foreground">Why Parents Choose Us</h2>
            <ul className="space-y-3 text-lg font-medium text-muted-foreground list-disc list-inside pl-4">
              <li>Phonics-based reading</li>
              <li>Pronunciation, Fluency & Spellings</li>
              <li>Confidence & Personality-building</li>
              <li>Advanced Method learning</li>
              <li>Holistic approach</li>
              <li>Passionate teachers</li>
              <li>Experienced Coaches</li>
              <li>2000+ Kids Trained</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats/Facts */}
      <section className="bg-primary/20 py-20 border-y-4 border-primary mb-24">
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

      <FunFactsCarousel />

      {/* Content block 2 */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl font-display font-bold text-foreground">Our Pillars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border-4 border-primary shadow-sm">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Kindness</h3>
                <p className="text-md text-muted-foreground font-medium">We believe kindness is the key to confident learners. Every lesson encourages respect, empathy, and care — creating a safe and happy space for all children.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-4 border-accent shadow-sm">
                <h3 className="text-2xl font-display font-bold text-accent mb-2">Creativity</h3>
                <p className="text-md text-muted-foreground font-medium">Learning is more than letters and sounds — it's imagination in action. Our activities inspire children to express themselves through stories, songs, and play.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-4 border-secondary shadow-sm">
                <h3 className="text-2xl font-display font-bold text-secondary mb-2">Emotional</h3>
                <p className="text-md text-muted-foreground font-medium">We care for the heart as much as the mind. Our classrooms create a warm, safe space where children can explore feelings and build confidence.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-4 border-green-500 shadow-sm">
                <h3 className="text-2xl font-display font-bold text-green-600 mb-2">Innovation</h3>
                <p className="text-md text-muted-foreground font-medium">Blending tradition with technology for brighter futures. We use modern tools and creative methods to make phonics fun, effective, and future-ready.</p>
              </div>
            </div>
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

      {/* Teachers */}
      <section className="container mx-auto px-4 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground">Meet the Teachers</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mb-4 shadow-sm text-4xl font-display font-bold text-primary">
              AS
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">Asmii Sidhu</h3>
            <p className="text-muted-foreground font-medium">Phonics Coach with 5+ years of experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center mb-4 shadow-sm text-4xl font-display font-bold text-accent">
              HS
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">Hritika Sharma</h3>
            <p className="text-muted-foreground font-medium">Phonics Coach with 5+ years of experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
