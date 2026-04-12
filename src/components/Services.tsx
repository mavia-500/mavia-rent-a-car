import { Car, Users, Plane, PartyPopper, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { useHref } from 'react-router-dom';

const services = [

  {
    icon: Users,
    title: 'Car Rental with Driver',
    description: 'Reliable car rental with drivers for smooth journeys.',
    href: '#fleet'
  },
  {
    icon: Plane,
    title: 'Airport Pickup',
    description: 'Trusted airport transfer for safe, fast and calm rides.',
    href: '#fleet'
  },
  {
    icon: PartyPopper,
    title: 'Weddings and Events',
    description: 'Premium vehicles for your events & weddings.',
    href: '#fleet'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 dark-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle justify-center mb-4">Our Services</p>
          <h2 className="section-title">
            Explore Our Wide Range of Rental Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (


            <div key={service.title} className="service-card group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-foreground/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-foreground/70 mb-6 group-hover:text-primary-foreground/80 transition-colors">
                {service.description}
              </p>
              <button className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center group-hover:bg-primary-foreground transition-colors">
                <ArrowRight className="w-5 h-5 text-secondary-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          ))}
        </div>

        {/* Description & CTA */}
        <div className="text-center">
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-8">
            Discover our range of car rental services designed to meet all your travel needs.
            From a diverse fleet of vehicles to flexible rental plans.
          </p>
          {/* <Button variant="outline" className="btn-outline">
            View All Services
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
