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
              period: "2023 - Present",
              role: "Freelance Full Stack Developer",
              company: "Self-employed",
              location: "Istanbul, Turkey",
              description: "Building SaaS applications and MVPs for clients using modern web technologies.",
              technologies: ["Next.js", "React", "Node.js", "PostgreSQL"]
            },
            {
              period: "2022 - 2023",
              role: "Junior Developer",
              company: "Tech Company",
              location: "Remote",
              description: "Developed and maintained web applications, focusing on frontend development.",
              technologies: ["React", "TypeScript", "Tailwind"]
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
              title: "Project 1",
              description: "A SaaS platform built with Next.js and PostgreSQL",
              tags: ["Next.js", "PostgreSQL", "Tailwind"],
              link: "https://project1.com",
              image: "/project1-thumbnail.jpg"
            },
            {
              title: "Project 2",
              description: "AI-powered MVP application",
              tags: ["React", "Node.js", "Docker"],
              link: "https://project2.com",
              image: "/project2-thumbnail.jpg"
            },
            {
              title: "Project 3",
              description: "Full-stack web application",
              tags: ["TypeScript", "MongoDB", "AWS"],
              link: "https://project3.com",
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
              <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
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