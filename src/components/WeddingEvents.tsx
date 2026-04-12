import React from "react";

const WeddingEvents = () => {
  const whatsappNumber = "+923200515737"; // replace with your number
  const message = encodeURIComponent(
    "Hi, I want details about wedding & event car rental services.",
  );

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid  gap-10 items-center">
        {/* LEFT SIDE - VIDEO */}
        <div className="w-full">
          <div className="relative w-full aspect-video">
            <video
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="/assets/AQPo-iVyTvad38UqN-4ctwPTVDDUkSFNF1d4iddyZz9DSqJbSCjvQUWSDSCzfNjlW1IM7I852L3MJDtMJZqt4DyH4btReyuyXZiLzoZJ-oRoyA (2).mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wedding & Event Car Rentals
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Make your special day unforgettable with our premium car rental
            services. We provide luxury cars for weddings, corporate events,
            parties, and special occasions. Enjoy comfort, elegance, and
            professional service tailored to your needs.
          </p>

          <ul className="text-gray-700 mb-6 space-y-2">
            <li>✔ Luxury cars for weddings</li>
            <li>✔ Chauffeur-driven service</li>
            <li>✔ Decorated cars available</li>
            <li>✔ Flexible hourly packages</li>
          </ul>

          {/* WHATSAPP BUTTON */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;
