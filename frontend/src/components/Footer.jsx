import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={Logo}
              alt="Chambal Agro Industries Logo"
              className="w-16 h-auto"
            />
            <h3 className="text-xl font-bold text-white">
              Chambal Agro Industries
            </h3>
          </div>

          <p className="text-sm leading-relaxed">
            Trusted dealer and supplier of agricultural machinery in Kota,
            Rajasthan. Providing reliable agro equipment from reputed brands
            with honest guidance and customer-focused service.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              📍 319(E, G-1, Rd Number 6, Indraprastha Industrial Area,<br />
              Kota, Rajasthan, 324005
            </li>
            <li>
              📞{" "}
              <a href="tel:9829037317" className="hover:text-white">
                +91 9829037317
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:info@chambalagroindustries.com"
                className="hover:text-white"
              >
                info@chambalagroindustries.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/ChambalAgroIndustries/"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-700 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/chambal_agro_industries/"
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-700 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-700 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="tel:9829037317"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-700 transition"
              aria-label="Call"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Chambal Agro Industries. All Rights Reserved.
          <span className="mx-2 hidden sm:inline">|</span>
        <span className="block sm:inline mt-1 sm:mt-0">
          Designed & Developed by{" "}
          <a
            href="https://rightadsdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-500 font-semibold transition"
          >
            Right Ads
          </a>
        </span>
      </div>
    </footer>
  );
}
