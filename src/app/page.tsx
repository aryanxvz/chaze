import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center text-black dark:text-white">
        <div className="max-w-3xl text-center space-y-10">
          <h1 className="text-6xl font-semibold">Chaze</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </main>
  );
}