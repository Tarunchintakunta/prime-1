import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Browse 12,000+ courses across 30+ categories. Preview lessons free.",
  },
  {
    n: "02",
    title: "Enroll",
    body: "Pick a course, a track, or go all-in with Primelearning Pro.",
  },
  {
    n: "03",
    title: "Learn & Build",
    body: "Watch lessons, ship projects, get feedback from mentors.",
  },
  {
    n: "04",
    title: "Earn & Apply",
    body: "Get your certificate, add it to LinkedIn, land the role.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-8 md:px-28 bg-muted/30">
      <h2 className="text-4xl md:text-5xl font-medium tracking-[-1px] mb-4">
        Your path to{" "}
        <span className="font-serif italic font-normal">mastery</span>.
      </h2>
      <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
        Four steps to go from curious to credentialed.
      </p>

      <div className="relative">
        <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] border-t border-dashed border-border pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-serif italic text-accent/40 mb-3 leading-none">
                {s.n}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
