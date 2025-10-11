import React from "react";
import kShowImage from "@/assets/k-show-banner.png";

const KShowBanner = () => {
  return (
    <section className="relative w-full overflow-hidden mt-16 md:h-28 bg-[#275E8F]">
      <div className="container mx-auto md:px-4 md:h-full">
        <div className="relative md:h-full">
          <img
            src={kShowImage}
            alt="K-Show 2025 - The World's No.1 Trade Fair for Plastics and Rubber"
            className="w-full md:w-auto md:h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-end px-4 md:px-0">
            <p className="text-white text-sm md:text-2xl font-bold drop-shadow-lg text-right">
              Meet us at the K-Show: <br />
              Hall 3, Stand G 80
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KShowBanner;
