import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 px-4">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sahu Ajith. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/ajith-sahu1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="mailto:ajith@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#"
          className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
        >
          <ArrowUp size={16} className="text-muted-foreground" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
