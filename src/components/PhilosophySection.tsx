import { motion } from "framer-motion";
import Button from "./ui/Button";

interface PhilosophySectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  id?: string;
  className?: string;
}

export default function PhilosophySection({
  title = "Corte preciso. Arroz perfeito. Frescor absoluto.",
  subtitle = "Cada prato conta a história de uma tradição milenar",
  ctaText = "Conheça nossa filosofia",
  onCtaClick,
  id,
  className = "",
}: PhilosophySectionProps) {
  return (
    <section id={id} className={`py-16 px-6 ${className}`}>
      <div className="container mx-auto">
        <motion.div
          className="rounded-2xl bg-gradient-to-b from-[#1f2328] to-[#1a1d21] border border-border p-10 md:p-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-marcellus text-3xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="font-inter text-base md:text-lg text-muted-foreground mb-8">
            {subtitle}
          </p>

          <Button
            variant="primary"
            size="md"
            onClick={onCtaClick}
            className="mx-auto"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
