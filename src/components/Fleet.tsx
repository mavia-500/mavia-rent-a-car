import { Users, DoorOpen, Briefcase, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const cars = [
  {
    name: "Alto",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "images (2).webp",
    price: 4500,
    persons: 4,
    doors: 4,
  },

  {
    name: "Corrola Gli",
    // category: 'Sedan',
    image: "Why-a-GLi-Car-is-a-Good-Rental-Vehicle-Choice-Featured-Image.jpg",
    price: 6000,
    persons: 4,
    doors: 4,
  },

  {
    name: "Altas Grande",
    // category: 'Sedan',
    image: "images (4).webp",
    price: 7000,
    persons: 4,
    doors: 4,
  },

  {
    name: "Toyota Yaris",
    // category: 'Sedan',
    image: "yaris3.webp",
    price: 6000,
    persons: 4,
    doors: 4,
  },

  {
    name: "Honda civic X shape",
    // category: 'Luxury Sedan',
    image: "2020_76.webp",
    price: 8000,
    persons: 4,
    doors: 4,
  },

  {
    name: "Honda civic 11 Gen",
    // category: 'Luxury Sedan',
    image: "Honda_Civic_e-HEV_Sport_(XI)_–_f_30062024.jpg",
    price: 12000,
    persons: 4,
    doors: 4,
  },

  {
    name: "Honda BRV",
    // category: 'Sedan',
    image: "Honda-BRV-2.webp",
    price: 8000,
    persons: 4,
    doors: 4,
  },
  {
    name: "Changan Karwan",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "Changan_Karvaan_.webp",
    price: 7000,
    persons: 6,
    doors: 4,
  },

  {
    name: "Toyota Revo",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "Rent-a-Toyota-Revo.jpg",
    price: 13000,
    persons: 4,
    doors: 4,
  },

  {
    name: "Fortuner",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "Toyota-Fortuner-Legender-2023-1-wpv_325x325.webp",
    price: 15000,
    persons: 6,
    doors: 4,
  },

  {
    name: "Prado",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "images (3).webp",
    price: 15000,
    persons: 6,
    doors: 4,
  },


  {
    name: "Land Cruiser V8",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "images (01).webp",
    price: 25000,
    persons: 6,
    doors: 4,
  },
  {
    name: "Mercedes C200",
    // category: 'Sedan',
    image: "203195_Mercedes_CClass_C200_0115.webp",
    price: 115000,
    persons: 4,
    doors: 4,
  },

  // {
  //   name: "Toyota Fortuner",
  //   category: "SUV",
  //   image: "car-fortuner.png",
  //   price: 15000,
  //   persons: 7,
  //   doors: 5,
  // },
  {
    name: "Audi A5",
    category: "Luxury Sedan",
    image: "Audi_A6_Front.jpg",
    price: 35000,
    persons: 4,
    doors: 4,
  },
  {
    name: "Audi A6",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "Audi_A6_Front.jpg",
    price: 40000,
    persons: 4,
    doors: 4,
  },






  {
    name: "Mercedes s class",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "mercedes-s-class-sedan-side-view-2022.webp",
    price: 120000,
    persons: 4,
    doors: 4,
  },

  {
    name: "Mercedes e300",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "781_1_39648.webp",
    price: 50000,
    persons: 4,
    doors: 4,
  },



  {
    name: "Range Rover",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "2022-range-rover-se-lwb-210-1665593853.webp",
    price: 120000,
    persons: 6,
    doors: 4,
  },



  {
    name: "Grand cabin",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "Toyota-Hiace-Grand-Cabin-for-Rent.webp",
    price: 12000,
    persons: 8,
    doors: 4,
  },

  {
    name: "Hiace",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "Cover.webp",
    price: 10000,
    persons: 8,
    doors: 4,
  },

  {
    name: "Coaster 4c",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "coaster2.webp",
    price: 16000,
    persons: 16,
    doors: 4,
  },

  {
    name: "Coaster 5c",
    // category: "2024-audi-a5-premium-plus-40-tfsi-quattro-angular-front-exterior-view_100906412_l.webp",
    image: "coster1.webp",
    price: 20000,
    persons: 16,
    doors: 4,
  },
];

const sendWhatsappMessage = (carName: string, carPrice: number) => {
  const message = `I want to book a ${carName} for Rs ${carPrice.toLocaleString()} per day. Please share details. `;
  const url = `https://wa.me/923200515737?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  window.open(message, "_blank");
};
const ITEMS_PER_LOAD = 5;

const Fleet = () => {

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  const handleShowLess = () => {
    setVisibleCount(ITEMS_PER_LOAD);
  };
  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle justify-center mb-4">Our Fleets</p>
          <h2 className="section-title text-foreground">
            Explore Our Perfect and Extensive Fleet
          </h2>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cars.slice(0, visibleCount).map((car) => (
            <div key={car.name} className="fleet-card">
              <div className="relative h-48 bg-muted flex items-center justify-center p-4">
                <img
                  src={`/assets/${car.image}`}
                  alt={car.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {car.name}
                </h3>

                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{car.persons} Persons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DoorOpen className="w-4 h-4" />
                    <span>{car.doors} door</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>bags</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      Rs {car.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground"> /day</span>
                  </div>
                  <Button onClick={() => sendWhatsappMessage(car.name, car.price)} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        <div className="text-center">
          {visibleCount < cars.length ? (
            <Button onClick={handleShowMore} className="btn-primary">
              Show More
            </Button>
          ) : (
            <Button onClick={handleShowLess} className="btn-primary">
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
