import IntroSection from '../components/Landing/IntroSection/IntroSection';
import HighlightsSection from '../components/Landing/HighlightsSection/HighlightsSection';
import CarouselSection from '../components/Landing/CarouselSection/CarouselSection';
import Suggestions from '../components/Landing/Suggestions';
import Footer from '../components/Footer/Footer';

const Landing = () => {
  return (
    <>
      <IntroSection />
      <HighlightsSection />
      <CarouselSection />
      <Suggestions />
      <Footer />
    </>
  );
};

export default Landing;
