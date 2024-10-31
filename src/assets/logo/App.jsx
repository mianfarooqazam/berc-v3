import { useEffect, useState } from 'react';
import Navbar from './pages/Navbar';
import introGif from './assets/general/intro.gif';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';
import OurImpact from './pages/OurImpact';
import Services from './pages/Services';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

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
        <div className="flex justify-center items-center h-screen">
          <img src={introGif} alt="Intro" />
        </div>
      ) : (
        <div>
          <Navbar />
          <section id="home" className="min-h-screen mb-0 pb-0">
  <Home />
</section>
<section id="team" className="min-h-screen mb-0 pb-0">
  <Team />
</section>
<section id="services" className="min-h-screen mb-0 pb-0">
  <Services />
</section>
<section id="gallery" className="min-h-screen mb-0 pb-0">
  <Gallery />
</section>
<section id="about-us" className="min-h-screen mb-0 pb-0">
  <AboutUs />
</section>
<section id="our-impact" className="min-h-screen mb-0 pb-0">
  <OurImpact />
</section>
<section id="news-events" className="min-h-screen mb-0 pb-0 overflow-hidden">
  <NewsEvents />
</section>

        </div>
      )}
    </div>
  );
};

export default App;
