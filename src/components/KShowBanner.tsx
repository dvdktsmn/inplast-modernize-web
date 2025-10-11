import React from 'react';

const KShowBanner = () => {
  return (
    <section className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/k-show-banner.png" 
              alt="K-Show 2025 - The World's No. 1 Trade Fair for Plastics and Rubber" 
              className="h-20 w-auto"
            />
          </div>
          <div className="text-xl font-semibold text-inplast-blue">
            Meet us at the K-Show: Hall 3, Stand G 80
          </div>
        </div>
      </div>
    </section>
  );
};

export default KShowBanner;
