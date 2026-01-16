'use client'
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

export default function GitHubContributions({ username = 'your-username' }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [blockSize, setBlockSize] = useState(12)
  const [blockMargin, setBlockMargin] = useState(3.7)

  useEffect(() => {
    setMounted(true)
    
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setBlockSize(10)
        setBlockMargin(3)
      } else if (width < 768) {
        setBlockSize(10)
        setBlockMargin(3)
      } else {
        setBlockSize(12)
        setBlockMargin(3.7)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="h-40 bg-neutral-100 dark:bg-neutral-900 animate-pulse rounded" />
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="w-full max-w-4xl mx-auto selection:text-white selection:bg-neutral-800 dark:selection:text-black dark:selection:bg-neutral-200 transition-all">
      <div className="overflow-x-auto -mx-2 px-2">
        <div className="min-w-max">
          <GitHubCalendar username={username}
            blockSize={blockSize} blockMargin={blockMargin}
            fontSize={14}
            colorScheme={isDark ? 'dark' : 'light'}
            theme={{
              light: ['#ebedf0', '#c6d9f7', '#9bbff0', '#6a9de8', '#3b82f6'],
              dark: ['#161b22', '#0e3a6e', '#1e5a9e', '#2b7cd3', '#3b9eff'],
            }}
            renderBlock={(block, activity) => {
              const formattedDate = new Date(activity.date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }).replace(/\//g, '-')
              
              return (
                <rect
                  x={block.props.x} y={block.props.y}
                  width={block.props.width} height={block.props.height}
                  rx={block.props.rx} ry={block.props.ry}
                  fill={block.props.fill}
                  data-tooltip-id="github-tooltip"
                  data-tooltip-html={`<strong>${activity.count} contributions</strong> on ${formattedDate}`}
                />
              )
            }}
          />
        </div>
      </div>
      <Tooltip id="github-tooltip" 
      className="!bg-neutral-800 dark:!bg-neutral-900 !text-white !text-sm !rounded-md !px-3 !py-2 selection:text-white selection:bg-neutral-800 dark:selection:text-black dark:selection:bg-neutral-200 transition-all" 
      style={{ zIndex: 1000 }}
      />
    </div>
  )
}
