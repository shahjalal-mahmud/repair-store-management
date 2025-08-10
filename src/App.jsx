import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-base-100 text-base-content">
      {/* Navigation */}
      <Navbar />

      {/* Hero / Intro Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
