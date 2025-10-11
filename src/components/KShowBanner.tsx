import React from "react";

const KShowBanner = () => {
  return (
    <section className="relative w-full">
      <img 
        src="/lovable-uploads/k-show-banner.png" 
        alt="K-Show 2025 Banner" 
        className="w-full h-auto block"
      />
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-1/2 flex items-center justify-center px-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            Meet us at the K-Show:
            <br />
            Hall 3, Stand G 80
          </p>
        </div>
      </div>
    </section>
  );
};

export default KShowBanner;
