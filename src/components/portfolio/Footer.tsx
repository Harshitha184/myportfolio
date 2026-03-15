import { Github, Linkedin, Twitter } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

const socials = [
  { icon: <Github size={20} />, href: PERSONAL_INFO.social.github, label: "GitHub" },
  { icon: <Linkedin size={20} />, href: PERSONAL_INFO.social.linkedin, label: "LinkedIn" },
  { icon: <Twitter size={20} />, href: PERSONAL_INFO.social.twitter, label: "Twitter" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4 flex flex-col items-center gap-6">
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Built by {PERSONAL_INFO.name}
      </p>
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
