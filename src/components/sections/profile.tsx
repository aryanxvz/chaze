import { CodeXml, Globe, Lightbulb, Mail, MapPin, LucideIcon } from "lucide-react";

const ICON_CONTAINER_CLASSES = "flex py-[6px] px-[6px] shrink-0 items-center justify-center rounded-lg bg-muted shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] dark:shadow-[inset_1px_1px_1px_rgba(255,255,255,0.15),inset_0px_0px_2px_rgba(255,255,255,0.15)]";
const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener noreferrer" };

const IconContainer = ({ children }: { children: React.ReactNode }) => (
  <div className={ICON_CONTAINER_CLASSES}>{children}</div>
)

interface InfoItemProps {
  icon: LucideIcon
  children: React.ReactNode
}

const InfoItem = ({ icon: Icon, children }: InfoItemProps) => (
  <div className="flex items-center gap-2 text-base">
    <IconContainer>
      <Icon className="size-4 text-neutral-600 dark:text-neutral-400" />
    </IconContainer>
    <p>{children}</p>
  </div>
)

const Link = ({ href, children, external = true, className = "" }: { 
  href: string 
  children: React.ReactNode 
  external?: boolean 
  className?: string
}) => (
  <a href={href} {...(external && EXTERNAL_LINK_PROPS)}
    className={`border-b border-transparent hover:border-current pb-0.5 transition-all duration-300 ease-in-out ${className}`}>
    {children}
  </a>
)

export default function ProfileInfo() {
  return (
    <>
      <h1 className="text-6xl font-semibold">Aryan Mane</h1>
      <div className="text-lg space-y-1">
        <p>&gt;&nbsp;&nbsp;Software developer, trying to master the art of web.</p>
        <p>&gt;&nbsp;&nbsp;Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>

      <div className="mt-8 space-y-2 text-neutral-600 dark:text-neutral-400">
        <InfoItem icon={CodeXml}>
          Building <Link href="https://chaze.pro" className="text-black dark:text-neutral-300">chaze.pro</Link>
        </InfoItem>
        
        <InfoItem icon={MapPin}>
          Pune, Maharashtra, India
        </InfoItem>
        
        <InfoItem icon={Lightbulb}>
          <Link href="https://greencardinc.com">@Greencard Inc</Link>
          , <Link href="https://skidoo.com">@Skidoo</Link>
          {" (1 year, 9 months)"}
        </InfoItem>
        
        <InfoItem icon={Mail}>
          <Link href="mailto:aryanmane7916@gmail.com" external={false}>
            aryanmane7916@gmail.com
          </Link>
        </InfoItem>
        
        <InfoItem icon={Globe}>
          <Link href="https://aryanxvz.dev">aryanxvz.dev</Link>
        </InfoItem>
      </div>
    </>
  )
}
