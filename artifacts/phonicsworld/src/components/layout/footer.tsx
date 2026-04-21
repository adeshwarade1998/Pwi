import { Link } from "wouter";
import logo from "@assets/PW_Logo_02_1776770575482.png";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-sky-100/50 pt-20 pb-10 border-t-4 border-t-sky-200 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <img src={logo} alt="PhonicsWorld Logo" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground font-medium">
              Making your child a confident reader through fun, interactive, and joyful phonics learning!
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-secondary hover:text-foreground transition-colors shadow-sm">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors shadow-sm">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-4 font-medium">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">Phonics Courses</Link>
              </li>
              <li>
                <Link href="/results" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Learning Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">Contact Us</h3>
            <ul className="space-y-4 font-medium text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>hello@phonicsworld.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">Stay Updated!</h3>
            <p className="text-muted-foreground font-medium mb-4">
              Get fun learning tips and free resources directly in your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-background rounded-2xl h-12 border-2 border-sky-200 focus-visible:ring-secondary"
              />
              <Button className="w-full rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-display text-lg py-6 shadow-[0_4px_0_0_rgba(180,30,70,1)] hover:shadow-[0_2px_0_0_rgba(180,30,70,1)] hover:translate-y-[2px] transition-all">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-sky-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-medium text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} PhonicsWorld.in. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}