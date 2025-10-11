import React from 'react';

const KShowBanner = () => {
  return (
    <section className="bg-background py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/k-show-banner.png" 
              alt="K-Show 2025 Banner" 
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              Meet us at the K-Show: Hall 3, Stand G 80
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KShowBanner;
