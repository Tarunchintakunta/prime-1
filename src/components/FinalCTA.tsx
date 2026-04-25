import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 px-8 md:px-28 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_92%_50%/0.15),transparent_60%)] pointer-events-none" />

      <div className="relative">
        <h2 className="text-5xl md:text-6xl font-medium tracking-[-1.5px] mb-4">
          Start learning what's{" "}
          <span className="font-serif italic font-normal">next</span>.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Free for 7 days. No credit card. Cancel anytime.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-foreground text-background rounded-full px-10 py-4 text-base font-semibold"
        >
          Get Started Free
        </motion.button>
      </div>
    </section>
  );
}
