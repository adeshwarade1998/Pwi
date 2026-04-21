import { useEffect } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import parentReadingImg from "@/assets/images/parent-reading.png";
import childReadingImg from "@/assets/images/child-reading.png";

export default function Results() {
  useEffect(() => {
    document.title = "Results & Stories — PhonicsWorld";
  }, []);

  const testimonials = [
    {
      type: "text",
      name: "Avnish's Mom",
      childAge: "Age 5",
      quote: "Before PhonicsWorld, Avnish struggled with basic sounds. Now he's reading simple books independently! The change in his confidence is amazing.",
      color: "border-primary",
      bg: "bg-primary/20"
    },
    {
      type: "text",
      name: "Vannya's Mom",
      childAge: "Age 6",
      quote: "After just a few months with PhonicsWorld, Vannya is reading whole stories on her own — and loving it!",
      color: "border-secondary",
      bg: "bg-secondary/20"
    },
    {
      type: "video",
      name: "Leo's Dad",
      childAge: "Age 4",
      quote: "We tried so many apps and worksheets, but the live classes here are what finally clicked for Leo. He loves learning with patience and care!",
      image: childReadingImg,
      color: "border-accent",
      bg: "bg-accent/20"
    },
    {
      type: "text",
      name: "Priya M.",
      childAge: "Age 7",
      quote: "My daughter was falling behind in school reading levels. Within 3 months at PhonicsWorld, she caught up and now reads for fun before bed.",
      color: "border-green-500",
      bg: "bg-green-200/50"
    },
    {
      type: "text",
      name: "David K.",
      childAge: "Age 5",
      quote: "Best investment in his education we've made. The curriculum is perfectly structured. The progress is visible week by week.",
      color: "border-purple-500",
      bg: "bg-purple-200/50"
    },
    {
      type: "video",
      name: "Emma's Parents",
      childAge: "Age 6",
      quote: "She used to cry when it was time to practice reading. Now she begs to login to her PhonicsWorld classes. Where learning happens with joy!",
      image: parentReadingImg,
      color: "border-orange-500",
      bg: "bg-orange-200/50"
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
          Happy <span className="text-accent">Readers!</span> 📚
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground font-medium"
        >
          Don't just take our word for it. Hear from the parents who have watched their children's reading skills bloom.
        </motion.p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1 }}
            className="break-inside-avoid"
          >
            <Card className={`rounded-3xl border-4 ${testimonial.color} shadow-sm overflow-hidden bg-white`}>
              {testimonial.type === "video" && testimonial.image && (
                <div className="relative aspect-video w-full overflow-hidden group cursor-pointer border-b-4 border-inherit">
                  <img src={testimonial.image} alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <PlayCircle className="w-16 h-16 text-white opacity-90 drop-shadow-md group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              )}
              <CardContent className={`p-8 ${testimonial.bg}`}>
                <Quote className={`w-10 h-10 mb-4 opacity-40 text-foreground`} />
                <p className="text-lg font-medium text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-display font-bold text-foreground text-xl">{testimonial.name}</p>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-bold shadow-sm border-2 border-inherit text-foreground">
                    {testimonial.childAge}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
