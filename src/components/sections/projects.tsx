import { ProjectItemType, ProjectsList } from "../ui/my-projects"

const PROJECTS: ProjectItemType[] = [
  {
    id: "chatpdf",
    name: "ChatPDF",
    tagline: "AI Document QA Platform",
    links: {
      live: "https://chatpdf-blue-two.vercel.app/",
      github: "https://github.com/aryanxvz/chatpdf",
    },
    description: `
- Architected a production grade RAG pipeline processing documents using LangChain, Pinecone vector DB and OpenAI embeddings with 95% retrieval accuracy
- Engineered chunking strategies and semantic search with custom reranking algorithms to improve context relevance
- Implemented incremental document processing with progress tracking and error recovery for large file uploads
    `,
    tech: ["Next.js", "TypeScript", "Tailwind", "OpenAI API", "LangChain", "Pinecone", "Redis"],
  },
  {
    id: "cashflow",
    name: "Cashflow",
    tagline: "Realtime Finance Tracking",
    links: {
      live: "https://cashflow-beta-app.vercel.app/",
      github: "https://github.com/aryanxvz/cashflow",
    },
    description: `
- Built real-time data sync engine with optimistic updates and conflict resolution handling edge cases
- Designed PostgreSQL schema and implemented complex aggregation queries with Prisma for multi-dimensional financial analytics and trend visualization
- Integrated Clerk authentication with row-level security policies ensuring data isolation across tenants
    `,
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "TanStack Query", "Recharts", "Tailwind"],
  },
  {
    id: "lineary",
    name: "Lineary",
    tagline: "Blog Publishing Platform",
    links: {
      live: "https://lineary.vercel.app/",
      github: "https://github.com/aryanxvz/lineary",
    },
    description: `
- Build a blogging platform secured by JWT based authentication
- Architected serverless edge-first application on Cloudflare Workers
- Implemented SSR with streaming HTML and aggressive edge caching strategies for optimal SEO and performance
- Optimized MongoDB queries with indexing for content discovery and search
    `,
    tech: ["React", "Hono", "TypeScript", "Tailwind", "MongoDB", "Cloudflare Workers"],
  },
  {
    id: "neopay",
    name: "NeoPay",
    tagline: "Digital Payments Simulation",
    links: {
      github: "https://github.com/aryanxvz/neopay",
    },
    description: `
- Built event-driven payment settlement system with idempotent API design and webhook retry mechanisms
- Implemented transaction state machines with ACID compliance and distributed locking for concurrent operations
- Architected secure session management with JWT rotation and rate limiting middleware
- Designed RESTful APIs with comprehensive error handling, request validation and API versioning strategy
    `,
    tech: ["Next.js", "Express", "TypeScript", "Prisma", "NextAuth", "PostgreSQL", "Tailwind"],
  },
]

export default function Projects() {
  return (
    <section>
      <div className="text-3xl sm:text-4xl font-bold mb-4">
        <h2>Projects</h2>
      </div>
      <ProjectsList projects={PROJECTS} />
    </section>
  )
}
