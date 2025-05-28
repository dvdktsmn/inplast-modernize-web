
import React, { useState } from 'react';
import { FeaturedProject } from './ProjectsData';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface SmallProjectCardProps {
  project: FeaturedProject;
}

const SmallProjectCard = ({ project }: SmallProjectCardProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Group images in pairs for side-by-side display
  const createImagePairs = (images: string[]) => {
    const pairs = [];
    for (let i = 0; i < images.length; i += 2) {
      if (i + 1 < images.length) {
        // If we have two images, pair them
        pairs.push([images[i], images[i + 1]]);
      } else {
        // If we have an odd number of images, the last one stands alone
        pairs.push([images[i]]);
      }
    }
    return pairs;
  };

  const imagePairs = createImagePairs(project.images);

  const handleImageClick = (pairIndex: number, imageIndex: number) => {
    const actualImageIndex = pairIndex * 2 + imageIndex;
    setSelectedImageIndex(actualImageIndex);
    setIsLightboxOpen(true);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const goToPrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        {project.images.length > 0 ? (
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {imagePairs.map((pair, pairIndex) => (
                  <CarouselItem key={pairIndex} className="basis-full">
                    <div className="flex gap-1">
                      {pair.map((image, imageIndex) => (
                        <div key={`${pairIndex}-${imageIndex}`} className="flex-1">
                          <AspectRatio ratio={16 / 9}>
                            <img 
                              src={image} 
                              alt={`${project.title} - image ${pairIndex * 2 + imageIndex + 1}`} 
                              className="object-cover w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => handleImageClick(pairIndex, imageIndex)}
                            />
                          </AspectRatio>
                        </div>
                      ))}
                      {/* If we have a single image in the pair, add an empty div to maintain layout */}
                      {pair.length === 1 && (
                        <div className="flex-1">
                          <AspectRatio ratio={16 / 9}>
                            <div className="bg-gray-100 w-full h-full"></div>
                          </AspectRatio>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Always show navigation arrows when there are images */}
              {project.images.length > 0 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </>
              )}
            </Carousel>
          </div>
        ) : (
          <AspectRatio ratio={16 / 9}>
            <div className="bg-gray-100 w-full h-full"></div>
          </AspectRatio>
        )}
        
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-inplast-blue">{project.title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-700">{project.description}</p>
        </CardContent>
      </Card>

      {/* Lightbox Dialog */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] max-h-[90vh] p-0 bg-white border-none overflow-hidden">
          <div className="relative w-full h-full flex flex-col">
            <div className="flex-1 min-h-0 py-4 px-2">
              <Carousel 
                className="w-full h-full"
                opts={{ 
                  loop: true,
                  startIndex: selectedImageIndex 
                }}
              >
                <CarouselContent className="h-full -ml-0">
                  {project.images.map((image, index) => (
                    <CarouselItem key={`lightbox-${index}`} className="h-full pl-0">
                      <div className="w-full h-full flex items-center justify-center px-2">
                        <img 
                          src={image} 
                          alt={`${project.title} - large view ${index + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                          style={{ maxHeight: 'calc(90vh - 4rem)', maxWidth: 'calc(95vw - 2rem)' }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-gray-300 text-gray-700 shadow-lg" />
                <CarouselNext className="right-2 bg-white/80 hover:bg-white border-gray-300 text-gray-700 shadow-lg" />
              </Carousel>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SmallProjectCard;
