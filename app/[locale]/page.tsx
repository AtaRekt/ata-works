import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { ContentTabs } from "@/components/tabs/content-tabs";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/language-switcher";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background py-20">
      <main className="container mx-auto px-4 max-w-5xl space-y-16">
        <LanguageSwitcher />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Tabs */}
          <ContentTabs />

          {/* Right Column - About & Skills */}
          <div className="space-y-12">
            {/* Name and About Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-muted flex-shrink-0">
                  <Image
                    src="/profile.jpg"
                    alt="Mustafa Ata ÇAĞLAYAN"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-1 flex-1">
                  <h1 className="text-2xl font-medium">Mustafa Ata ÇAĞLAYAN</h1>
                  <p className="text-muted-foreground">
                    {t('common.fullStackDev')}
                  </p>
                </div>

              </div>

              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                  {t('common.about')}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t('common.aboutText')}
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                {t('common.technologies')}
              </h2>
              {[
                {
                  title: t('skills.frontend'),
                  skills: ["Next.js", "React", "Tailwind", "TypeScript", "HTML", "CSS"],
                },
                {
                  title: t('skills.backend'),
                  skills: ["Node.js", "PostgreSQL", "MySQL", "MongoDB", "Redis", "PHP"],
                },
                {
                  title: t('skills.tools'),
                  skills: ["Docker", "Git", "CI/CD", "AWS", "LLMs"],
                },
              ].map((category) => (
                <div key={category.title} className="space-y-2">
                  <h3 className="text-sm font-medium">{category.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-normal text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </main>
    </div>
  );
}
