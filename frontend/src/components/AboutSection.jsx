import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-800 mb-6"
          >
            About Chambal Agro Industries
          </motion.h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Chambal Agro Industries is a trusted and well-established dealer and
              supplier of agricultural and agro-processing machinery, serving
              farmers and agro-based businesses across Kota and nearby regions of
              Rajasthan. Since our establishment in 2011, we have been committed
              to providing reliable, high-quality farm machinery.
            </p>

            <p>
              We specialize in supplying a wide range of agricultural equipment,
              including threshers, reaper binders, grain and seed-related
              machines, and other agro machinery sourced from reputed brands.
            </p>

            <p>
              Located in the Indraprastha Industrial Area, Kota, we have built
              strong relationships through transparency, fair pricing, and
              dependable service support, helping customers choose the right
              equipment for their needs.
            </p>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {[
              {
                title: "Trusted Dealer Network",
                desc: "Supplying machines from reputed agricultural machinery brands.",
              },
              {
                title: "Customer-Focused Approach",
                desc: "Right guidance, right machine, and honest support.",
              },
              {
                title: "Competitive Pricing",
                desc: "Best value solutions for farmers and agro businesses.",
              },
              {
                title: "Reliable Support",
                desc: "Assistance in machine selection and after-sales coordination.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="
                  bg-white p-5 rounded-xl
                  shadow-sm hover:shadow-md
                  border border-gray-100
                  transition
                "
              >
                <h4 className="font-semibold text-green-700">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="Chambal Agro Industries Machinery"
            className="rounded-2xl shadow-xl w-full object-cover"
          />

          {/* BADGE – FIXED POSITION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="
              absolute bottom-4 right-4
              bg-green-700 text-white
              px-5 py-3 rounded-xl
              shadow-lg
              text-center
            "
          >
            <p className="text-xs uppercase tracking-wide opacity-90">
              Since 2011
            </p>
            <p className="text-sm font-semibold">
              Trusted Agro Machinery Dealer
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
