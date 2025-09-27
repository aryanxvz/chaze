export default function Github() {
  return (
    <div className='flex justify-center items-center'>
      <div className="relative">
        {/* Gradient border ring - white at top/bottom, gray on sides */}
        <div className="absolute -inset-1 w-34 h-34 rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-80"></div>
        
        {/* Main circular button */}
        <div className="relative w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden z-10">
          {/* Inner shadow effect */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-inner"></div>
          
          {/* GitHub Octocat Logo */}
          <div className="relative z-10">
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-black"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
        </div>
        
        {/* Outer shadow - positioned absolutely for better control */}
        <div className="absolute inset-0 w-32 h-32 rounded-full shadow-2xl opacity-20 -z-10"></div>
      </div>
    </div>
  );
}