import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { TeamData } from "../../utils/Data";

const TeamPage = () => {
  return (
    <Layout>
      <div className="pt-28">
        <div className="grid grid-cols-1 gap-16">
          <div className="flex flex-col gap-4 self-center">
            <h1 className="text-center uppercase md:text-6xl">Meet our team</h1>
            <h2>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ipsum a arcu cursus vitae.</h2>
          </div>
          <div className="grid grid-rows-[repeat(6,300px)] gap-16 md:grid-cols-2 md:grid-rows-[repeat(3,400px)] md:gap-8 xl:grid-cols-[repeat(3,1fr)] xl:grid-rows-[repeat(2,30rem)] xl:gap-20">
            {TeamData.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center gap-4">
                <div className="relative h-full w-full text-white">
                  <Image src={`/assets/images/team/${index + 1}.jpg`} alt="" layout="fill" objectFit="cover" className="z-10 rounded-md" />
                  <div className="absolute bottom-2 left-2 h-full w-full  border border-gray-500"></div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="uppercase">{item.name}</p>
                  <p className="italic text-gray-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
