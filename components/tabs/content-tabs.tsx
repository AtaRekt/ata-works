"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('experience');
  const t = useTranslations();

  // Tarih formatlaması için yardımcı fonksiyon
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split(' ');
    const monthKey = month.toLowerCase();
    return `${year} ${t(`months.${monthKey}`)}`;
  };

  // Tarih stringini parçalama fonksiyonu
  const formatPeriod = (period: string) => {
    const [start, end] = period.split(' - ');
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const formatLocation = (location: string) => {
    const [type, place] = location.split(' - ');
    const [city, country] = place.split(', ');

    const jobType = type.toLowerCase();
    const cityKey = city.toLowerCase();
    const countryKey = country.toLowerCase() === 'turkey' ? 'turkey' : 'usa';

    return `${t(`jobTypes.${jobType}`)} - ${t(`cities.${cityKey}`)}, ${t(`countries.${countryKey}`)}`;
  };

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex gap-2">
        <Button
          onClick={() => setActiveTab('experience')}
          variant="ghost"
          className={`px-4 h-9 ${activeTab === 'experience'
            ? 'bg-secondary text-foreground'
            : 'text-muted-foreground hover:text-foreground'
            }`}
        >
          {t('tabs.experience')}
        </Button>
        <Button
          onClick={() => setActiveTab('projects')}
          variant="ghost"
          className={`px-4 h-9 ${activeTab === 'projects'
            ? 'bg-secondary text-foreground'
            : 'text-muted-foreground hover:text-foreground'
            }`}
        >
          {t('tabs.projects')}
        </Button>
      </div>

      {/* Tab Content */}
      {activeTab === 'experience' ? (
        <div className="space-y-6">
          {/* Experience Items */}
          {[
            {
              period: "2024 Oct - 2025 Mar",
              role: "Full Stack Developer",
              company: "Dcloud.com.tr",
              link: "https://dcloud.com.tr",
              location: "Fulltime - Istanbul, Turkey",
              descriptionKey: "dcloud",
              technologies: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "HTML", "CSS"]
            },
            {
              period: "2024 Jun - 2024 Oct",
              role: "Full Stack Developer",
              company: "Bandsoffads.ai",
              link: "https://bandsoffads.ai",
              location: "Remote - California, USA",
              descriptionKey: "bandsoffads",
              technologies: ["Next.js", "React", "Express.js", "Node.js", "PostgreSQL", "Tailwind CSS"]
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-muted hover:border-muted-foreground/20 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{experience.role}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <a href={experience.link} target="_blank" rel="noopener noreferrer" className="hover:text-foreground/80 underline transition-colors">
                      {experience.company}
                    </a>
                    <p>{formatLocation(experience.location)}</p>
                  </div>
                </div>

                <span className="text-sm text-muted-foreground">
                  {formatPeriod(experience.period)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {t(`experiences.${experience.descriptionKey}.description`)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-normal text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Project Cards */}
          {[
            {
              titleKey: "snapugc",
              link: "https://snapugc.com",
              tags: ["Next.js", "React", "Express.js", "Node.js", "PostgreSQL", "Tailwind CSS", "OpenAI"]
            },
            {
              titleKey: "authTemplate",
              link: "https://github.com/AtaRekt/nextjs-lucia-postgres-shadcn-template",
              tags: ["Next.js", "React", "PostgreSQL", "Shadcn UI", "Lucia Auth", "Tailwind CSS"]
            },
            {
              titleKey: "ocrApp",
              link: "https://github.com/AtaRekt/ocr-app",
              tags: ["React Native", "Expo", "Nativewind", "OpenAI", "Typescript"]
            }
          ].map((project) => (
            <a
              key={project.titleKey}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 rounded-lg border border-muted hover:border-muted-foreground/20 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium group-hover:underline transition-all group-hover:text-foreground/80 truncate">
                    {t(`projects.${project.titleKey}.title`)}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ease-out flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {t(`projects.${project.titleKey}.description`)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-normal text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
} 