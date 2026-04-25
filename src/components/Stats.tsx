import { motion } from "framer-motion";

const stats = [
  { value: "500K+", label: "Active learners" },
  { value: "12,000+", label: "Courses" },
  { value: "800+", label: "Expert instructors" },
  { value: "94%", label: "Completion rate" },
];

const logos = [
  "Stripe",
  "Notion",
  "Figma",
  "Vercel",
  "Linear",
  "GitHub",
  "Shopify",
  "Airbnb",
];

export function Stats() {
  return (
    <section className="py-16 px-8 md:px-28 border-t border-border/40">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mb-20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-5xl font-medium tracking-tight">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Trusted by teams at
        </p>
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--background)), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{
              background:
                "linear-gradient(270deg, hsl(var(--background)), transparent)",
            }}
          />
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex-shrink-0 px-10 flex items-center justify-center text-2xl font-semibold tracking-tight text-muted-foreground/70 grayscale opacity-60 hover:opacity-100 transition-opacity"
                style={{ minWidth: "180px" }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
