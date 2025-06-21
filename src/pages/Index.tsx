import { useState } from 'react';
import { MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
