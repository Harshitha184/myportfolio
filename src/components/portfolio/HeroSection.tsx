import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background accent */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" />
    </div>

    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground mb-5 font-medium">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 font-['Space_Grotesk']">
          Hi, I'm{" "}
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {PERSONAL_INFO.tagline}
        </motion.p>
        <motion.p
          className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {PERSONAL_INFO.summary}
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
          asChild
        >
          <a href="#projects">
            View Projects <ArrowDown className="ml-1" size={16} />
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full px-8"
          asChild
        >
          <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">
            <FileText size={16} className="mr-1" /> Download Resume
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
