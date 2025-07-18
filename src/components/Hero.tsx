
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // Approximate height of the navbar (h-16 = 64px)
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="relative h-[70vh] md:h-[50vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full container mx-auto text-center px-4">
        <img 
          src="/lovable-uploads/ed27593e-b69f-4a83-b4c1-b98eed195b36.png" 
          alt="Inplast Novex Logo" 
          className="h-16 md:h-20 mb-6 animate-fade-in" 
        />
        <h2 className="text-xl md:text-2xl font-medium text-white mb-4 animate-fade-in px-2">
          Innovation, Engineering, Excellence
        </h2>
        <p className="text-base md:text-lg text-white max-w-2xl mb-8 animate-fade-in px-2">
          Comprehensive industrial solutions for equipment upgrades, relocation and commissioning
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center items-center w-full max-w-lg md:max-w-none">
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-4 md:px-6 py-4 w-full sm:w-[180px] text-sm md:text-base" 
            onClick={() => scrollToSection('products')}
          >
            Equipment Expertise
          </Button>
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-4 md:px-6 py-4 w-full sm:w-[180px] text-sm md:text-base" 
            onClick={() => scrollToSection('services')}
          >
            Our Services
          </Button>
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-4 md:px-6 py-4 w-full sm:w-[180px] text-sm md:text-base" 
            onClick={() => scrollToSection('projects')}
          >
            Project Highlights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
