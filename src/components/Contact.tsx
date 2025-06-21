import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Instagram, Facebook, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start your transformation? Contact us now for a free tour of our state-of-the-art facility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <InfoItem icon={<MapPin />} title="Address" text="123 Main Street, New York, NY 10001" />
                  <InfoItem icon={<Phone />} title="Phone" text="+1 234 567 890" />
                  <InfoItem icon={<Mail />} title="Email" text="contact@gymlaunch.com" />
                  <InfoItem icon={<Clock />} title="Hours" text="Mon - Sun: 6am - 11pm" />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="font-semibold text-white mb-4">Follow us</h4>
                  <div className="flex space-x-4">
                    <SocialButton icon={<Instagram />} link="https://instagram.com" />
                    <SocialButton icon={<Facebook />} link="https://facebook.com" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <ActionButton icon={<Phone />} text="Contact us on WhatsApp" link="https://wa.me/1234567890" />
              <ActionButton icon={<Phone />} text="Call Now" link="tel:1234567890" primary={false} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 shadow-lg">
              <CardContent className="p-2">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618033238622!2d-73.9856726845941!3d40.74844097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gym Location"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <div className="text-gold-400 mt-1 flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-300">{text}</p>
    </div>
  </div>
);

const SocialButton = ({ icon, link }) => (
  <Button
    variant="outline"
    size="icon"
    className="hover:bg-gold-400 hover:text-gray-900 border-gray-600 text-gray-300 transition-all duration-300"
    onClick={() => window.open(link, '_blank')}
  >
    {icon}
  </Button>
);

const ActionButton = ({ icon, text, link, primary = true }) => (
  <Button
    size="lg"
    className={`w-full font-semibold py-4 text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
      primary
        ? 'bg-gradient-to-r from-gold-400 to-gold-500 hover:scale-105 text-gray-900'
        : 'border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-gray-900 hover:scale-105 border-2'
    }`}
    onClick={() => window.open(link, '_blank')}
  >
    {icon}
    <span>{text}</span>
  </Button>
);

export default Contact;
