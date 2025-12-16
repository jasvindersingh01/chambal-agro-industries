import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

          <p className="text-gray-700 leading-relaxed mb-4">
            Chambal Agro Industries is a trusted and well-established dealer and
            supplier of agricultural and agro-processing machinery, serving
            farmers and agro-based businesses across Kota and nearby regions of
            Rajasthan. Since our establishment in 2011, we have been committed
            to providing reliable, high-quality farm machinery that supports
            modern and efficient agricultural practices.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We specialize in supplying a wide range of agricultural equipment,
            including threshers, reaper binders, grain and seed-related machines,
            and other agro machinery sourced from reputed and recognized brands
            in the industry. Our focus has always been on delivering machines
            that offer durability, performance, and value for money.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Located in the Indraprastha Industrial Area, Kota, Chambal Agro
            Industries has built strong relationships with farmers, traders, and
            agro businesses by maintaining transparency, fair pricing, and
            dependable service support. We understand the real needs of the
            agricultural sector and guide our customers in selecting the right
            equipment based on their usage, land size, and operational
            requirements.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
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
                transition={{ delay: i * 0.15 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <h4 className="font-semibold text-green-700">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            className="rounded-xl shadow-lg w-full object-cover"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute mt-2 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hidden md:block"
          >
            <p className="text-sm uppercase tracking-wide">
              Since 2011
            </p>
            <p className="text-md font-semibold">
              Trusted Agro Machinery Dealer
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}