import { motion } from "framer-motion";
import {
  Code,
  BarChart3,
  Palette,
  Briefcase,
  Megaphone,
  Brain,
  Camera,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const categories = [
  { name: "Development", icon: Code, count: "3,200" },
  { name: "Data Science", icon: BarChart3, count: "1,800" },
  { name: "Design", icon: Palette, count: "1,400" },
  { name: "Business", icon: Briefcase, count: "2,100" },
  { name: "Marketing", icon: Megaphone, count: "980" },
  { name: "AI & ML", icon: Brain, count: "720" },
  { name: "Photography", icon: Camera, count: "540" },
  { name: "Personal Dev", icon: Sparkles, count: "1,100" },
];

export function Categories() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 md:px-28 bg-muted/30">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-1px] mb-4">
        Explore by{" "}
        <span className="font-serif italic font-normal">category</span>.
      </h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        From code to creativity — find your path.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.button
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-hover cursor-pointer text-left"
            >
              <Icon className="w-8 h-8 text-accent mb-4" />
              <div className="text-base font-semibold mb-1">{c.name}</div>
              <div className="text-sm text-muted-foreground">
                {c.count} courses
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-accent text-base font-medium hover:gap-3 transition-all"
        >
          View all categories
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
