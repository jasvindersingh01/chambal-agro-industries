import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Nitesh Baragu",
    review: "Best agriculture implements.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    review: "Best reaper cum binder machine and service.",
    rating: 5,
  },
  {
    name: "Raj Singh Rajawat",
    review:
      "Very good place and well behaviour of owner Mr. Piyush Ji Khandelwal.",
    rating: 5,
  },
  {
    name: "Tejraj Singh",
    review: "Best rotavator performance in field. I am satisfied.",
    rating: 5,
  },
  {
    name: "Pannalal Dhakar",
    review: "Best spary machine for agriculture",
    rating: 5,
  },
  {
    name: "Rahul Rathore",
    review: "Dealer binder best product",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-50 px-6 scroll-mt-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-green-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real feedback from farmers and agro businesses we serve
        </p>
      </motion.div>

      {/* Slider */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                bg-white rounded-xl p-6
                shadow-md hover:shadow-lg
                transition
                h-full flex flex-col items-center text-center
              "
            >
              {/* Avatar */}
              <FaUserCircle className="text-gray-400 text-5xl mb-4" />

              {/* Name */}
              <h3 className="text-base font-semibold text-green-700">
                {item.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center text-yellow-400 text-lg my-2">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed mt-2 mb-">
                “{item.review}”
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA Buttons */}
      <div className="text-center mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href="https://www.google.com/search?q=Chambal+Agro+Industries+%2C+Kota+Reviews&oq=chambal+&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg5MgcIARAAGIAEMgYIAhBFGDsyDAgDEAAYFBiHAhiABDISCAQQLhgUGK8BGMcBGIcCGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINTc1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x396f8508dc040f63:0x5b030eb1ba060df3,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg font-medium shadow hover:bg-green-600 transition"
        >
          View All Google Reviews →
        </a>

        <a
          href="https://www.google.com/search?q=Chambal+Agro+Industries+%2C+Kota+Reviews&oq=chambal+&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg5MgcIARAAGIAEMgYIAhBFGDsyDAgDEAAYFBiHAhiABDISCAQQLhgUGK8BGMcBGIcCGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINTc1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x396f8508dc040f63:0x5b030eb1ba060df3,3,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-green-700 border-2 border-green-700 rounded-lg font-medium shadow hover:bg-green-50 transition"
        >
          Write a Review ★
        </a>
      </div>
    </section>
  );
}
