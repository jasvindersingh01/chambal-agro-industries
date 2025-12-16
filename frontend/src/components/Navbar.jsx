import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    return (
        <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed w-full bg-white shadow z-50 transition-all duration-300
        ${atTop ? "top-10" : "top-0"}
      `}
    >
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

                <div className="flex items-center gap-2 text-xl font-bold text-green-700">
                    <img
                        src={Logo}
                        alt="Chambal Agro Industries Logo"
                        className="w-18 h-auto"
                    />
                    <span>Chambal Agro Industries</span>
                </div>

                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <a href="#home" className="hover:text-green-700">Home</a>
                    <a href="#about" className="hover:text-green-700">About</a>
                    <a href="#products" className="hover:text-green-700">Products</a>
                    <a href="#gallery" className="hover:text-green-700">Gallery</a>
                    <a href="#contact" className="hover:text-green-700">Contact</a>
                </nav>

                <a
                    href="tel:9829037317"
                    className="hidden md:inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
                >
                    Call Now
                </a>
            </div>
          </motion.header>
    );
}
