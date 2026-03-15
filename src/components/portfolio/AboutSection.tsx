import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ABOUT } from "@/lib/constants";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Space_Grotesk']">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-accent" /> Quick Highlights
              </h3>
              <ul className="space-y-3">
                {ABOUT.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
