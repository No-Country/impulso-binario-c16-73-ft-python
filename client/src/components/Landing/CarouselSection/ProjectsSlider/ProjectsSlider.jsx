import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "./ProjectsSlider.css"
import { ArrowNext, ArrowPrev } from "../../../ArrowButton/ArrowButton";

const images = [
  'https://upsat.tn/wp-content/uploads/2022/11/Big-Data-et-IA-comment-peuvent-ils-aider-a-lutter-contre-les-cancers-1536x1024.jpg',
  'https://www.hernandosun.com/wp-content/uploads/2023/04/close-up-eye-scanning-768x574.jpg.webp',
  'https://game-ss.net/wp-content/uploads/2023/09/hologram-projector-screen-with-futuristic-technology.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLkIW9DOhcxFh8uLYube2bPK-AzS7Ywhi9Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrNVwxlBhUzwBd6H4YqdJckckasr4N6PjQw&usqp=CAU',
];

function PrevArrow(props) {
  const { onClick } = props;
  return <ArrowPrev left={"1%"} onClick={onClick}/>
}

function NextArrow(props) {
  const { onClick } = props;
  return <ArrowNext right={"1%"} onClick={onClick}/>
}

const ProjectsSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className='projects-slider'>
      <Slider {...settings}>
        {images.map((image, i) => {
          return(
            <Box px={'0.5'} display={'block !important'} key={i}>
              <Box aspectRatio={'4/5'} overflow={'hidden'}>
                <Image
                  src={image}
                  width={'100%'}
                  height={'100%'}
                  objectFit={'cover'}
                  transition={'.2s transform ease-out'}
                  _hover={{ transform: 'scale(1.1)' }}
                />
              </Box>
            </Box>
          )
        })}
      </Slider>
    </div>
  );
}

export default ProjectsSlider