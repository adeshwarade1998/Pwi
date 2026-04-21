import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import contactImg from "@/assets/images/contact.png"; // existing

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — PhonicsWorld";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch within 24 hours.", {
      style: { backgroundColor: "var(--color-primary)", color: "var(--color-foreground)", border: "2px solid var(--color-foreground)", borderRadius: "1rem", fontSize: "1.1rem", fontFamily: "var(--font-display)" }
    });
  };

  return (
    <div className="w-full pt-12 pb-24 px-4 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6"
        >
          Say <span className="text-secondary">Hello!</span> 👋
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground font-medium"
        >
          Have questions about our classes? Want to book a free demo? We're all ears and ready to chat!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-4 border-sky-200">
            <h2 className="text-3xl font-display font-bold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-display text-foreground">Your Name</Label>
                <Input id="name" required placeholder="Jane Doe" className="h-14 rounded-2xl border-2 border-muted bg-muted/50 focus-visible:ring-primary focus-visible:border-primary text-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-display text-foreground">Email Address</Label>
                  <Input id="email" type="email" required placeholder="jane@example.com" className="h-14 rounded-2xl border-2 border-muted bg-muted/50 focus-visible:ring-primary focus-visible:border-primary text-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg font-display text-foreground">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 8900" className="h-14 rounded-2xl border-2 border-muted bg-muted/50 focus-visible:ring-primary focus-visible:border-primary text-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="childAge" className="text-lg font-display text-foreground">Child's Age</Label>
                <select id="childAge" className="flex h-14 w-full items-center justify-between rounded-2xl border-2 border-muted bg-muted/50 px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select Age...</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years</option>
                  <option value="6">6 years</option>
                  <option value="7">7 years</option>
                  <option value="8+">8+ years</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-display text-foreground">Your Message</Label>
                <Textarea id="message" required placeholder="How can we help you?" className="min-h-[120px] rounded-2xl border-2 border-muted bg-muted/50 focus-visible:ring-primary focus-visible:border-primary text-lg resize-none p-4" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-xl py-8 shadow-md hover:translate-y-1 transition-all flex items-center justify-center gap-2">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-8"
        >
          <div className="bg-sky-100 rounded-3xl p-8 border-4 border-sky-200">
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Contact Details</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-xl font-medium text-foreground">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-xl font-medium text-foreground">hello@phonicsworld.in</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-xl font-medium text-foreground">New Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>
          
          <img src={contactImg} alt="Friendly owl illustration" className="w-full max-w-sm mx-auto rounded-3xl rotate-3 hover:-rotate-3 transition-transform duration-500 shadow-xl border-8 border-white" />
        </motion.div>
      </div>
    </div>
  );
}
