import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);

      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 300); // Adjust the delay time as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <a
      href="#"
      className={`fixed bottom-4 left-40 cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl ${
        isVisible ? 'animate-bounce' : 'opacity-0'
      } transition-opacity duration-300 hover:animate-none`}
    >
      <svg
        className="w-5 h-5"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 10.5 12 3m0 0-7.5 7.5M12 3v18"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </a>
  );
};

export default ScrollButton;
