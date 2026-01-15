import React from "react"
import ReactMarkdown from "react-markdown"
import { ProjectCollapsible } from "@/components/ui/collapsible"
import { ProjectHeader } from "./project-header"

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
    <ProjectCollapsible>
      <ProjectHeader project={project} />
      <ProjectContent project={project} />
    </ProjectCollapsible>
  )
}

function ProjectContent({ project }: { project: ProjectItemType }) {
  return (
    <div className="px-[2px] sm:px-4 pb-4 space-y-3">
      {project.description && (
        <div className="prose prose-sm text-[15px] sm:text-md max-w-none dark:prose-invert [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1 selection:text-white selection:bg-neutral-800 dark:selection:text-black dark:selection:bg-neutral-200 transition-all">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="my-2">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 space-y-1 my-2">{children}</ul>,
              li: ({ children }) => <li className="my-1">{children}</li>,
            }}>
            {project.description}
          </ReactMarkdown>
        </div>
      )}

      {project.tech && (
        <div className="flex flex-wrap gap-1.5 px-1 sm:px-0">
          {project.tech.map((t) => (
            <span key={t} className="inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-[1px] text-xs text-muted-foreground selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white transition-all selection:">{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}
