import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import introGif from "./assets/general/intro.gif";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const App = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-white">
          <img src={introGif} alt="Intro" />
        </div>
      ) : (
        <div>
          <Navbar />
          <main className="mt-16"> {/* Adjust this margin based on navbar height */}
            <section id="home" className="min-h-screen mb-0 pb-0">
              <Home />
            </section>
            <section id="services" className="min-h-screen mb-0 pb-0">
              <Services />
            </section>
            <section id="gallery" className="min-h-screen mb-0 pb-0">
              <Gallery />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
