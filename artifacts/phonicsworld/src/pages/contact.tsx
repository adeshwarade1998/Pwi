import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Confetti } from "@/components/confetti";

export default function Contact() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact — PhonicsWorld";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setShowConfetti(true);
      setIsSubmitting(false);
      toast.success("Message Sent Successfully", {
        description: "Thank you for reaching out. Our team will contact you within 1 business day.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <div className="w-full pt-16 pb-24 px-4 container mx-auto relative bg-background">
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground font-sans"
        >
          Inquire about our curriculum, request pricing, or book a complimentary assessment class for your child.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="bg-muted/30 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-display font-semibold mb-6 text-foreground">Direct Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans font-medium text-muted-foreground">Phone</p>
                  <a href="tel:+918793245997" className="text-base font-sans text-foreground hover:text-primary transition-colors">+91 87932 45997</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans font-medium text-muted-foreground">Email</p>
                  <a href="mailto:hello@phonicsworld.in" className="text-base font-sans text-foreground hover:text-primary transition-colors">hello@phonicsworld.in</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-sans font-medium text-muted-foreground">Location</p>
                  <p className="text-base font-sans text-foreground">New Delhi, India</p>
                  <p className="text-xs font-sans text-muted-foreground mt-1">Global online classes available</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="font-sans font-medium text-foreground">Parent/Guardian Name</Label>
                  <Input id="parentName" required placeholder="John Smith" className="font-sans rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans font-medium text-foreground">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="font-sans rounded-lg" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-sans font-medium text-foreground">Phone Number</Label>
                  <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="font-sans rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childAge" className="font-sans font-medium text-foreground">Child's Age</Label>
                  <select id="childAge" required className="flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm font-sans ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select Age</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years</option>
                    <option value="6">6 years</option>
                    <option value="7">7 years</option>
                    <option value="8">8 years</option>
                    <option value="over8">Over 8 years</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiryType" className="font-sans font-medium text-foreground">Inquiry Type</Label>
                <select id="inquiryType" required className="flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm font-sans ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <option value="assessment">Book Free Assessment Class</option>
                  <option value="pricing">Request Pricing Information</option>
                  <option value="curriculum">Curriculum Questions</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-sans font-medium text-foreground">Message</Label>
                <Textarea id="message" placeholder="Please provide any details about your child's current reading level..." className="min-h-[120px] font-sans rounded-lg resize-y" />
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-white font-sans font-medium px-8 transition-all flex items-center justify-center gap-2">
                <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                {!isSubmitting && <Send className="w-4 h-4" />}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
