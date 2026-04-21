import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, BatteryCharging, Volume2, FileText, ListChecks, Clock, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/confetti";

const PREP_POINTS = [
  {
    icon: BatteryCharging,
    title: "Check your device",
    text: "Ensure your computer, tablet, or phone is charged and that the camera, microphone, and internet connection are working smoothly.",
  },
  {
    icon: Volume2,
    title: "Find a quiet space",
    text: "Choose a calm, distraction-free area where you and your child can focus on the session without interruptions.",
  },
  {
    icon: FileText,
    title: "Bring relevant material",
    text: "Have any worksheets, books, or examples of your child's current reading and writing on hand to share with the teacher.",
  },
  {
    icon: ListChecks,
    title: "Note your questions",
    text: "Jot down any specific concerns — pronunciation, blending, reading challenges — so we can address them in the session.",
  },
  {
    icon: Clock,
    title: "Log in a little early",
    text: "Join 3–5 minutes before the scheduled time so everything is set up and the class can start right on time.",
  },
];

export default function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    document.title = "Thank You — PhonicsWorld";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-16 pb-24 px-4 container mx-auto relative bg-background">
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Thank you — your demo is booked!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-lg text-muted-foreground font-sans leading-relaxed"
        >
          Your free demo session has been successfully booked. A reminder will be sent to you one hour before the class.
        </motion.p>
      </div>

      {/* Prep card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-border p-8 md:p-10 mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
          Before your online demo class
        </h2>
        <p className="text-base text-muted-foreground font-sans mb-8">
          A few quick things to make the most of your session:
        </p>

        <ul className="space-y-6">
          {PREP_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.li
                key={point.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">{point.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">{point.text}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      {/* Contact + return */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="max-w-3xl mx-auto bg-muted/30 border border-border rounded-2xl p-6 md:p-8 mb-10"
      >
        <h3 className="font-display font-semibold text-foreground text-lg mb-3">Need to reach us before the class?</h3>
        <p className="text-sm text-muted-foreground font-sans mb-5">
          If you need to reschedule or have a question, our team is one message away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+918793245997"
            className="inline-flex items-center gap-2 text-foreground font-sans font-medium hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            +91 87932 45997
          </a>
          <a
            href="mailto:hello@phonicsworld.in"
            className="inline-flex items-center gap-2 text-foreground font-sans font-medium hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            hello@phonicsworld.in
          </a>
        </div>
      </motion.div>

      <div className="text-center">
        <Link href="/">
          <Button variant="outline" className="rounded-full font-sans">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
