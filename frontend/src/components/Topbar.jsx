import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Topbar() {
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopbar(window.scrollY > 50);
    };

    handleScroll(); // initial run
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        hidden md:block
        fixed top-0 left-0 w-full z-[60]
        bg-green-800 text-white text-sm
        transition-transform duration-300
        ${hideTopbar ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <span>📍 Indraprastha Industrial Area, Kota</span>
          <span className="opacity-60">|</span>
          <a href="tel:9829037317" className="hover:underline">
            📞 +91 9829037317
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@chambalagroindustries.com"
            className="hover:underline"
          >
            ✉️ info@chambalagroindustries.com
          </a>

          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://www.facebook.com/ChambalAgroIndustries/"
              aria-label="Facebook"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaFacebookF size={13} />
            </a>

            <a
              href="https://www.instagram.com/chambal_agro_industries/"
              aria-label="Instagram"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaInstagram size={13} />
            </a>

            <a
              href="https://wa.me/919829037317"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaWhatsapp size={13} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
