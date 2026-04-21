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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <img src={logo} alt="PhonicsWorld Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-muted-foreground hover:text-foreground transition-colors",
                location === link.href && "text-foreground font-semibold"
              )}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute -bottom-[21px] left-0 w-full h-[2px] bg-primary rounded-t-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-6 shadow-sm transition-all"
            asChild
          >
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground h-10 w-10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l">
            <div className="flex flex-col h-full gap-8 py-6">
              <Link href="/" className="flex items-center gap-2">
                <img src={logo} alt="PhonicsWorld Logo" className="h-8 w-auto object-contain" />
              </Link>
              <nav className="flex flex-col gap-4 font-sans text-lg font-medium">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-muted-foreground hover:text-foreground transition-colors py-2",
                      location === link.href && "text-foreground font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Button 
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium py-6 shadow-sm transition-all"
                  asChild
                >
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
