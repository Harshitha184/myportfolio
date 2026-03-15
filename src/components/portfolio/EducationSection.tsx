import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EDUCATION } from "@/lib/constants";

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Space_Grotesk']">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="relative border-l-2 border-accent/20 pl-8 space-y-10">
          {EDUCATION.map((edu, i) => (
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
                  <GraduationCap size={16} />
                  <span className="text-xs font-medium uppercase tracking-wider">
                    {edu.year}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                {edu.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
