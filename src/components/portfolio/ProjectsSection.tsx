import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PROJECTS } from "@/lib/constants";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Space_Grotesk']">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent transition-all duration-300"
             initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="rounded-lg text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-1" /> Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="rounded-full" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={14} className="mr-1" /> GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
