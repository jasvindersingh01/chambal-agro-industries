import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Nitesh Baragu",
    review:
      "Best agriculture impliments.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    review:
      "Best reaper cum binder machine and service.",
    rating: 5,
  },
  {
    name: "Raj Singh Rajawat",
    review:
      "Very good place and well behaviour of owner Mr.Piyush ji khandelwal.",
    rating: 5,
  },
  {
    name: "Tejraj Singh",
    review:
      "Best rotavator performance in field. I m satisfied.",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-100 px-6 scroll-mt-20">
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

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition min-h-[300px]"
            >
             
              <div className="flex justify-center">
                <FaUserCircle className="text-gray-400 text-6xl" />
              </div>

              <h3 className="text-lg font-semibold text-center mt-4 text-green-700">
                {item.name}
              </h3>

              <div className="flex justify-center text-yellow-400 text-xl my-2">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <p className="text-gray-600 mt-3 text-center leading-relaxed text-sm">
                “{item.review}”
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href="https://www.google.com/search?sca_esv=99bb3a357913b4a3&sxsrf=AE3TifPUTUsJEMwATCNOy70hsxzgnWrGvQ:1765887222287&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8qLYGDu92MX1_gPSOarDCmeqAiKrg49DtezJsXMqMLMJVFC-EH5iDqcphV2Tj08CQgiWZo6eetPi507CnGnJmSY9vWLG6d5TFJCTGRBeUP_zzHymw%3D%3D&q=Chambal+Agro+Industries+,+Kota+Reviews&sa=X&ved=2ahUKEwjh9-PEisKRAxUdTWwGHaebOkUQ0bkNegQIIhAD&biw=1536&bih=738&dpr=1.25"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg font-medium shadow hover:bg-green-600 transition"
        >
          View All Google Reviews →
        </a>

        <a
          href="https://www.google.com/search?sca_esv=99bb3a357913b4a3&sxsrf=AE3TifPUTUsJEMwATCNOy70hsxzgnWrGvQ:1765887222287&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8qLYGDu92MX1_gPSOarDCmeqAiKrg49DtezJsXMqMLMJVFC-EH5iDqcphV2Tj08CQgiWZo6eetPi507CnGnJmSY9vWLG6d5TFJCTGRBeUP_zzHymw%3D%3D&q=Chambal+Agro+Industries+,+Kota+Reviews&sa=X&ved=2ahUKEwjh9-PEisKRAxUdTWwGHaebOkUQ0bkNegQIIhAD&biw=1536&bih=738&dpr=1.25"
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
