import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, Heart, Sparkles, Smile, MessageCircle } from "lucide-react";
import parentChildImg from "@/assets/images/parent-child.png"; // existing
import heroImg from "@/assets/images/hero.png"; // existing

const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  }
};

export default function Home() {
  useEffect(() => {
    document.title = "Home — PhonicsWorld";
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-32 overflow-hidden bg-cream">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={floatingAnimation} className="absolute top-10 left-[10%] text-6xl font-display text-primary font-bold opacity-30 rotate-12">A</motion.div>
          <motion.div animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 4 } }} className="absolute top-40 right-[15%] text-7xl font-display text-accent font-bold opacity-30 -rotate-12">B</motion.div>
          <motion.div animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 3.5 } }} className="absolute bottom-20 left-[20%] text-5xl font-display text-secondary font-bold opacity-30 rotate-6">C</motion.div>
          <motion.div animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, duration: 4.5 } }} className="absolute top-20 right-[30%] text-5xl font-display text-primary font-bold opacity-30 -rotate-6">D</motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6"
            >
              Make your child a <span className="text-primary relative inline-block">confident reader<svg className="absolute w-full h-4 -bottom-1 left-0 text-accent" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" /></svg></span> with fun phonics learning
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Our interactive, joyful online classes help kids ages 3-8 master reading, writing, and spelling through play, stories, and songs!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-xl py-8 px-8 shadow-md hover:translate-y-1 transition-all" asChild>
                <Link href="/contact">Book Free Demo Class</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-4 border-secondary text-foreground hover:bg-secondary/20 font-display text-xl py-8 px-8 shadow-sm hover:translate-y-1 transition-all" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <img src={heroImg} alt="Happy kids reading" className="w-full max-w-lg mx-auto rounded-3xl rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl border-8 border-white" />
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mt-1 bg-sky-100">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-cream"></path>
        </svg>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-sky-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Why Kids Love Us!</h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">Learning to read should be an adventure, not a chore.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Interactive Games", desc: "No boring worksheets! We use fun games to reinforce letter sounds and blending.", color: "text-primary", bg: "bg-primary/20", border: "border-primary" },
              { icon: Smile, title: "Joyful Teachers", desc: "Our certified educators know exactly how to keep young minds engaged and giggling.", color: "text-accent", bg: "bg-accent/20", border: "border-accent" },
              { icon: BookOpen, title: "Story-Based Learning", desc: "We use captivating stories to make every phonics rule memorable.", color: "text-secondary", bg: "bg-secondary/20", border: "border-secondary" },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`bg-white rounded-3xl p-8 shadow-md border-b-8 ${feature.border} hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Another Wave */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sky-100"></path>
        </svg>
      </div>

      {/* CTA Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-3xl p-12 border-4 border-primary max-w-4xl mx-auto shadow-lg relative overflow-hidden"
          >
            <Sparkles className="absolute top-4 left-4 text-primary w-12 h-12 opacity-50" />
            <Heart className="absolute bottom-4 right-4 text-accent w-12 h-12 opacity-50" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Ready to see the magic?</h2>
            <p className="text-xl text-muted-foreground font-medium mb-8 max-w-2xl mx-auto">
              Join thousands of parents who have watched their children fall in love with reading.
            </p>
            <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-display text-xl py-8 px-10 shadow-md hover:scale-105 transition-all" asChild>
              <Link href="/contact">Book Your Free Class Today!</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
