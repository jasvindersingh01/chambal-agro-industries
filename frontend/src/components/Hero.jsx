import heroimg from "../assets/heroimg.jpg";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center bg-gray-900 text-white"
        >
            <div
                className="absolute inset-0 bg-cover object-center"
                style={{ backgroundImage: `url(${heroimg})` }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    Chambal Agro Industries
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
                >
                    Trusted Dealer & Supplier of Agricultural Machinery in Kota, Rajasthan.
                    Providing reliable agro equipment from reputed brands since 2011.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-8 flex flex-wrap gap-4"
                >
                    <motion.a
                        href="#products"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-md font-semibold transition"
                    >
                        View Machines
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
                    >
                        Get Quote
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
