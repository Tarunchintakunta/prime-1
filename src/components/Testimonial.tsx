import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const QUOTE =
  "Primelearning completely changed my career. Six months in, I'd shipped three real projects, earned two certificates, and landed a frontend role at a YC-backed startup. The mentor calls alone were worth the price — Primelearning is the only platform that actually feels like school plus a coach plus a community.";

export function Testimonial() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const words = QUOTE.split(" ");

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-28 max-w-3xl mx-auto flex flex-col items-start gap-8 sm:gap-10"
    >
      <QuoteMark />

      <p className="text-2xl sm:text-3xl md:text-5xl font-medium leading-[1.25] md:leading-[1.2] flex flex-wrap">
        {words.map((word, i) => (
          <Word
            key={i}
            word={word}
            range={[i / words.length, (i + 1) / words.length]}
            progress={scrollYProgress}
          />
        ))}
        <span className="text-muted-foreground ml-2">”</span>
      </p>

      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
          alt="Aiden Park"
          className="w-14 h-14 rounded-full border-[3px] border-foreground object-cover"
        />
        <div>
          <div className="text-base font-semibold">Aiden Park</div>
          <div className="text-sm text-muted-foreground">
            Frontend Engineer, Vercel
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, [
    "hsl(0 0% 35%)",
    "hsl(0 0% 100%)",
  ]);
  return (
    <motion.span style={{ opacity, color }} className="mr-[0.3em]">
      {word}
    </motion.span>
  );
}

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 56 40"
      className="w-14 h-10 object-contain text-foreground/80"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 40V24C0 10.745 10.745 0 24 0v8c-8.837 0-16 7.163-16 16h8c4.418 0 8 3.582 8 8s-3.582 8-8 8H0zm32 0V24C32 10.745 42.745 0 56 0v8c-8.837 0-16 7.163-16 16h8c4.418 0 8 3.582 8 8s-3.582 8-8 8H32z" />
    </svg>
  );
}
