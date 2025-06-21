import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "25",
      period: "month",
      features: [
        "Free access to equipment",
        "Locker rooms and showers",
        "Hours: 6am-11pm",
        "Free parking"
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "45",
      period: "month",
      features: [
        "Everything from the Basic plan",
        "2 coaching sessions/month",
        "Unlimited group classes",
        "Meal plan",
        "Personalized follow-up"
      ],
      popular: true,
    },
    {
      name: "VIP",
      price: "75",
      period: "month",
      features: [
        "Everything from the Premium plan",
        "Unlimited coaching",
        "Access to VIP area",
        "Therapeutic massage",
        "Nutritionist consultation"
      ],
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{backgroundImage: 'url(/subtle-pattern.svg)'}}></div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">Subscriptions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the plan that suits your goals and budget. 
            All our subscriptions include full access to the gym.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`h-full flex flex-col relative ${plan.popular ? 'border-gold-400 scale-105 shadow-2xl shadow-gold-400/20' : 'border-gray-800'} transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border-2`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold-400 to-gold-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 mt-auto font-bold text-lg ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-gold-400 to-gold-500 hover:scale-105 transform transition-transform duration-300 text-gray-900 shadow-lg' 
                        : 'bg-gray-800 hover:bg-gold-400 text-white hover:text-gray-900 hover:scale-105 transform transition-transform duration-300'
                    }`}
                    onClick={() => window.open(`https://wa.me/1234567890?text=Hi! I am interested in the ${plan.name} plan at $${plan.price}/month.`, '_blank')}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            * All prices are in USD. Monthly or yearly payment available.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-gray-900 hover:scale-105 transform transition-transform duration-300"
            onClick={() => window.open('https://wa.me/1234567890?text=Hi! I would like more information about your prices and promotions.', '_blank')}
          >
            Questions about Pricing?
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
