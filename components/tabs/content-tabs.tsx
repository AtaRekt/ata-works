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

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex gap-2">
        <Button
          onClick={() => setActiveTab('experience')}
          variant="ghost"
          className={`px-4 h-9 ${
            activeTab === 'experience'
              ? 'bg-secondary text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {t('tabs.experience')}
        </Button>
        <Button
          onClick={() => setActiveTab('projects')}
          variant="ghost"
          className={`px-4 h-9 ${
            activeTab === 'projects'
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
              location: "Fulltime - Istanbul, Turkey",
              description: "Building insurance app, business websites and hr task management systems.",
              technologies: ["Next.js", "React", "PostgreSQL", "Tailwind"]
            },
            {
              period: "2024 Jun - 2024 Oct",
              role: "Full Stack Developer",
              company: "Bandsoffads.ai",
              location: "Remote - California, USA",
              description: "Developed and maintained AI SaaS platform, focusing on AI video generation for UGC ads.",
              technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind", "OpenAI"]
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
                    <p>{experience.company}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{experience.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {experience.description}
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
              title: "SnapUGC",
              description: "AI video generation SaaS platform built with Next.js and PostgreSQL.",
              tags: ["Next.js", "PostgreSQL", "Tailwind", "OpenAI"],
              link: "https://snapugc.com",
              image: "/project1-thumbnail.jpg"
            },
            {
              title: "nextjs-lucia-postgres-shadcn-template",
              description: "A Next.js, Lucia, PostgreSQL, Shadcn UI template for authentication and authorization.",
              tags: ["Next.js", "PostgreSQL", "Shadcn UI", "Lucia"],
              link: "https://github.com/AtaRekt/nextjs-lucia-postgres-shadcn-template",
              image: "/project2-thumbnail.jpg"
            },
            {
              title: "OCR App",
              description: "A Android & IOS mobile application for OCR using LLMs.",
              tags: ["React Native", "Expo", "Nativewind", "OpenAI", "Typescript"],
              link: "https://github.com/AtaRekt/ocr-app",
              image: "/project3-thumbnail.jpg"
            },
          ].map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 rounded-lg border border-muted hover:border-muted-foreground/20 transition-colors group"
            >
              {/* <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div> */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium group-hover:text-foreground/80 truncate">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ease-out flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
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