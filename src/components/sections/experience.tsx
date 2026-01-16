import { ExperienceItemType, WorkExperience } from "../ui/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "greencard",
    companyName: "Greencard Inc.",
    companyLogo: "/icons/greencard.svg",
    companyWebsite: "https://greencard.inc",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Frontend Developer",
        employmentPeriod: "04.2025 — present",
        employmentType: "Full-time",
        icon: "code",
        description: `- Pioneered frontend architecture and development for an AI immigration legal assistant, defining the technical roadmap and framework
- Engineered a scalable UI component system using Tailwind and Framer Motion, accelerating new-feature UI development time by over 40% while enforcing accessibility standards
- Optimized application performance using TanStack Query for optimistic updates and API caching, reducing state management complexity between backend and frontend and slashing load times on data-heavy views by ~35%
- Established an analytics and instrumentation layer with PostHog, surfacing friction points to enable data-driven UX decisions and improving engagement on key flows
- Developed secured file upload functionality for legal documents along with document parsing and validation`,
        skills: [
          "React",
          "Next.js",
          "Tailwind",
          "Radix UI",
          "Framer Motion",
          "Recharts",
          "TanStack Query",
          "Zustand",
          "PostgreSQL",
          "Sanity CMS",
          "OAuth 2",
          "Clerk",
          "Resend",
          "PostHog",
        ],
        isExpanded: false,
      }
    ],
    isCurrentEmployer: true,
  },
  {
    id: "skidoo",
    companyName: "Skidoo",
    companyLogo: "/icons/theskidoo.svg",
    companyWebsite: "https://theskidoo.com/",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Full-stack Developer",
        employmentPeriod: "01.2024 — 03.2025",
        employmentType: "Full-time",
        icon: "code",
        description: `- Drove full-stack development and system design for Skidoo's travel platform, directing architecture decisions across SEO, SSR strategies, page performance, and global responsiveness
- Architected a modular monorepo with Turborepo, cutting build times by ~30% and enabling efficient shared utilities across projects
- Devised a CMS content engine using Sanity, empowering non-engineering teams to autonomously update itineraries and travel content without requiring code deployments
- Implemented secured role-based access control with Clerk, reducing engineering hours spent on building and maintaining authentication by 60%
- Designed Postgres relational database schemas for core booking, itinerary, and content modules
- Deployed automated email pipelines with React email and Resend for streamlined itinerary delivery, resulting in reduced operational load`,
        skills: [
          "React",
          "Next.js",
          "Tailwind",
          "Radix UI",
          "TanStack Query",
          "PostgreSQL",
          "Sanity CMS",
          "OAuth 2",
          "Clerk",
          "Turborepo",
          "Resend",
          "Google Analytics",
        ],
        isExpanded: false,
      }
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <div className="text-3xl sm:text-4xl font-bold selection:text-white selection:bg-neutral-800 dark:selection:text-black dark:selection:bg-neutral-200 transition-all">
        <h2>Experience</h2>
      </div>
      <WorkExperience experiences={WORK_EXPERIENCE} />
    </section>
  )
}
