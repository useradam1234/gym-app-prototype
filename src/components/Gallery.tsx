import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
      alt: "Modern weightlifting area"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
      alt: "Cardio training area"
    },
    {
      src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070",
      alt: "Group class room"
    },
    {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070",
      alt: "Weightlifting equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070",
      alt: "Relaxation and stretching area"
    },
    {
      src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070",
      alt: "Modern changing rooms"
    }
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our modern spaces and high-quality equipment. A motivating atmosphere to help you achieve your goals.
          </p>
        </motion.div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="p-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                    <CardContent className="p-0 relative">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Search className="w-12 h-12 text-white" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-gray-800/50 hover:bg-gold-400 hover:text-black" />
          <CarouselNext className="text-white bg-gray-800/50 hover:bg-gold-400 hover:text-black" />
        </Carousel>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative"
          >
            <img 
              src={selectedImage}
              alt="Enlarged image"
              className="max-w-screen-xl max-h-screen object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-gold-400 hover:text-black rounded-full p-2 transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
