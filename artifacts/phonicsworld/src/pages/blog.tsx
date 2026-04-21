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
    document.title = "Blog — PhonicsWorld";
  }, []);

  const posts = [
    {
      title: "5 Fun Ways to Practice Sight Words at Home",
      excerpt: "Make sight word practice feel like playtime with these easy, equipment-free games you can play in the living room.",
      category: "Reading Tips",
      date: "Oct 12, 2023",
      image: animalsImg,
      color: "bg-primary/20",
      borderColor: "border-primary"
    },
    {
      title: "Why 'C' and 'K' Sound The Same: Explained for Kids",
      excerpt: "The cat/kite confusion is real! Here is how we explain the C/K rule to young learners without overwhelming them.",
      category: "Phonics 101",
      date: "Oct 05, 2023",
      image: alphabetImg,
      color: "bg-secondary/20",
      borderColor: "border-secondary"
    },
    {
      title: "How to Build a Cozy Reading Nook",
      excerpt: "Environment matters! Tips for creating a distraction-free, inviting space that encourages independent reading.",
      category: "Parent Corner",
      date: "Sep 28, 2023",
      image: classImg,
      color: "bg-accent/20",
      borderColor: "border-accent"
    },
    {
      title: "The Magic E Rule Made Simple",
      excerpt: "How the silent 'e' at the end of a word changes the vowel sound. Includes our favorite Magic E song!",
      category: "Phonics 101",
      date: "Sep 15, 2023",
      image: childPencilImg,
      color: "bg-green-100",
      borderColor: "border-green-500"
    },
    {
      title: "Signs Your Child is Ready to Read",
      excerpt: "Not sure if they are ready for phonics? Look for these 4 developmental milestones in your preschooler.",
      category: "Reading Tips",
      date: "Sep 02, 2023",
      image: animalsImg,
      color: "bg-purple-100",
      borderColor: "border-purple-500"
    },
    {
      title: "Choosing the Right Beginner Books",
      excerpt: "Not all 'Level 1' books are actually decodable. Here is how to pick books that match your child's phonics level.",
      category: "Parent Corner",
      date: "Aug 20, 2023",
      image: alphabetImg,
      color: "bg-orange-100",
      borderColor: "border-orange-500"
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
          Learning <span className="text-secondary">Journal</span> 📝
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground font-medium"
        >
          Tips, tricks, and expert advice to help you support your child's reading journey at home.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href="#">
              <Card className={`h-full cursor-pointer overflow-hidden rounded-3xl border-4 ${post.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group`}>
                <div className="aspect-[4/3] w-full overflow-hidden border-b-4 border-inherit">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className={`w-full h-full ${post.color}`} />
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className={`px-3 py-1 border-2 ${post.borderColor} ${post.color} text-foreground font-bold rounded-full`}>
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground font-medium">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
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
