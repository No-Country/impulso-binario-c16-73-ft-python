import Slider from "react-slick";
import CardSuggestions from "./CardSuggestions";
import data from '../../../utils/projects.json';
import './SuggestionsSlider.css'
import { Stack } from "@chakra-ui/react";
import { ArrowNext, ArrowPrev } from "../../ArrowButton/ArrowButton";

function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  return (
    <>
      { currentSlide !== 0 &&
        <ArrowPrev left={"0"} translate={"translateX(-50%)"} onClick={onClick}/>
      }
    </>
  );
}

function NextArrow(props) {
  const { onClick, currentSlide, slideCount } = props;
  return (
    <>
      { currentSlide !== slideCount - 3 &&
        <ArrowNext right={"0"} translate={"translateX(50%)"} onClick={onClick}/>
      }
    </>
  );
}

const SuggestionsSlider = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
    <Stack className="cards-slider" px={'30px'}>
      <Slider {...settings}>
        { data.slice(2, 6).map(card => {
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
    </Stack>
  );
}

export default SuggestionsSlider