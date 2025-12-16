import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/img1.avif",
    alt: "Agricultural machinery available at Chambal Agro Industries",
  },
  {
    id: 2,
    src: "/gallery/img2.avif",
    alt: "Reaper binder machine dealer in Kota",
  },
  {
    id: 3,
    src: "/gallery/img3.avif",
    alt: "Thresher machine stock at Chambal Agro Industries",
  },
  {
    id: 4,
    src: "/gallery/img4.avif",
    alt: "Dealer yard with agricultural machines",
  },
  {
    id: 5,
    src: "/gallery/img5.avif",
    alt: "Agricultural machine delivery to customer",
  },
  {
    id: 6,
    src: "/gallery/img6.avif",
    alt: "Shakti Kissan agricultural machinery dealer",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800">
            Gallery
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse of agricultural machinery, dealer stock, and customer
            deliveries at Chambal Agro Industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-md bg-white cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
