"use client"
import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIconType;
  skills?: string[];
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyLogo?: string;
  companyWebsite?: string;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
};

export function WorkExperience({className, experiences}: {className?: string; experiences: ExperienceItemType[]}) {
  return (
    <div className={cn("pt-0 sm:pt-2", className)}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  )
}

export function ExperienceItem({experience}: {experience: ExperienceItemType}) {
  return (
    <Collapsible defaultOpen={experience.positions[0]?.isExpanded} asChild>
      <div className="mt-4 py-3 sm:mt-4 hover:bg-neutral-200/30 dark:hover:bg-neutral-900 rounded-lg transition-colors duration-200">
        <CollapsibleTrigger className="group/experience not-prose w-full text-left select-none">
          <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4">
            <div className="flex size-[48px] sm:size-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent" aria-hidden>
              {experience.companyLogo ? (
                <Image className="object-cover"
                  src={experience.companyLogo} alt={experience.companyName}
                  width={60} height={60}
                />
              ) : (
                <span className="flex size-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg leading-snug sm:font-semibold font-medium">
                  {experience.companyName}
                </h3>

                {experience.companyWebsite && (
                  <a href={experience.companyWebsite} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-0.5" aria-label={`Visit ${experience.companyName} website`}>
                    <ExternalLinkIcon className="size-4" />
                  </a>
                )}

                {experience.isCurrentEmployer && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-info" />
                    <span className="sr-only">Current Employer</span>
                  </span>
                )}
              </div>

              {experience.positions[0] && (
                <>
                  <h4 className="text-sm sm:text-base font-medium truncate sm:whitespace-normal">
                    {experience.positions[0].title}
                  </h4>

                  <div className="flex flex-row items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    {experience.positions[0].employmentType && (
                      <>
                        <dl>
                          <dt className="sr-only">Employment Type</dt>
                          <dd>{experience.positions[0].employmentType}</dd>
                        </dl>

                        <Separator className="hidden sm:block data-[orientation=vertical]:h-4" orientation="vertical"/>
                      </>
                    )}

                    <dl>
                      <dt className="sr-only">Employment Period</dt>
                      <dd>{experience.positions[0].employmentPeriod}</dd>
                    </dl>
                  </div>
                </>
              )}
            </div>

            <div className="shrink-0 text-muted-foreground [&_svg]:size-4.5 sm:[&_svg]:size-5 sm:pr-4 relative" aria-hidden>
              <ChevronsDownUpIcon className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 scale-50 group-data-[state=open]/experience:opacity-100 group-data-[state=open]/experience:scale-100" />
              <ChevronsUpDownIcon className="transition-all duration-500 ease-in-out opacity-100 scale-100 group-data-[state=open]/experience:opacity-0 group-data-[state=open]/experience:scale-50" />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden transition-all duration-500 ease-in-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="px-2 sm:px-4 pt-2 space-y-4 text-sm sm:text-base animate-fadeIn">
            {experience.positions.map((position) => (
              <ExperiencePositionItem key={position.id} position={position} />
            ))}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

export function ExperiencePositionItem({position}: {position: ExperiencePositionItemType}) {
  return (
    <div>
      {position.description && (
        <Prose className="mb-2">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="my-2">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-4 sm:pl-5 space-y-1 my-2">{children}</ul>,
              li: ({ children }) => <li className="my-1">{children}</li>,
            }}
          >
            {position.description}
          </ReactMarkdown>
        </Prose>
      )}

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <ul className="not-prose flex flex-wrap gap-1.5 pb-1 sm:pb-2">
          {position.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Skill>{skill}</Skill>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none text-foreground prose-zinc dark:prose-invert",
        "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-ul:list-disc prose-ul:pl-4 prose-li:my-1", className)}
      {...props}
    />
  )
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-[1px] sm:py-0.5 text-xs text-muted-foreground transition-colors hover:bg-muted cursor-default", className)}
      {...props}
    />
  )
}
