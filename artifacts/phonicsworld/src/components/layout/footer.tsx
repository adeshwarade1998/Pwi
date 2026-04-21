import { Link } from "wouter";
import logo from "@assets/PW_Logo_02_1776770575482.png";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-200 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90 bg-white p-2 rounded-xl">
              <img src={logo} alt="PhonicsWorld Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              Where learning happens with patience, care, and joy. Building strong reading foundations for ages 3-8.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-accent hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-secondary hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-destructive hover:text-white transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-400 hover:text-white transition-colors">Phonics Curriculum</Link>
              </li>
              <li>
                <Link href="/results" className="text-slate-400 hover:text-white transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Parent Resources</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 font-sans text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+918793245997" className="hover:text-white transition-colors">+91 87932 45997</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>hello@phonicsworld.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-slate-400 font-sans text-sm mb-4">
              Get educational tips and resources directly in your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-lg h-10 focus-visible:ring-primary"
              />
              <Button className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white font-sans font-medium transition-all h-10">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-sans text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} PhonicsWorld.in. All rights reserved. Serving ages 3-8.
          </p>
          <div className="flex gap-6 text-xs font-sans text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
