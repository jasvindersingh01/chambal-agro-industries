import { motion } from "framer-motion";

const products = [
 {
  id: 1,
  name: "Tractor Mounted Reaper Binder",
  image: "/products/img1.avif",
  shortDesc:
    "Efficient tractor-mounted reaper binder for smooth harvesting with reduced labor and improved productivity.",
},
 {
  id: 2,
  name: "Agricultural Thresher Machine",
  image: "/products/img2.avif",
  shortDesc:
    "Reliable thresher machine designed for efficient grain separation and consistent post-harvest performance.",
},
 {
  id: 3,
  name: "Seed & Grain Cleaning Machine",
  image: "/products/img3.avif",
  shortDesc:
    "Effective machine for cleaning seeds and grains, ensuring better quality and market-ready output.",
},
  {
  id: 4,
  name: "Tractor Mounted Cultivator",
  image: "/products/img4.avif",
  shortDesc:
    "Heavy-duty cultivator for efficient soil preparation and improved field readiness before sowing.",
},
{
  id: 5,
  name: "Agricultural Seed Drill Machine",
  image: "/products/img5.avif",
  shortDesc:
    "Precision seed drill machine for uniform sowing, better spacing, and improved crop yield.",
},
{
  id: 6,
  name: "Tractor Trolley / Farm Trailer",
  image: "/products/img6.avif",
  shortDesc:
    "Durable tractor trolley for safe transportation of farm produce and agricultural materials.",
},
{
  id: 7,
  name: "Rotavator / Rotary Tiller",
  image: "/products/img7.avif",
  shortDesc:
    "Efficient rotavator for soil mixing, residue management, and quick seedbed preparation.",
},
{
  id: 8,
  name: "Tractor Mounted Disc Harrow",
  image: "/products/img8.avif",
  shortDesc:
    "Robust disc harrow for breaking hard soil and improving field conditions for cultivation.",
},
{
  id: 9,
  name: "Post Hole Digger / Auger Machine",
  image: "/products/img9.avif",
  shortDesc:
    "Efficient auger machine for drilling uniform holes for fencing and plantation work.",
},
];

export default function ProductsSection() {
  return (
       <section
      id="products"
      className="py-20 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800">
            Our Products
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We supply a wide range of agricultural and agro-processing machinery
            sourced from reputed brands, ensuring quality, durability, and
            performance for farmers and agro businesses.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-gray-50"
            >
              {/* Image */}
              <div className="overflow-hidden bg-white">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-56 object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mt-3">
                  {product.shortDesc}
                </p>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5"
                >
                  <a
                    href="#contact"
                    className="inline-block text-green-700 font-medium hover:underline"
                  >
                    Enquire Now →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  );
}
