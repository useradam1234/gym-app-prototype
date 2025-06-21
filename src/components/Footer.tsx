import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    { title: "Home", id: "hero" },
    { title: "About", id: "about" },
    { title: "Pricing", id: "pricing" },
    { title: "Gallery", id: "gallery" },
    { title: "Contact", id: "contact" }
  ];

  const contactInfo = [
    { icon: <MapPin />, text: "123 Main Street, New York, NY 10001" },
    { icon: <Phone />, text: "+1 234 567 890" },
    { icon: <Mail />, text: "contact@gymlaunch.com" }
  ];

  return (
    <footer className="pt-16 pb-8 border-t-2 border-gold-400">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Logo />
              <span className="text-2xl font-extrabold text-white">Gym Launch</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-light">
              The premier fitness center in the city. Transform your body and 
              achieve your goals with our state-of-the-art equipment and expert coaches.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-gold-400 tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-0.5 bg-gray-500 mr-3 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-gold-400 transition-all duration-300"></span>
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-gold-400 tracking-wider">CONTACT</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-gold-400 mt-1 mr-3 flex-shrink-0">{item.icon}</span>
                  <span className="font-light">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Gym Launch. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <SocialIcon link="https://instagram.com" icon={<Instagram />} />
            <SocialIcon link="https://facebook.com" icon={<Facebook />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Footer;
