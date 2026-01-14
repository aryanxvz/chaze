"use client"
import { CodeXml, Globe, Lightbulb, Mail, MapPin, Clock, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
  <div className="flex items-center gap-[6px] sm:gap-2 text-sm sm:text-base">
    <IconContainer>
      <Icon className="size-3 sm:size-4 text-neutral-600 dark:text-neutral-400" />
    </IconContainer>
    <div className="flex items-center flex-wrap gap-1">{children}</div>
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
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const mumbaiTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
      
      setTime(mumbaiTime);
    };

    updateTime();
    
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    
    const syncTimeout = setTimeout(() => {
      updateTime();
      const interval = setInterval(updateTime, 60000);
      
      return () => clearInterval(interval);
    }, msUntilNextMinute);

    return () => clearTimeout(syncTimeout);
  }, []);

  return (
    <>
      <h1 className="text-4xl sm:text-6xl text-neutral-700 dark:text-neutral-300 font-semibold text-shadow-black/10 dark:text-shadow-white/15 text-shadow-lg tracking-tight">Aryan Mane</h1>
      <div className="text-base sm:text-lg space-y-1">
        <p>Software developer, trying to master the art of web.</p>
      </div>

      <div className="mt-8 space-y-2 text-neutral-800 dark:text-neutral-200">
        <InfoItem icon={CodeXml}>
          <span>Building <Link href="https://chaze.pro" className="text-black dark:text-white">chaze.pro</Link></span>
        </InfoItem>
        
        <InfoItem icon={Lightbulb}>
          Fullstack developer <Link href="https://greencardinc.com">@Greencard</Link>
        </InfoItem>

        <InfoItem icon={MapPin}>
          <span>Pune, India</span>
          <span className={cn("inline-flex items-center gap-1 rounded-lg border bg-muted/30 px-1.5 py-[1px] text-sm text-muted-foreground transition-colors hover:bg-muted cursor-default ml-1")}>
            <Clock className="size-3 sm:size-3.5" />
            <span className="font-light">{time}</span>
          </span>
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
