"use client"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Link from "next/link"
import type { ProjectItemType } from "./projects-list"

export function ProjectHeader({ project }: { project: ProjectItemType }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 py-[14px] rounded-sm mx-1 sm:mx-0 cursor-pointer">
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

      <div className="flex items-center gap-4 sm:gap-6 text-muted-foreground">
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
  )
}
