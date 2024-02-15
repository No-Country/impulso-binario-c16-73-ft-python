import Slider from "react-slick";
import CardSuggestions from "./CardSuggestions";

const CardsSlider = () => {
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
    <div className="slider-container">
      <Slider {...settings}>
        {[1,2,3,4,5,6].map(card => {
          return(
            <CardSuggestions
              key={card}
              title="Movie Site"
              image="https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/3f386378a409fec422ba26eb7e52112f/Android_Collage_1920x1080_Vietnam_Vi.jpg"
              imageAlt="Netflix image"
              description="Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies."
              userName="Netflix"
            />
          )
        })}
      </Slider>
    </div>
  );
}

export default CardsSlider