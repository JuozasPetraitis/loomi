import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurTeam = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-20 xl:grid-rows-1">
        <div className="flex flex-col gap-4">
          <h1>Meet our team</h1>
          <Link href={"/team"}>
            <button className="mx-auto">View More</button>
          </Link>
        </div>
        <div className="grid grid-rows-[repeat(4,20rem)] gap-1 md:grid-cols-2 md:grid-rows-[20rem] lg:grid-cols-4 3xl:grid-rows-[28rem]">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative">
              <Image src={`/assets/images/team/${item}.jpg`} alt="" layout="fill" objectFit="cover" className="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
