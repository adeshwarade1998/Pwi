import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@assets/PW_Logo_02_1776770575482.png";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-b-sky-200/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
          <img src={logo} alt="PhonicsWorld Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-display text-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-foreground hover:text-primary transition-colors",
                location === link.href && "text-primary font-semibold"
              )}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 shadow-[0_4px_0_0_rgba(200,140,0,1)] hover:shadow-[0_2px_0_0_rgba(200,140,0,1)] hover:translate-y-[2px] transition-all"
            asChild
          >
            <Link href="/contact">Book Free Demo Class</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary/20 rounded-full h-12 w-12">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-4 border-l-secondary">
            <div className="flex flex-col h-full gap-8 py-8">
              <Link href="/" className="flex items-center gap-2">
                <img src={logo} alt="PhonicsWorld Logo" className="h-10 w-auto object-contain" />
              </Link>
              <nav className="flex flex-col gap-6 font-display text-2xl">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-foreground hover:text-primary transition-colors",
                      location === link.href && "text-primary font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Button 
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-xl py-8 shadow-[0_4px_0_0_rgba(200,140,0,1)] hover:shadow-[0_2px_0_0_rgba(200,140,0,1)] hover:translate-y-[2px] transition-all"
                  asChild
                >
                  <Link href="/contact">Book Free Demo</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}