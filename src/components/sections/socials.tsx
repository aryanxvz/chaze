import Image from 'next/image';

const SocialLinks = () => {
  const links = [
    {
      name: 'LinkedIn',
      username: 'aryanmane',
      imagePath: '/icons/linkedin.png',
      bgColor: 'bg-blue-600',
      url: 'https://linkedin.com/in/aryanmane',
    },
    {
      name: 'GitHub',
      username: 'aryanxvz',
      imagePath: '/icons/github.png',
      bgColor: 'bg-neutral-800',
      url: 'https://github.com/aryanxvz',
    },
    {
      name: 'X (Formerly Twitter)',
      username: '@aryanxvz',
      imagePath: '/icons/x.png',
      bgColor: 'bg-neutral-900',
      url: 'https://x.com/aryanxvz',
    },
    {
      name: 'Instagram',
      username: '@aryanxvz',
      imagePath: '/icons/instagram.png',
      bgColor: 'bg-[#fafafa] dark:bg-[#0a0a0a]',
      url: 'https://instagram.com/aryanxvz',
    }
  ];

  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        {/* Mobile: Single row with 4 icons */}
        <div className="grid grid-cols-4 gap-2 mb-4 md:hidden">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
              className="bg-[#fafafa] dark:bg-[#0a0a0a] border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 p-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center relative p-[0.1px] bg-gradient-to-br from-white via-black to-white dark:from-white/60 dark:via-neutral-600 dark:to-white/60`}>
                <div className={`w-full h-full ${link.bgColor} rounded-xl flex items-center justify-center overflow-hidden`}>
                  <Image 
                    src={link.imagePath} alt={`${link.name} icon`}
                    width={48} height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop: 2x2 grid with details */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {links.slice(0, 2).map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                className="bg-[#fafafa] dark:bg-[#0a0a0a] border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 p-5 flex items-center justify-between transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center relative p-[0.5px] bg-gradient-to-br from-white via-black to-white dark:from-white/60 dark:via-neutral-600 dark:to-white/60`}>
                    <div className={`w-full h-full ${link.bgColor} rounded-xl flex items-center justify-center overflow-hidden`}>
                      <Image 
                        src={link.imagePath} alt={`${link.name} icon`}
                        width={48} height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 border-b border-transparent group-hover:border-current transition-[border-color] duration-300 ease-in-out">
                      {link.name}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">{link.username}</p>
                  </div>
                </div>
                <div className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {links.slice(2, 4).map((link, index) => (
              <a key={index + 2} href={link.url} target="_blank" rel="noopener noreferrer"
                className="bg-[#fafafa] dark:bg-[#0a0a0a] border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 p-5 flex items-center justify-between transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center relative p-[0.3px] bg-gradient-to-br from-white via-black to-white dark:from-white/60 dark:via-neutral-900 dark:to-white/60`}>
                    <div className={`w-full h-full ${link.bgColor} rounded-xl flex items-center justify-center overflow-hidden`}>
                      <Image 
                        src={link.imagePath} alt={`${link.name} icon`}
                        width={48} height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 border-b border-transparent group-hover:border-current transition-[border-color] duration-300 ease-in-out">
                      {link.name}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">{link.username}</p>
                  </div>
                </div>
                <div className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SocialLinks;