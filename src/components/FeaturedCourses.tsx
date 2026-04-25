import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

type Course = {
  category: string;
  title: string;
  instructor: string;
  avatar: string;
  rating: string;
  reviews: string;
  price: string;
  thumb: string;
};

const courses: Course[] = [
  {
    category: "Web Dev",
    title: "The Complete Modern React Bootcamp 2026",
    instructor: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    rating: "4.9",
    reviews: "12,304",
    price: "AED 329",
    thumb:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    category: "Data Science",
    title: "Python for Data Science & ML Mastery",
    instructor: "Marcus Reed",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: "4.8",
    reviews: "8,921",
    price: "AED 289",
    thumb:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    category: "Design",
    title: "UI/UX Design — From Beginner to Pro",
    instructor: "Lina Okafor",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: "4.9",
    reviews: "6,540",
    price: "AED 249",
    thumb:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=80",
  },
  {
    category: "AI/ML",
    title: "Building LLM Apps with LangChain",
    instructor: "Dr. Aarav Mehta",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: "4.7",
    reviews: "4,210",
    price: "AED 369",
    thumb:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  },
  {
    category: "Business",
    title: "Product Management Fundamentals",
    instructor: "Jordan Ellis",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
    rating: "4.8",
    reviews: "5,678",
    price: "Free",
    thumb:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    category: "Marketing",
    title: "SEO Mastery: Rank #1 on Google",
    instructor: "Priya Sharma",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: "4.7",
    reviews: "9,102",
    price: "AED 219",
    thumb:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
  },
];

export function FeaturedCourses() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 md:px-28">
      <div className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
        Most Popular
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-1px] mb-4">
        Courses learners{" "}
        <span className="font-serif italic font-normal">love</span>.
      </h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Hand-picked by our team and rated 4.7+ by thousands of students.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <img
                src={c.thumb}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.onerror = null;
                  t.src = `https://picsum.photos/seed/${encodeURIComponent(
                    c.title
                  )}/800/450`;
                }}
              />
            </div>
            <div className="p-5">
              <div className="text-xs text-accent uppercase tracking-wider mb-2 font-medium">
                {c.category}
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-3 line-clamp-2 min-h-[3.5rem]">
                {c.title}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={c.avatar}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm text-muted-foreground">
                  {c.instructor}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-sm">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-medium">{c.rating}</span>
                  <span className="text-muted-foreground">({c.reviews})</span>
                </div>
                <div
                  className={`text-base font-semibold ${
                    c.price === "Free" ? "text-accent" : ""
                  }`}
                >
                  {c.price}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-accent text-base font-medium hover:gap-3 transition-all"
        >
          Browse all 12,000+ courses
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
