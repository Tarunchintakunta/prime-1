import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Lock,
  CheckCircle2,
  Star,
  ChevronDown,
  Sparkles,
  Award,
} from "lucide-react";

export function Hero() {
  return (
    <>
      <HeroIntro />
      <HeroPreview />
    </>
  );
}

function HeroIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center mt-16 md:mt-20 px-4 pb-12"
    >
      <BackgroundGlow />
      <FloatingAccents />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="liquid-glass px-3 py-2 rounded-lg mb-6 inline-flex items-center gap-2"
        >
          <span className="bg-white text-black rounded-md text-sm font-medium px-2 py-0.5">
            New
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            5,000+ new courses added this month
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl tracking-[-2px] font-medium leading-tight md:leading-[1.15] mb-3"
        >
          Master New Skills.
          <br />
          Shape Your{" "}
          <span className="font-serif italic font-normal">Future</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "hsl(var(--hero-subtitle))" }}
          className="text-lg font-normal leading-6 opacity-90 mb-8 max-w-2xl"
        >
          Primelearning gives you on-demand courses, expert mentors,
          <br className="hidden md:block" />
          and hands-on projects — so you ship faster and stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-full px-8 py-3.5 text-base font-medium"
          >
            Start Learning Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="border border-border rounded-full px-8 py-3.5 text-base font-medium hover:bg-white/5 transition-colors"
          >
            Browse Courses
          </motion.button>
        </motion.div>

        <SocialProof />
      </motion.div>

      <ScrollCue />
    </section>
  );
}

function HeroPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const previewY = useTransform(scrollYProgress, [0, 1], [80, -180]);
  const previewScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.94, 1, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen overflow-hidden"
      style={{ marginLeft: "calc(-50vw + 50%)" }}
    >
      <div className="relative aspect-video">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-background/40" />

        <motion.div
          style={{ y: previewY, scale: previewScale, mixBlendMode: "luminosity" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <CoursePlayerMockup />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background z-30" />
      </div>
    </section>
  );
}

function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(38_92%_50%/0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </>
  );
}

function FloatingAccents() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden lg:flex absolute left-[6%] top-[28%] z-0"
      >
        <div className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 -rotate-[6deg]">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
            <span className="relative block w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="text-left">
            <div className="text-xs text-muted-foreground">Right now</div>
            <div className="text-sm font-medium">
              <span className="tabular-nums">2,847</span> learning live
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden lg:flex absolute right-[6%] top-[26%] z-0"
      >
        <div className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 rotate-[5deg]">
          <div className="w-9 h-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-xs text-muted-foreground">Earned today</div>
            <div className="text-sm font-medium">
              <span className="tabular-nums">312</span> certificates
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="hidden lg:flex absolute left-[10%] bottom-[18%] z-0"
      >
        <div className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 rotate-[4deg]">
          <Sparkles className="w-5 h-5 text-accent" />
          <div className="text-sm font-medium">AI-guided learning paths</div>
        </div>
      </motion.div>
    </>
  );
}

function SocialProof() {
  const avatars = [
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
          ))}
        </div>
        <div className="text-sm text-muted-foreground text-left">
          Joined by{" "}
          <span className="text-foreground font-medium">500K+ learners</span>
        </div>
      </div>

      <div className="hidden sm:block w-px h-6 bg-border" />

      <div className="flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
        <span className="text-sm">
          <span className="font-medium">4.9</span>
          <span className="text-muted-foreground"> · 28K reviews</span>
        </span>
      </div>
    </motion.div>
  );
}

function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
    >
      <span className="text-[11px] uppercase tracking-[0.18em]">
        See it in action
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="w-7 h-7 rounded-full border border-border flex items-center justify-center"
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
}

function CoursePlayerMockup() {
  return (
    <div className="max-w-5xl w-[90%] rounded-2xl bg-card/95 border border-border shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-4 h-7 rounded-md bg-background/80 border border-border/50 flex items-center justify-center text-xs text-muted-foreground">
          primelearning.app/courses/react-bootcamp
        </div>
      </div>
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-12 md:col-span-8 p-3">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-border/60">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
                <Play className="w-6 h-6 text-black fill-black ml-1" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-white/90 font-medium">12:47</span>
                <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full w-2/5 bg-[hsl(38_92%_50%)]" />
                </div>
                <span className="text-xs text-white/90 font-medium">31:20</span>
              </div>
            </div>
          </div>
          <div className="mt-3 px-1">
            <div className="text-xs text-[hsl(38_92%_60%)] uppercase tracking-wider font-medium mb-1">
              Module 03 • Lesson 4
            </div>
            <div className="text-base font-semibold text-white">
              Building Your First Custom Hook
            </div>
          </div>
        </div>
        <div className="hidden md:block col-span-4 border-l border-border bg-muted/20 p-3 space-y-1.5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium px-2 mb-2">
            Lessons
          </div>
          {[
            { title: "Intro to React 2026", done: true, time: "08:14" },
            { title: "JSX, Components, Props", done: true, time: "21:02" },
            { title: "useState & Reactivity", done: true, time: "18:47" },
            { title: "Custom Hooks", done: false, time: "31:20", active: true },
            { title: "Server Components", done: false, time: "26:41" },
            { title: "Suspense & Streaming", done: false, time: "19:08" },
          ].map((l, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2 py-2 rounded-md text-xs ${
                l.active
                  ? "bg-[hsl(38_92%_50%/0.12)] text-white"
                  : "text-muted-foreground"
              }`}
            >
              {l.done ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(38_92%_55%)] flex-shrink-0" />
              ) : (
                <Lock className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
              )}
              <span className="flex-1 truncate">{l.title}</span>
              <span className="opacity-70">{l.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
