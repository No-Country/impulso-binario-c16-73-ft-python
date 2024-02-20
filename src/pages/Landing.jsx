import IntroSection from '../components/Landing/IntroSection';
import Highlights from '../components/Landing/Highlights';
import Carousels from '../components/Landing/Carousels/Carousels';
import Suggestions from '../components/Landing/Suggestions';
import Footer from '../components/Footer/Footer';

const Landing = () => {
  return (
    <>
      <IntroSection />
      <Highlights />
      <Carousels />
      <Suggestions />
      <Footer />
    </>
  );
};

export default Landing;
