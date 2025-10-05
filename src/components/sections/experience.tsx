import { ExperienceItemType, WorkExperience } from "../ui/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "greencard",
    companyName: "Greencard Inc.",
    companyLogo: "/icons/greencard.jpeg",
    companyWebsite: "https://greencard.inc",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Frontend Developer",
        employmentPeriod: "04.2025 — present",
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed the frontend of AI-powered immigration law consultation chatbot using Next.js and TypeScript
- Engineered modular and accessible UI components with Tailwind CSS, MUI and Framer Motion.
- Introduced product and web analytics using PostHog to monitor user behavior and improve UX.
- Implemented secure authentication and role-based authorization flows with Clerk.
- Built file upload functionality using UploadThing, enabling document parsing and validation.
- Optimized client-side performance with TanStack Query and dynamic data tables using React Table.
- Link demo - Registered the e-commerce site with [online.gov.vn](https://online.gov.vn) for compliance.`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "Research",
          "Project Management",
        ],
        isExpanded: false,
      }
    ],
    isCurrentEmployer: true,
  },
  {
    id: "skidoo",
    companyName: "Skidoo",
    companyLogo: "/icons/theskidoo.jpeg",
    companyWebsite: "https://theskidoo.com/posts",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Full-stack Developer",
        employmentPeriod: "01.2024 — 03.2025",
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed the frontend of AI-powered immigration law consultation chatbot using Next.js and TypeScript
- Engineered modular and accessible UI components with Tailwind CSS, MUI and Framer Motion.
- Introduced product and web analytics using PostHog to monitor user behavior and improve UX.
- Implemented secure authentication and role-based authorization flows with Clerk.
- Built file upload functionality using UploadThing, enabling document parsing and validation.
- Optimized client-side performance with TanStack Query and dynamic data tables using React Table.
- Link demo - Registered the e-commerce site with [online.gov.vn](https://online.gov.vn) for compliance.`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Extension",
          "Research",
        ],
        isExpanded: false,
      }
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <div className="text-3xl sm:text-4xl font-bold pl-1 sm:pl-0">
        <h2>Experience</h2>
      </div>
      <WorkExperience experiences={WORK_EXPERIENCE} />
    </section>
  )
}
