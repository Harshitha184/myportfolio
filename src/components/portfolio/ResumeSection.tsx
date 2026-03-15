import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EXPERIENCE, PERSONAL_INFO } from "@/lib/constants";

const ResumeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resume" className="section-padding bg-muted/40">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Space_Grotesk']">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-accent/20 pl-8 space-y-10 mb-10">
          {EXPERIENCE.map((exp, i) => (
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
                  <Briefcase size={16} />
                  <span className="text-xs font-medium uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
            asChild
          >
            <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download size={16} className="mr-2" /> Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
