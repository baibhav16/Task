import React, { useState, useEffect } from 'react';

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 674);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className={` w-screen ${isMobile ? 'flex-col' : ''}`}>
      {isMobile && (
        <div className="">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none mt-14 ml-10"
          >
            Menu
          </button>
          {showMobileMenu && (
            <div className="flex flex-col items-start text-blue-300 p-4 rounded shadow-md mt-2 absolute top-20 left-4">
             
              <div className="cursor-pointer mb-2">About</div>
              <div className="cursor-pointer mb-2">Our Team</div>
              <div className="cursor-pointer mb-2">Events</div>
              <div className="cursor-pointer mb-2">Gallery</div>
              <div className="cursor-pointer">Contact Us</div>
            </div>
          )}
        </div>
      )}

      <div className="inline-flex items-start gap-6 absolute top-14 left-12 [font-family:'Inter',Helvetica] font-normal text-[#26e8e8] text-sm tracking-[0] leading-[normal] sm:text-xl hidden sm:inline-flex">
        <div className="w-fit mt-[-1.00px] text-white">About</div>
        <div className="w-fit mt-[-1.00px]">Our Team</div>
        <div className="w-fit mt-[-1.00px]">Events</div>
        <div className="w-fit mt-[-1.00px]">Gallery</div>
        <div className="w-fit mt-[-1.00px]">Contact Us</div>
      </div>

      
        <img
          className="absolute w-16 md:w-24 h-16 md:h-24 top-10 right-0 mr-6 md:mr-10"
          alt="Group"
          src="/group-1694.png"
        />
      </div>
    
  );
}

export default Nav;
