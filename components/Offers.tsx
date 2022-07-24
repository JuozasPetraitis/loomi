import React from "react";
import { OffersData } from "../utils/Data";

const Offers = () => {
  return (
    <div className="py-28">
      <div className="grid gap-y-20">
        <div className="flex flex-col gap-8">
          <h1>Amazing offers</h1>
          <h2>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ipsum a arcu cursus vitae.</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(3,1fr)] 2xl:mx-auto 2xl:w-8/12">
          {OffersData.title.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-8 rounded-md border border-neutral-600 p-8">
              <p className={`${index === 1 ? "text-primary" : ""} text-2xl font-light uppercase`}>{item}</p>
              <div className="flex items-center gap-2 italic text-neutral-400">
                <p className={`${index === 1 ? "text-primary" : ""} text text-5xl`}>{OffersData.price[index]}</p>
                <p>/Month</p>
              </div>

              <p className="leading-10 text-gray-300">{OffersData.description}</p>
              <button className="text-primary">View more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
