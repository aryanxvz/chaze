"use client"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

function Collapsible({...props}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({...props}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props}/>
  )
}

function CollapsibleContent({...props}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props}/>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }


// experience collapsible
type ExperienceCollapsibleProps = {
  defaultOpen?: boolean;
  children: [React.ReactNode, React.ReactNode];
};

export function ExperienceCollapsible({ defaultOpen, children }: ExperienceCollapsibleProps) {
  const [header, content] = children;
  
  return (
    <Collapsible defaultOpen={defaultOpen} asChild>
      <div className="mt-4 py-3 sm:mt-4 hover:bg-neutral-200/30 dark:hover:bg-neutral-900 rounded-lg transition-colors duration-200">
        <CollapsibleTrigger className="group/experience not-prose w-full text-left select-none">
          {header}
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden transition-all duration-500 ease-in-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {content}
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}
