import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { Categories } from "./components/Categories";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Instructors } from "./components/Instructors";
import { Testimonial } from "./components/Testimonial";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedCourses />
        <Categories />
        <Features />
        <HowItWorks />
        <Instructors />
        <Testimonial />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
