import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div>
      <h1>Partners</h1>
      <div className="overflow-hidden py-16">
        <div className="grid animate-[infiniteScroll_120s_linear_infinite] grid-cols-[repeat(2,100%)]">
          <div className="grid grid-cols-[repeat(4,20%)] justify-between xl:grid-cols-[repeat(4,15%)]">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-20 xl:h-36">
                <Image src={`/assets/images/partners/${item}.png`} alt="" layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(4,20%)] justify-between xl:grid-cols-[repeat(4,15%)]">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-20 xl:h-36">
                <Image src={`/assets/images/partners/${item}.png`} alt="" layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
