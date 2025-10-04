import Divider from "@/components/section-divider";
import ThemeToggle from "@/components/theme-toggle";
import ProfileInfo from "@/components/sections/profile";
import Navbar from "@/components/sections/navbar";
// import Github from "@/components/icons/github";
// import Github2 from "@/components/icons/github2";
import SocialLinks from "@/components/sections/socials";
import Experience from "@/components/sections/experience";
import GitHubContributions from "@/components/github-chart";

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden px-2">
      <Navbar />
      <div className="mt-60 flex items-center justify-center text-black dark:text-white">
        <div className="max-w-4xl w-full text-left space-y-4 border-x border-t border-neutral-300 dark:border-neutral-800 p-8">
          <ProfileInfo />
          <ThemeToggle />
          {/* <div className="flex items-center justify-center gap-4 mt-4">
            <Github />
            <Github2 />
          </div> */}
        </div>
      </div>
      <Divider />
      <div className="max-w-4xl w-full mx-auto space-y-4 border-x border-neutral-300 dark:border-neutral-800 p-4 sm:p-8">
        <SocialLinks />
      </div>
      <Divider />
      <div className="max-w-4xl w-full mx-auto space-y-4 border-x border-neutral-300 dark:border-neutral-800 p-5 sm:p-8">
        <GitHubContributions username="aryanxvz" />
      </div>
      <Divider />
      <div className="max-w-4xl w-full mx-auto space-y-4 border-x border-neutral-300 dark:border-neutral-800 p-4 sm:p-8">
        <Experience />
      </div>
      <Divider />
    </main>
  );
}
