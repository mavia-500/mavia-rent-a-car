import { useState } from "react";
import { Menu, X, Phone, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [

  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Available Cars", href: "#fleet" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sendWhatsappMessage = () => {
    const message = `I want to book a car . Please share details. `;
    const url = `https://wa.me/923200515737?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    window.open(message, "_blank");
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex flex-col">
              <img src="/favicon.ico" alt="" className="w-20 h-20" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={() => sendWhatsappMessage()} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              <Phone className="w-4 h-4 mr-2" />
              Book A Rental
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              Book A Rental
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
