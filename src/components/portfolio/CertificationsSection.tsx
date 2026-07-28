import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CERTIFICATIONS } from "@/lib/constants";

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Space_Grotesk']">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="relative border-l-2 border-accent/20 pl-8 space-y-10">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
                <div className="flex items-center gap-2 text-accent mb-1">
                  <Award size={16} />
                </div>
                <h3 className="font-semibold text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
