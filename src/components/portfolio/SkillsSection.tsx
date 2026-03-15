import { motion } from "framer-motion";
import { Monitor, Server, Code2, Brain, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SKILLS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={22} />,
  Server: <Server size={22} />,
  Code2: <Code2 size={22} />,
  Brain: <Brain size={22} />,
  Wrench: <Wrench size={22} />,
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-muted/40 scroll-mt-20">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Space_Grotesk']">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  {iconMap[skill.icon]}
                </div>
                <h3 className="font-semibold text-foreground">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="rounded-lg text-xs font-medium"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
