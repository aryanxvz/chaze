import Divider from "@/components/section-divider";
import ProfileInfo from "@/components/sections/profile";
import Navbar from "@/components/sections/navbar";
import SocialLinks from "@/components/sections/socials";
import Experience from "@/components/sections/experience";
import GitHubContributions from "@/components/github-chart";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

type SectionProps = {
  children: React.ReactNode;
  isFirst?: boolean;
};

function Section({ children, isFirst }: SectionProps) {
  return isFirst ? (
    <>
      <div className="mt-60 flex items-center justify-center text-black dark:text-white">
        <div className="max-w-4xl w-full text-left space-y-4 border-x border-t border-neutral-300 dark:border-neutral-800 p-5 sm:p-8">
          {children}
        </div>
      </div>
    </>
  ) : (
    <div className="max-w-4xl w-full mx-auto space-y-4 border-x border-neutral-300 dark:border-neutral-800 p-4 sm:p-8">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden px-2">
      <Navbar />
      <Section isFirst>
        <ProfileInfo />
      </Section>
      <Divider />
      <Section>
        <SocialLinks />
      </Section>
      <Divider />
      <Section>
        <GitHubContributions username="aryanxvz" />
      </Section>
      <Divider />
      <Section>
        <Skills />
      </Section>
      <Divider />
      <Section>
        <Experience />
      </Section>
      <Divider />
      <Section>
        <Projects />
      </Section>
      <Divider />
    </main>
  );
}
