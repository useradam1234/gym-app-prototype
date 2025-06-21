import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <a
        href="https://wa.me/1234567890?text=Hi! I would like more information about your services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-500 text-gray-900 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-50 -z-10"></span>
        
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Need help? Chat with us!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-800"></div>
        </div>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
