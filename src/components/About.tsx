import { CheckCircle, Car, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutCars from "/assets/about-cars.jpg";

const features = [
  {
    icon: CheckCircle,
    title: "Easy Booking Process",
    description:
      "We have optimized the booking process so that our clients can experience the easiest and safest service.",
  },
  {
    icon: Car,
    title: "Wide Fleet Selection",
    description:
      "Economy, luxury, and SUVs available for family trips, corporate travel, and events.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 pt-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutCars}
              alt="Our Fleet"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
              <Shield className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-subtitle mb-4">About Us</p>
            <h2 className="section-title text-foreground mb-6">
              About Al Buraq Rent A car & Tour
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Based in Islamabad, Al Buraq Rent A car & Tour is a trusted name
              in nationwide car rental services, offering safe, comfortable, and
              affordable travel solutions across Pakistan.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="feature-icon shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/923200515737?text=can%20you%20share%20details%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary">Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
