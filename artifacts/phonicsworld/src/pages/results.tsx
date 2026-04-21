import { useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RhymeMatch } from "@/components/rhyme-match";

export default function Results() {
  useEffect(() => {
    document.title = "Results — PhonicsWorld";
  }, []);

  const testimonials = [
    {
      name: "Sarah M.",
      childAge: "Parent of 5-year-old",
      quote: "Before PhonicsWorld, my son struggled with basic sounds. Now he's reading simple books independently. The curriculum is incredibly structured and the teachers are exceptionally patient.",
    },
    {
      name: "Rajesh K.",
      childAge: "Parent of 6-year-old",
      quote: "We tried apps and workbooks, but the live interactive classes made all the difference. My daughter's pronunciation and reading fluency have improved drastically in just 3 months.",
    },
    {
      name: "Emily T.",
      childAge: "Parent of 7-year-old",
      quote: "My child was falling behind in school reading levels. PhonicsWorld helped her catch up. She no longer avoids reading; she actually looks forward to her bedtime stories now.",
    },
    {
      name: "David L.",
      childAge: "Parent of 4-year-old",
      quote: "Best investment in early education. The progress reports keep us informed, and the methodology is clearly evidence-based. Highly recommended for establishing early literacy.",
    },
    {
      name: "Priya S.",
      childAge: "Parent of 6-year-old",
      quote: "The small group sizes mean my daughter gets the attention she needs. If she mispronounces a sound, the teacher catches it immediately and corrects it gently.",
    },
    {
      name: "Michael R.",
      childAge: "Parent of 5-year-old",
      quote: "The transition from knowing letter sounds to actually blending them into words happened so quickly. The curriculum is perfectly paced to avoid overwhelming the kids.",
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
          Parent Success Stories
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground font-sans leading-relaxed"
        >
          Hear from parents who have experienced the impact of structured phonics on their children's reading confidence and academic foundation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full rounded-2xl border border-border shadow-sm bg-white">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="w-8 h-8 text-primary/40 mb-4 shrink-0" />
                <p className="text-base font-sans text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-sans font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="font-sans text-sm text-muted-foreground">{testimonial.childAge}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Interactive Activity lower down */}
      <section className="mt-24 pt-16 border-t border-border">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Try it with your child</h2>
          <p className="text-muted-foreground font-sans text-sm">Interactive rhyming activity demonstration.</p>
        </div>
        <RhymeMatch />
      </section>
    </div>
  );
}
