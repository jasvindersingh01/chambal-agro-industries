import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="pt-[45px]">
        <Topbar />
      </div>
      <div className="mt-10">
        <Navbar />
      </div>
      <Home />
      <Footer />
    </>
  );
}
