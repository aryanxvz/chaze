import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { BriefcaseBusinessIcon, CodeXmlIcon, DraftingCompassIcon, GraduationCapIcon } from "lucide-react";
import { ExperienceCollapsible } from "@/components/ui/collapsible";
import { ExperienceHeader } from "./work-experience-header";

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

function ExperienceItem({experience}: {experience: ExperienceItemType}) {
  const firstPosition = experience.positions[0];
  
  return (
    <ExperienceCollapsible defaultOpen={firstPosition?.isExpanded}>
      <ExperienceHeader experience={experience} firstPosition={firstPosition} />
      <ExperienceContent positions={experience.positions} />
    </ExperienceCollapsible>
  )
}

function ExperienceContent({positions}: {positions: ExperiencePositionItemType[]}) {
  return (
    <div className="px-2 sm:px-4 pt-2 space-y-4 text-[15px] sm:text-base animate-fadeIn selection:text-white selection:bg-neutral-800 dark:selection:text-black dark:selection:bg-neutral-200 transition-all">
      {positions.map((position) => (
        <ExperiencePositionItem key={position.id} position={position} />
      ))}
    </div>
  )
}

function ExperiencePositionItem({position}: {position: ExperiencePositionItemType}) {
  return (
    <div>
      {position.description && (
        <Prose className="mb-2">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="my-2">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-4 sm:pl-5 space-y-1 my-2">{children}</ul>,
              li: ({ children }) => <li className="my-1">{children}</li>,
            }}>
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
