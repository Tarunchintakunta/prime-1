import { motion } from "framer-motion";

const instructors = [
  {
    name: "Sarah Chen",
    role: "Senior Engineer @ Google",
    rating: "4.9",
    students: "82K",
    courses: "14",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    name: "Marcus Reed",
    role: "Principal DS @ Stripe",
    rating: "4.8",
    students: "61K",
    courses: "9",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Lina Okafor",
    role: "Design Lead @ Figma",
    rating: "4.9",
    students: "47K",
    courses: "11",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Dr. Aarav Mehta",
    role: "AI Researcher, Ex-OpenAI",
    rating: "4.7",
    students: "38K",
    courses: "7",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

export function Instructors() {
  return (
    <section className="py-24 px-8 md:px-28">
      <h2 className="text-4xl md:text-5xl font-medium tracking-[-1px] mb-4">
        Learn from the{" "}
        <span className="font-serif italic font-normal">best</span>.
      </h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Industry pros and master teachers building the tools you'll use
        tomorrow.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {instructors.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center bg-card border border-border rounded-2xl p-6 card-hover"
          >
            <img
              src={p.avatar}
              alt={p.name}
              loading="lazy"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-border object-cover"
            />
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{p.role}</p>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <span>⭐ {p.rating}</span>
              <span>{p.students} students</span>
              <span>{p.courses} courses</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
