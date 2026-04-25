import { motion } from "framer-motion";
import {
  Award,
  Wrench,
  Infinity as InfinityIcon,
  BadgeCheck,
  Smartphone,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Instructors",
    body: "Learn from practitioners working at Google, Meta, Stripe, and top startups.",
  },
  {
    icon: Wrench,
    title: "Hands-on Projects",
    body: "Build a real portfolio with guided projects you can show off to employers.",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime Access",
    body: "Buy once, learn forever. Course updates included at no extra cost.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Certificates",
    body: "Add industry-recognized credentials to your LinkedIn and resume.",
  },
  {
    icon: Smartphone,
    title: "Mobile + Offline",
    body: "Download lessons and learn anywhere, even without internet.",
  },
  {
    icon: Users,
    title: "Community & Mentors",
    body: "Get unstuck fast with active forums and 1:1 mentor calls.",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 md:px-28">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-1px] mb-4">
        Built for{" "}
        <span className="font-serif italic font-normal">real</span> learning.
      </h2>
      <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
        Not just videos. A complete system for skill mastery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-14">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
