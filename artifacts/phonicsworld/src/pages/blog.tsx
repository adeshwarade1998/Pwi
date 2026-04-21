import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

import animalsImg from "@/assets/images/animals-reading.png";
import alphabetImg from "@/assets/images/alphabet-blocks.png";
import classImg from "@/assets/images/playful-classroom.png";
import childPencilImg from "@/assets/images/child-pencil.png";

export default function Blog() {
  useEffect(() => {
    document.title = "Parent Resources — PhonicsWorld";
  }, []);

  const posts = [
    {
      title: "5 Engaging Ways to Practice Sight Words at Home",
      excerpt: "Make sight word practice effective with these simple activities you can integrate into your daily routine.",
      category: "Reading Tips",
      date: "Oct 12, 2023",
      image: animalsImg,
    },
    {
      title: "Understanding the 'C' and 'K' Phonics Rule",
      excerpt: "The cat/kite confusion explained. Here is how we introduce the C/K rule to young learners clearly and systematically.",
      category: "Phonics 101",
      date: "Oct 05, 2023",
      image: alphabetImg,
    },
    {
      title: "Creating an Ideal Reading Environment",
      excerpt: "Environment matters. Tips for organizing a distraction-free, inviting space that encourages independent reading habits.",
      category: "Parent Corner",
      date: "Sep 28, 2023",
      image: classImg,
    },
    {
      title: "The 'Magic E' Concept Made Simple",
      excerpt: "How the silent 'e' at the end of a word changes the vowel sound, and how to practice this crucial decoding skill.",
      category: "Phonics 101",
      date: "Sep 15, 2023",
      image: childPencilImg,
    },
    {
      title: "Developmental Signs of Reading Readiness",
      excerpt: "Not sure if they are ready for structured phonics? Look for these key developmental milestones in your preschooler.",
      category: "Reading Tips",
      date: "Sep 02, 2023",
      image: animalsImg,
    },
    {
      title: "Selecting Appropriate Decodable Books",
      excerpt: "Not all 'Level 1' books are truly decodable. How to choose literature that matches your child's current phonics knowledge.",
      category: "Parent Corner",
      date: "Aug 20, 2023",
      image: alphabetImg,
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
          Parent Resources
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground font-sans leading-relaxed"
        >
          Expert advice, educational strategies, and practical tips to support your child's literacy development at home.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href="#">
              <Card className="h-full cursor-pointer overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 bg-white group flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-border bg-muted/10">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-muted/20" />
                  )}
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-primary/5 text-primary font-sans font-medium rounded-full">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mt-auto">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
