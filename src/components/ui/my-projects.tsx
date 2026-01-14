"use client"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import React from "react"
import ReactMarkdown from "react-markdown"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"

export type ProjectItemType = {
  id: string
  name: string
  tagline?: string
  description?: string
  tech?: string[]
  links?: {
    live?: string
    github?: string
  }
}

export function ProjectsList({ projects }: { projects: ProjectItemType[] }) {
  return (
    <div className="gap-0 sm:gap-[2px] flex flex-col">
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </div>
  )
}

function ProjectRow({ project }: { project: ProjectItemType }) {
  return (
    <Collapsible>
      <div className="rounded-lg border-b hover:bg-neutral-200/30 dark:hover:bg-neutral-900 transition-colors">
        <CollapsibleTrigger className="group w-full text-left select-none">
          <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 py-4 rounded-sm">

            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-medium sm:font-semibold leading-tight">
                {project.name}
              </h3>
              {project.tagline && (
                <p className="text-sm text-muted-foreground">
                  {project.tagline}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 sm:gap-6 text-muted-foreground">
              {project.links?.live && (
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-foreground transition-colors">
                  <ExternalLinkIcon className="sm:size-4.5 size-5" />
                </Link>
              )}
              {project.links?.github && (
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-foreground transition-colors">
                  <GithubIcon className="sm:size-4.5 size-5 sm:mr-4" />
                </Link>
              )}
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="px-4 pb-4 space-y-3">
            {project.description && (
              <div className="prose prose-sm max-w-none dark:prose-invert [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="my-2">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-6 space-y-1 my-2">{children}</ul>,
                    li: ({ children }) => <li className="my-1">{children}</li>,
                  }}
                >
                  {project.description}
                </ReactMarkdown>
              </div>
            )}

            {project.tech && (
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-[1px] text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}
