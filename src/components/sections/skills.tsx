import Image from 'next/image'

type Skill = {
  name: string
  icon: string
  darkIcon?: string
  small?: boolean
}

const SKILLS: readonly Skill[] = [
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs-light.svg', darkIcon: '/icons/nextjs-dark.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express', icon: '/icons/expressjs.svg', darkIcon: '/icons/expressjs-dark.png' },
  { name: 'Hono', icon: '/icons/hono.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'Postgres', icon: '/icons/postgresql.svg' },
  { name: 'Prisma', icon: '/icons/prisma.svg', darkIcon: '/icons/prisma-dark.png', small: true },
  { name: 'Drizzle', icon: '/icons/drizzle.svg', darkIcon: '/icons/drizzle-dark.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
  { name: 'shadcn/ui', icon: '/icons/shadcn-ui-light.svg', darkIcon: '/icons/shadcn-ui-dark.svg' },
  { name: 'Framer Motion', icon: '/icons/motion.svg' },
  { name: 'Tanstack Query', icon: '/icons/react-query-icon.svg' },
  { name: 'Redux', icon: '/icons/redux.svg' },
  { name: 'Radix UI', icon: '/icons/radixui-light.svg', darkIcon: '/icons/radixui-dark.svg' },
  { name: 'React Navigation', icon: '/icons/react-navigation.svg' },
  { name: 'React Router', icon: '/icons/react-router-light.svg', darkIcon: '/icons/react-router-dark.svg' },
  { name: 'Pinecone', icon: '/icons/pinecone.svg', darkIcon: '/icons/pinecone-dark.png' },
  { name: 'LangChain', icon: '/icons/langchain.svg', darkIcon: '/icons/langchain-dark.png' },
  { name: 'OpenAI', icon: '/icons/chatgpt-light.svg', darkIcon: '/icons/chatgpt-dark.svg' },
  { name: 'Sanity CMS', icon: '/icons/sanity.svg' },
  { name: 'Posthog', icon: '/icons/posthog.svg', darkIcon: '/icons/posthog-dark.png' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Postman', icon: '/icons/postman.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Cloudflare', icon: '/icons/cloudflare.svg' },
  { name: 'Vercel', icon: '/icons/vercel.svg', darkIcon: '/icons/vercel-dark.png', small: true },
  { name: 'AWS', icon: '/icons/aws.svg', darkIcon: '/icons/aws-dark2.png' }
] as const

export default function Skills() {
  return (
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold pl-1 sm:pl-0">Stack</h2>

      <div className="py-4 pl-1 not-last-of-type:sm:pl-2 [--pattern-foreground:var(--color-neutral-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center bg-neutral-950/0.75 dark:bg-white/0.75">
        <div className="flex flex-wrap gap-4 select-none">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex relative group cursor-pointer">
              {skill.darkIcon ? (
                <>
                  <Image 
                    src={skill.icon} alt={skill.name}
                    width={32} height={32}
                    className={skill.small ? 'w-7 h-7 dark:hidden' : 'w-8.5 h-8.5 md:w-9 md:h-9 dark:hidden'}
                    loading="lazy"
                    draggable={false}
                  />
                  <Image 
                    src={skill.darkIcon} alt={skill.name}
                    width={32} height={32}
                    className={skill.small ? 'w-7 h-7 hidden dark:block' : 'w-8.5 h-8.5 md:w-9 md:h-9 hidden dark:block'}
                    loading="lazy"
                    draggable={false}
                  />
                </>
              ) : (
                <Image 
                  src={skill.icon} alt={skill.name}
                  width={32} height={32}
                  className={skill.small ? 'w-7 h-7' : 'w-8.5 h-8.5 md:w-9 md:h-9'}
                  loading="lazy"
                  draggable={false}
                />
              )}
              
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {skill.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
