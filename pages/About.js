import Gradient from "@/components/Gradient";
import Nav from "@/components/Nav";
import Center from "@/components/Center";

import React from "react";
import Us from "@/components/Us";
import Footer from "@/components/Footer";

export const About = () => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-[1440px] h-[3072px]">
     
      <Gradient/>
     <Center/>
     <Nav/>
     <Us/>
     <Footer/>
     

      </div></div>
  );
};
export default About

