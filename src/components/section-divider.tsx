
export default function Divider() {
  return (
    <main className="flex items-center justify-center">
      <div className="
          relative flex h-[34px] w-full border-y border-neutral-300 dark:border-neutral-800
          [--pattern-foreground:theme(colors.neutral.300)] dark:[--pattern-foreground:theme(colors.neutral.800)]
          before:content-[''] before:absolute before:-left-[100vw]
          before:-z-[1] before:h-8 before:w-[200vw]
          before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]
          before:bg-[length:10px_10px]
          before:opacity-55
        "
      />
    </main>
  );
}
