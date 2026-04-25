import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    q: "Are the certificates recognized by employers?",
    a: "Yes — partner programs are built with hiring managers from Google, Stripe, Shopify and more. Certificates are verifiable and shareable on LinkedIn.",
  },
  {
    q: "Can I cancel my Pro subscription anytime?",
    a: "Absolutely. Cancel from your dashboard in two clicks. No questions asked, no fees.",
  },
  {
    q: "Do I keep access to courses I purchased?",
    a: "Forever. Individually-purchased courses are yours for life, including all future updates.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "30-day full refund on any individual course or your first month of Pro.",
  },
  {
    q: "Do you offer student or team discounts?",
    a: "Yes — 50% off Pro for verified students, and volume pricing on Teams (5+ seats).",
  },
  {
    q: "What languages are courses available in?",
    a: "English, Spanish, French, German, Portuguese, Hindi, and Japanese, with auto-generated subtitles in 25+ more.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 md:px-28 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-1px] mb-10 sm:mb-12 text-center">
        Questions?{" "}
        <span className="font-serif italic font-normal">Answered</span>.
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
