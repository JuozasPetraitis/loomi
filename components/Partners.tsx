import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div>
      <h1>Partners</h1>
      <div className="overflow-hidden py-16">
        <div className="grid animate-[infiniteScroll_120s_linear_infinite] grid-cols-[repeat(2,100%)] justify-between">
          <div className="grid grid-cols-[repeat(4,20%)] justify-around xl:grid-cols-[repeat(4,15%)]">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-[6rem] xl:h-[7rem]">
                <Image src={`/assets/images/partners/${item}.png`} alt="" layout="fill" objectFit="contain" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(4,20%)] justify-around xl:grid-cols-[repeat(4,15%)]">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-[6rem] xl:h-[7rem]">
                <Image src={`/assets/images/partners/${item}.png`} alt="" layout="fill" objectFit="contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
