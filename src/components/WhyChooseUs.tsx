import { Car, Headphones, MapPin, Shield } from 'lucide-react';
import carFortuner from '/assets/car-fortuner.png';

const features = [
  {
    icon: Car,
    title: 'Extensive Fleet Options',
    description: 'Choose from economy, luxury, SUVs, and vans to match any travel need.',
  },
  {
    icon: Headphones,
    title: 'Exceptional Customer Service',
    description: 'Dedicated support team ensuring hassle-free booking and smooth journeys.',
  },
  {
    icon: MapPin,
    title: 'Convenient Locations',
    description: 'Easily accessible pickup and drop-off points across major cities in Pakistan.',
  },
  {
    icon: Shield,
    title: 'Reliability and Safety',
    description: 'Well-maintained vehicles and trained staff focused on safe, dependable travel.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle justify-center mb-4">Why Choose Us</p>
          <h2 className="section-title text-foreground">
            Unmatched Quality and Service for Your Needs
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature) => (
              <div key={feature.title} className="flex gap-4 text-right lg:flex-row-reverse">
                <div className="feature-icon shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="bg-gradient-to-b from-primary/10 to-transparent rounded-full p-8">
              <img 
                src={carFortuner} 
                alt="Premium Car" 
                className="w-full animate-float"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            {features.slice(2, 4).map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="feature-icon shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
