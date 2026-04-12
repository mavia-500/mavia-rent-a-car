import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialSidebar = () => {
  return (
    <>
      {/* Left Social Sidebar */}
      {/* <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <Facebook className="w-5 h-5" />
        </a>
      </div> */}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+923200515737"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
      >
        <IoLogoWhatsapp className="w-7 h-7" />
      </a>
    </>
  );
};

export default SocialSidebar;
