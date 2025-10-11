import React from "react";

const KShowBanner = () => {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="relative">
          <img src="/lovable-uploads/k-show-banner.png" alt="K-Show 2025 Banner" className="w-auto h-30 block" />
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="w-1/2 text-center px-8">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
                Meet us at the K-Show:
                <br />
                Hall 3, Stand G 80
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KShowBanner;
