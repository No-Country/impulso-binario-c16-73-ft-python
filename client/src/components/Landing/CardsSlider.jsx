import Slider from "react-slick";
import CardSuggestions from "./CardSuggestions";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import data from '../../utils/projects.json';

function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  return (
    <>
      { currentSlide !== 0 &&
        <div className="arrow prev-arrow" onClick={onClick}>
          <ArrowBackIcon color="white" fontSize="24px"/>
        </div>
      }
    </>
  );
}

function NextArrow(props) {
  const { onClick, currentSlide, slideCount } = props;
  return (
    <>
      { currentSlide !== slideCount - 3 &&
        <div className="arrow next-arrow" onClick={onClick}>
          <ArrowForwardIcon  color="white" fontSize="24px"/>
        </div>
      }
    </>
  );
}

const CardsSlider = () => {
  var settings = {
    className: 'hola',
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.slice(2, 6).map(card => {
          return(
            <CardSuggestions
              key={card}
              title={card.title}
              image={card.mainImage}
              imageAlt="Netflix image"
              description={card.description}
              userName={card.user.name}
            />
          )
        })}
      </Slider>
    </div>
  );
}

export default CardsSlider