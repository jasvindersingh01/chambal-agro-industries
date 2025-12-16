import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <Testimonial />
      <ContactSection />
    </>
  );
}
