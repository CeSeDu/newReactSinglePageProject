import React from "react";

const FamilyBackground = () => {
  return (
    <section className="bg-customGreen text-black py-8 relative">
      <div className="text-center mb-6">
        <h2 className="font-bold md:text-6xl text-3xl">Family Background</h2>
        <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed font-light">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type!
        </p>
      </div>
      <div className="flex lg:justify-center lg:justify-beetween space-x-1">
        {/* First Image */}
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={require("../img/Rectangle 11.png")}
            alt="Family 1"
            style={{
              clipPath: "polygon(0% 0%, 100% 5%, 100% 80%, 0% 100%)",
            }}
          />
        </div>
        {/* Second Image */}
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={require("../img/Rectangle 12.png")}
            alt="Family 2"
            style={{
              clipPath: "polygon(5% 5%, 100% 5%,100% 80%, 5% 80%)",
            }}
          />
        </div>
        {/* Third Image */}
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={require("../img/Rectangle 13.png")}
            alt="Family 3"
            style={{
              clipPath: "polygon(5% 5%, 100% 5%,100% 80%, 5% 80%)",
            }}
          />
        </div>
        {/* Fourth Image */}
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={require("../img/Rectangle 14.png")}
            alt="Family 4"
            style={{
              clipPath: "polygon(3% 5%, 5% 80%, 100% 100%, 100% 3%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FamilyBackground;
