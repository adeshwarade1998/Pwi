import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background relative overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}