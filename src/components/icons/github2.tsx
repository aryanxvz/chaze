import React from 'react'

export default function Github2() {
  return (
    <div className='flex justify-center items-center'>
      <div className="relative group cursor-pointer">
        {/* Outer glow shadow */}
        <div className="absolute -inset-6 rounded-full bg-black/5 blur-2xl group-hover:bg-black/8 transition-all duration-500"></div>
        
        {/* Primary shadow ring */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-b from-black/3 to-black/8 blur-xl"></div>
        
        {/* Precision border ring */}
        <div className="absolute -inset-0.5 w-33 h-33 rounded-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 shadow-lg"></div>
        
        {/* Main button with premium finish */}
        <div className="relative w-32 h-32 bg-gradient-to-b from-white via-gray-50 to-white rounded-full flex items-center justify-center overflow-hidden group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 transition-all duration-300">
          
          {/* Top highlight reflection */}
          <div className="absolute top-0 left-1/4 right-1/4 h-8 bg-gradient-to-b from-white/80 via-white/40 to-transparent rounded-full blur-sm"></div>
          
          {/* Main surface with subtle gradient */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white via-gray-25 to-gray-50 shadow-inner"></div>
          
          {/* Precision inner shadow */}
          <div className="absolute inset-2 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] bg-gradient-to-b from-transparent to-black/[0.02]"></div>
          
          {/* Top glass reflection stripe */}
          <div className="absolute top-4 left-6 right-6 h-3 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-[1px]"></div>
          
          {/* Bottom subtle depth */}
          <div className="absolute bottom-3 left-8 right-8 h-2 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent rounded-full"></div>
          
          {/* GitHub logo with premium treatment */}
          <div className="relative z-20 group-hover:scale-[1.02] transition-transform duration-300">
            <svg
              width="54"
              height="54"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
        </div>
        
        {/* Precision bottom shadow */}
        <div className="absolute top-2 left-2 right-2 bottom-0 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] -z-10"></div>
        
        {/* Ultra-subtle ambient shadow */}
        <div className="absolute top-4 left-4 right-4 bottom-2 rounded-full shadow-[0_16px_48px_rgba(0,0,0,0.04)] -z-20"></div>
      </div>
    </div>
  );
}