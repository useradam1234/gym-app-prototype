import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-black/80 to-gray-950/90"></div>
      
      {/* Decorative Shape */}
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gold-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-snug tracking-tighter text-shadow-lg">
            <span className="block">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
              Body Today
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto font-light">
            Join the premier fitness center in the city. State-of-the-art equipment, personalized coaching, and guaranteed results to help you achieve your best self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-gold-400 to-gold-500 hover:scale-105 transform transition-transform duration-300 text-gray-900 font-bold px-10 py-6 text-lg shadow-lg"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to start my transformation. What are your available programs?', '_blank')}
            >
              Get Started Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-gray-900 hover:scale-105 transform transition-transform duration-300 px-10 py-6 text-lg font-bold shadow-lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-70">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gold-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
