import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Agenda from "./components/Agenda";
import Lokasi from "./components/Lokasi";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Tentang />
      <Agenda />
      <Lokasi />
      <Footer />
    </div>
  );
}