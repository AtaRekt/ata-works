import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-start gap-6">
          <a
            href="https://github.com/AtaRekt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-ata-%C3%A7-26851119a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/hepenyukarioglm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/mustafaata187"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
  );
}