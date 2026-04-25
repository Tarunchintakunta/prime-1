import { Twitter, Linkedin, Youtube, Instagram, Globe } from "lucide-react";
import { Logo } from "./Logo";

const groups = [
  {
    title: "Product",
    links: ["Courses", "Categories", "Pricing", "Mobile App", "Certificates"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog", "Contact"],
  },
  {
    title: "For",
    links: ["Students", "Instructors", "Teams", "Universities", "Enterprise"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Refund Policy"],
  },
];

const socials = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-14 sm:py-16 px-6 sm:px-8 md:px-28">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-6 md:gap-6">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Logo />
            <span className="text-xl font-bold tracking-tight">Primelearning</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-xs">
            Master skills. Shape your future.
          </p>
          <div className="flex gap-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold mb-4">{g.title}</h3>
            <ul className="space-y-2">
              {g.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 mt-12 border-t border-border/40">
        <p className="text-sm text-muted-foreground">
          © 2026 Primelearning. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-4 h-4" />
            English
          </button>
          <span className="text-xs text-muted-foreground/70 hidden md:block">
            Built for learners, by learners.
          </span>
        </div>
      </div>
    </footer>
  );
}
