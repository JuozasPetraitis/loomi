import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[36rem] py-8">
      <div className="relative m-auto h-full w-full">
        <Image src={"/assets/images/Hero.jpg"} alt="Women in bathtub" layout="fill" objectFit="cover" className="select-none rounded-md opacity-95" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-md">
          <p className=" bg-gradient-to-r from-white/30 via-white/70 to-white/10 bg-clip-text text-left font-Josefin text-5xl font-semibold uppercase text-transparent selection:bg-primary selection:text-white">
            Special treatments to relax your mind
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
