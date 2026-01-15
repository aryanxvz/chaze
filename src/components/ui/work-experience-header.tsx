"use client"
import Image from "next/image";
import { ChevronsDownUpIcon, ChevronsUpDownIcon, ExternalLinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { ExperienceItemType, ExperiencePositionItemType } from "./work-experience";

export function ExperienceHeader({ experience, firstPosition }: {
  experience: ExperienceItemType;
  firstPosition?: ExperiencePositionItemType;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 mx-1 sm:mx-0 cursor-pointer">
      <div className="flex size-[48px] sm:size-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent">
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

          {/* {experience.companyWebsite && (
            <a
              href={experience.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-0.5"
              aria-label={`Visit ${experience.companyName} website`}
            >
              <ExternalLinkIcon className="size-4" />
            </a>
          )} */}

          {experience.isCurrentEmployer && (
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-info" />
              <span className="sr-only">Current Employer</span>
            </span>
          )}
        </div>

        {firstPosition && (
          <>
            <h4 className="text-sm sm:text-base font-medium truncate sm:whitespace-normal">{firstPosition.title}</h4>
            <div className="flex flex-row items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              {firstPosition.employmentType && (
                <>
                  <dl>
                    <dt className="sr-only">Employment Type</dt>
                    <dd>{firstPosition.employmentType}</dd>
                  </dl>

                  <Separator className="hidden sm:block data-[orientation=vertical]:h-4" orientation="vertical"/>
                </>
              )}
              <dl>
                <dt className="sr-only">Employment Period</dt>
                <dd>{firstPosition.employmentPeriod}</dd>
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
  )
}
