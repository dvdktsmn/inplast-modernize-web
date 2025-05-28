
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  goToPrevProject: () => void;
  goToNextProject: () => void;
  currentProject: number;
  totalProjects: number;
  handleProjectChange: (index: number) => void;
}

const ProjectNavigation = ({ 
  goToPrevProject, 
  goToNextProject, 
  currentProject, 
  totalProjects, 
  handleProjectChange 
}: ProjectNavigationProps) => {
  return (
    <>
      {/* Left arrow - positioned to be always visible on desktop */}
      <Button 
        variant="outline" 
        size="icon" 
        onClick={goToPrevProject} 
        className="absolute left-2 md:left-4 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md hover:bg-inplast-blue hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous project</span>
      </Button>
      
      {/* Right arrow - positioned to be always visible on desktop */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-2 md:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md hover:bg-inplast-blue hover:text-white" 
        onClick={goToNextProject}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next project</span>
      </Button>
      
      {/* Bullet point navigation */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-3">
          {Array.from({ length: totalProjects }).map((_, index) => (
            <button 
              key={index} 
              onClick={() => handleProjectChange(index)} 
              className={`w-3 h-3 rounded-full transition-all ${
                currentProject === index 
                  ? 'bg-inplast-blue scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`} 
              aria-label={`Go to project ${index + 1}`} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectNavigation;
