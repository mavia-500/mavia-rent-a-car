import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "/assets/hero-bg.jpg";
import BookingForm from "./BookingForm";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-secondary-foreground">
          <p className="section-subtitle justify-center mb-4">
            Welcome to Al Buraq Rent A car & Tours
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wider leading-tight">
            Drive Your Journey with Comfort & Confidence
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're planning a weekend getaway, a business trip, or just
            need a reliable ride,any event we offer a wide range of vehicles
            to fit your travel needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

            <a href="#fleet">
              <Button className="btn-primary text-lg py-6" size="lg">
                Available Cars
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Booking Form */}
        <BookingForm />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <div className="w-3 h-3 rounded-full bg-secondary-foreground/30" />
      </div>
    </section>
  );
};

export default Hero;
