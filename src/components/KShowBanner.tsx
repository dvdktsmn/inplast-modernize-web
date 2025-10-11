import React from "react";
import kShowImage from "@/assets/k-show-banner.png";

const KShowBanner = () => {
  return (
    <section className="relative w-full overflow-hidden mt-16">
      <img
        src={kShowImage}
        alt="K-Show 2025 - The World's No.1 Trade Fair for Plastics and Rubber"
        className="w-auto h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16">
        <p className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
          Meet us at the K-Show: <br />
          Hall 3, Stand G 80
        </p>
      </div>
    </section>
  );
};

export default KShowBanner;
