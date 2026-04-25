import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  monthly: string;
  annual: string;
  unit?: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  ctaSolid?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    monthly: "AED 0",
    annual: "AED 0",
    unit: "forever",
    tagline: "For curious learners",
    features: [
      "200+ free courses",
      "Community access",
      "Mobile app",
      "Limited downloads",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    monthly: "AED 109",
    annual: "AED 69",
    unit: "/mo",
    tagline: "For serious skill-builders",
    features: [
      "Everything in Starter",
      "12,000+ courses",
      "Verified certificates",
      "Offline downloads",
      "2 mentor calls/mo",
    ],
    cta: "Go Pro",
    highlight: true,
    ctaSolid: true,
  },
  {
    name: "Teams",
    monthly: "AED 219",
    annual: "AED 179",
    unit: "/user/mo",
    tagline: "For growing companies",
    features: [
      "Everything in Pro",
      "Admin dashboard",
      "Team analytics",
      "SSO & SAML",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 px-8 md:px-28 bg-muted/30">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-1px] mb-4">
          Simple pricing.{" "}
          <span className="font-serif italic font-normal">Serious</span>{" "}
          outcomes.
        </h2>
        <p className="text-lg text-muted-foreground">
          Start free. Go pro when you're ready.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="liquid-glass rounded-full p-1 flex items-center gap-1 relative">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              !annual
                ? "bg-foreground text-background"
                : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              annual ? "bg-foreground text-background" : "text-muted-foreground"
            }`}
          >
            Annual
            <span className="bg-accent text-accent-foreground text-[10px] font-semibold px-1.5 py-0.5 rounded">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative bg-card rounded-2xl p-8 ${
              t.highlight ? "border-2 border-accent" : "border border-border"
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 right-6 bg-accent text-background text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t.tagline}</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-medium tracking-tight">
                {annual ? t.annual : t.monthly}
              </span>
              {t.unit && (
                <span className="text-sm text-muted-foreground">{t.unit}</span>
              )}
            </div>
            {t.name !== "Starter" && (
              <p className="text-xs text-muted-foreground mb-6">
                {annual ? "Billed annually" : "Billed monthly"}
              </p>
            )}
            {t.name === "Starter" && <div className="mb-6" />}

            <button
              className={`w-full rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-90 mb-8 ${
                t.ctaSolid
                  ? "bg-foreground text-background"
                  : "border border-border text-foreground hover:bg-white/5"
              }`}
            >
              {t.cta}
            </button>

            <ul className="space-y-3">
              {t.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
