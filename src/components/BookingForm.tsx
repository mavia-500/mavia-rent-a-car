"use client";

import { useState } from "react";
import { User, Phone, MapPin, Calendar, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupLocation: "",
    pickupDate: "",
    rentalType: "",
    carType: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const message = `
🚗 *New Car Booking Request*

 Name: ${formData.name}
Phone: ${formData.phone}
 Pickup Location: ${formData.pickupLocation}
 Pickup Date: ${formData.pickupDate}
 Rental Type: ${formData.rentalType}
 Car Type: ${formData.carType}
    `;

    const phoneNumber = "923200515737";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="glass-card p-6 max-w-6xl mx-auto -mb-24 relative z-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end"
      >
        <Input
          placeholder="Your Name"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          placeholder="Your Number"
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <Input
          placeholder="Pickup Location"
          onChange={(e) => handleChange("pickupLocation", e.target.value)}
        />
        <Input
          type="date"
          onChange={(e) => handleChange("pickupDate", e.target.value)}
        />

        <Select onValueChange={(value) => handleChange("rentalType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Rental Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="With Driver">With Driver</SelectItem>
            {/* <SelectItem value="Self Drive">Self Drive</SelectItem> */}
          </SelectContent>
        </Select>

        <Input
          placeholder="Car Name"
          onChange={(e) => handleChange("carType", e.target.value)}
        />

        <Button type="submit" className="bg-primary">
          Book
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
