import React from "react";
import { ServiceData } from "../utils/Data";

const Services = () => {
  return (
    <div className="py-28">
      <div className="grid grid-rows-1 gap-y-20">
        <div className="flex flex-col gap-8">
          <h1>Our services</h1>
          <h2>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ipsum a arcu cursus vitae.</h2>
        </div>
        <div className="grid justify-around gap-8 md:grid-cols-[40%,40%]">
          {ServiceData.title.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-white/50">
              <div>
                <p className="text-xl font-medium">{item}</p>
                <p className="">{ServiceData.description}</p>
              </div>
              <p className="font-medium">{ServiceData.price[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
