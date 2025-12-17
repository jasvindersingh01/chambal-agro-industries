import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setHideTopbar(isScrolled);
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed left-0 w-full z-50 transition-all duration-300
          ${hideTopbar ? "top-0" : "md:top-[36px] top-0"}
          ${
            scrolled
              ? "bg-white/95 shadow-lg backdrop-blur-md"
              : "bg-white"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

     
          <a href="#home" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Chambal Agro Industries Logo"
              className="w-14 h-auto"
            />
            <span className="text-lg md:text-xl font-bold text-green-800">
              Chambal Agro Industries
            </span>
          </a>

          <nav className="hidden md:flex gap-6 font-medium text-gray-700">
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

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800 text-3xl"
            aria-label="Toggle Menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.header>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-[64px] left-0 w-full z-40 bg-white shadow-md md:hidden overflow-hidden"
      >
        <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="tel:9829037317"
            className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded-md font-semibold text-center"
          >
            Call Now
          </a>
        </nav>
      </motion.div>
    </>
  );
}
