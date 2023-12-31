import React, { useState, useEffect } from "react";

function Center() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderMobileView = () => (
    <>
      <div className="flex justify-center">
        <img
          className="absolute w-56 h-56 top-56"
          alt="Group"
          src="/group-1695.png"
        />
      </div>
      <div className="flex justify-center  ">
        <img
          className="absolute w-10/12 h-16 mt-10 top-[24rem]"
          alt="Newton school coding"
          src="/newton-school-coding-club.svg"
        />
      </div>
      <div className="absolute top-[30rem] [font-family:'Quantico',Helvetica] font-normal text-[#26e8e8] text-[40px] tracking-[0] leading-[normal]">
        SRMIST
      </div>
      <div className="absolute mt-14 [font-family:'Quantico',Helvetica] font-normal text-[#26e8e8] text-[32px] tracking-[0] leading-[normal] top-[30rem]">
        Coder’s Vertex
      </div>
    </>
  );

  const renderDesktopView = () => (
    <div className="w-10/12 h-fit flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <img
          className="absolute w-64 h-64 top-56"
          alt="Group"
          src="/group-1695.png"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="absolute w-[700px] h-[56px] top-[32em]"
          alt="Newton school coding"
          src="/newton-school-coding-club.svg"
        />
      </div>
      <div className="absolute top-[37rem] [font-family:'Quantico',Helvetica] font-normal text-[#26e8e8] text-[46px] tracking-[0] leading-[normal]">
        SRMIST
      </div>
      <div className="absolute top-[42rem] [font-family:'Quantico',Helvetica] font-normal text-[#26e8e8] text-[38px] tracking-[0] leading-[normal]">
        Coder’s Vertex
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      {isMobile ? renderMobileView() : renderDesktopView()}
    </div>
  );
}

export default Center;
