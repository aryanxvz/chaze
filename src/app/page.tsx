import Divider from "@/components/section-divider";
import ThemeToggle from "@/components/theme-toggle";
import ProfileInfo from "@/components/sections/profile";
import Navbar from "@/components/sections/navbar";
import Github from "@/components/icons/github";
import Github2 from "@/components/icons/github2";

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden px-2">
      <Navbar />
      <div className="mt-80 flex items-center justify-center text-black dark:text-white">
        <div className="max-w-4xl w-full text-left space-y-4 border-x border-t border-neutral-300 dark:border-neutral-800 p-8 rounded-t-lg">
          <ProfileInfo />
          <ThemeToggle />
          <div className="flex items-center justify-center gap-4 mt-4">
            <Github />
            <Github2 />
          </div>
        </div>
      </div>
      <Divider />
    </main>
  );
}