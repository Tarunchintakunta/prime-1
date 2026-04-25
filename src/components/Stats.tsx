import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

type Stat = {
  value: number;
  format: (n: number) => string;
  label: string;
};

const stats: Stat[] = [
  {
    value: 500,
    format: (n) => `${Math.round(n)}K+`,
    label: "Active learners",
  },
  {
    value: 12000,
    format: (n) => `${Math.round(n).toLocaleString("en-US")}+`,
    label: "Courses",
  },
  {
    value: 800,
    format: (n) => `${Math.round(n)}+`,
    label: "Expert instructors",
  },
  {
    value: 94,
    format: (n) => `${Math.round(n)}%`,
    label: "Completion rate",
  },
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

function CountUp({
  to,
  format,
  inView,
  delay = 0,
}: {
  to: number;
  format: (n: number) => string;
  inView: boolean;
  delay?: number;
}) {
  const mv = useMotionValue(0);
  const [text, setText] = useState(format(0));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setText(format(latest)),
    });
    return controls.stop;
  }, [inView, to, mv, format, delay]);

  return <span>{text}</span>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 px-6 sm:px-8 md:px-28 border-t border-border/40">
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mb-16 sm:mb-20"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-4xl sm:text-5xl font-medium tracking-tight tabular-nums">
              <CountUp
                to={s.value}
                format={s.format}
                inView={inView}
                delay={i * 0.1}
              />
            </div>
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
