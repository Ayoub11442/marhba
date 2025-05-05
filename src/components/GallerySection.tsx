
import React, { useState, useRef } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryImages = [
  {
    id: 1,
    src: "https://i0.wp.com/moroccanfoodtour.com/wp-content/uploads/2020/07/moroccan-food-tour-Moroccan-mint-tea-915x610.jpg",
    alt: "Moroccan tea service"
  },
  {
    id: 2,
    src: "https://www.thespruceeats.com/thmb/k2hkTxMDR3Av4AZVP4P69m4Vz6g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/berber-tagine-1-2718-x-1800-57c500575f9b5855e537715c.jpg",
    alt: "Traditional tagine dish"
  },
  {
    id: 3,
    src: "https://landmarksarchitects.com/wp-content/uploads/2024/10/Moroccan-Interior-Royal-Mansour10122024-1024x681.jpg",
    alt: "Café interior with traditional decor"
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/471682816/photo/fresh-baked-moroccan-cookies.jpg?s=612x612&w=0&k=20&c=kC5nQ329AHjwpahy7qqSRdLp6pNg-rcSMg1SR32azYA=",
    alt: "Fresh pastries and desserts"
  },
  {
    id: 5,
    src: "https://cdn.shopify.com/s/files/1/0623/2388/4287/files/tapis-laine-berbere_480x480.png?v=1716321611",
    alt: "Moroccan ambiance and decoration"
  },
  {
    id: 6,
    src: "https://media.istockphoto.com/id/471682816/photo/fresh-baked-moroccan-cookies.jpg?s=612x612&w=0&k=20&c=kC5nQ329AHjwpahy7qqSRdLp6pNg-rcSMg1SR32azYA=",
    alt: "Traditional Moroccan sweets"
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use the custom hook for scroll animations
  useScrollAnimation();
  
  return (
    <>
      <section id="gallery" className="py-20 sm:py-28 bg-cafe-offWhite" ref={sectionRef}>
        <div className="container mx-auto px-6 sm:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title mx-auto w-max">Our Gallery</h2>
            <p className="section-subtitle mx-auto">Experience the ambiance and flavors of our café</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="animate-on-scroll"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group relative"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-w-4 aspect-h-3 bg-cafe-brown/10">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cafe-brown/70 via-cafe-brown/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center transform scale-0 group-hover:scale-100 shadow-lg">
                        <ZoomIn className="text-cafe-brown" size={24} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-center">
                        <p>{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-cafe-brown/80 mb-4 italic">
              "Every dish tells a story of our rich Moroccan heritage"
            </p>
          </div>
        </div>
      </section>
      
      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-black/95 border-none p-2 overflow-hidden rounded-xl">
          <button 
            onClick={() => setSelectedImage(null)} 
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 backdrop-blur-sm z-50 hover:bg-white/20 transition-colors"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          {selectedImage && (
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center p-4">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-scale-in"
              />
              <p className="absolute bottom-4 left-0 right-0 text-center text-white/90 text-sm font-medium bg-black/40 py-3 backdrop-blur-sm">
                {selectedImage.alt}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GallerySection;
