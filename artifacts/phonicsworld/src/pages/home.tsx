import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, LineChart, Award, GraduationCap, Heart, CheckCircle2, LayoutTemplate } from "lucide-react";
import heroImg from "@/assets/images/hero.png";
import { AlphabetPlayground } from "@/components/alphabet-playground";
import { CharacterBand } from "@/components/character-band";
import { FunFactsCarousel } from "@/components/fun-facts-carousel";

export default function Home() {
  useEffect(() => {
    document.title = "Home — PhonicsWorld";
  }, []);

  return (
    <div className="w-full flex flex-col bg-background">
      {/* Refined Hero Section */}
      <section className="relative w-full pt-20 pb-20 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-sm font-semibold mb-6"
            >
              <Award className="w-4 h-4" />
              <span>Live online phonics classes for ages 3–8</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6"
            >
              Build a lifelong <span className="text-primary">love of reading</span> for your child.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Our structured phonics curriculum helps children ages 3–8 become confident readers through live, expert-led online classes.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-sans font-medium text-base py-6 px-8 shadow-sm transition-all" asChild>
                <Link href="/contact">Book a Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-border text-foreground hover:bg-muted font-sans font-medium text-base py-6 px-8 transition-all" asChild>
                <Link href="/courses">View Curriculum</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1"
          >
            <img src={heroImg} alt="Happy kids reading" className="w-full max-w-lg mx-auto rounded-2xl shadow-lg border border-border" />
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: GraduationCap, label: "Ages 3–8" },
              { icon: LayoutTemplate, label: "Structured Curriculum" },
              { icon: Users, label: "Small Group Classes" },
              { icon: CheckCircle2, label: "Certified Teachers" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-sans font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Approach to Literacy</h2>
            <p className="text-lg text-muted-foreground font-sans">A proven methodology designed to build fluency, comprehension, and confidence step-by-step.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Structured Phonics", desc: "We teach children to decode words using systematic phonics, moving from basic letter sounds to complex blends and digraphs.", color: "text-primary", bg: "bg-primary/10" },
              { icon: Users, title: "Live Interactive Classes", desc: "Small group sizes ensure your child receives personalized attention and immediate feedback from certified educators.", color: "text-secondary", bg: "bg-secondary/10" },
              { icon: LineChart, title: "Progress Tracking", desc: "Regular assessments and detailed parent reports keep you informed about your child's reading milestones and areas for growth.", color: "text-accent", bg: "bg-accent/10" },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-base font-sans leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Kid Section at the bottom */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-4">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">For Your Little Learner</h2>
            <p className="text-lg text-muted-foreground font-sans">While you explore, your child can try a few of our learning activities below to see how fun phonics can be.</p>
          </div>
          
          <div className="space-y-24">
            <AlphabetPlayground />
            <CharacterBand />
            <FunFactsCarousel />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Ready to see the difference?</h2>
            <p className="text-lg text-muted-foreground font-sans mb-8">
              Join thousands of parents who have watched their children fall in love with reading.
            </p>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-sans font-medium text-base py-6 px-10 shadow-sm transition-all" asChild>
              <Link href="/contact">Book Your Free Demo Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
