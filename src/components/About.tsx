import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, HeartPulse, User, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const services = [
    {
      title: "Weightlifting",
      description: "Professional equipment for all levels",
      icon: <Dumbbell className="w-10 h-10" />
    },
    {
      title: "Cardio Training", 
      description: "Latest generation cardio machines",
      icon: <HeartPulse className="w-10 h-10" />
    },
    {
      title: "Personal Coaching",
      description: "Personalized follow-up with our certified coaches",
      icon: <User className="w-10 h-10" />
    },
    {
      title: "Group Classes",
      description: "Zumba, CrossFit, Yoga and more",
      icon: <Users className="w-10 h-10" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{backgroundImage: 'url(/subtle-pattern.svg)'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">Gym Launch</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Since 2018, we have been helping our members achieve their fitness goals. 
            Our team of experts and our state-of-the-art equipment make the difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="text-center h-full bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 hover:border-gold-400/50 shadow-lg transition-all duration-300 group" 
              >
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="p-4 bg-gray-800/50 rounded-full mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
                    <div className="text-gold-400 transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-400 mb-6">
              At Gym Launch, we believe that everyone deserves to achieve their fitness goals. 
              Our modern 800m² facility provides a motivating and safe environment for your transformation.
            </p>
            <ul className="space-y-4 text-gray-300">
              {[
                "Open 7 days a week from 6am to 11pm",
                "Over 100 modern pieces of equipment", 
                "Certified coaches available",
                "Locker rooms and showers included"
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center"
                >
                  <span className="w-2.5 h-2.5 bg-gold-400 rounded-full mr-4 shadow-[0_0_10px_theme(colors.gold.400)]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070" 
              alt="Inside of Gym Launch"
              className="relative rounded-lg shadow-2xl w-full h-96 object-cover border-4 border-gray-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
