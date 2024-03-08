import Slider from "react-slick";
import { Box, Center, Flex, Heading, List } from "@chakra-ui/react";
import "./ReviewsSlider.css"
import { ArrowNext, ArrowPrev } from "../../../ArrowButton/ArrowButton";

const reviews = [
  { user: 'Samuel Gomez', comment: '¡Increíble experiencia en Impulso Binario! Gracias a la comunidad, logré financiar mi proyecto.'},
  { user: 'Carlos Costa', comment: 'Impulso Binario nos brindó el respaldo financiero necesario para lanzar nuestro proyecto de software.' },
  { user: 'Sandra Sanchez', comment: 'Gracias a Impulso Binario, mi sueño de desarrollar una innovadora aplicación se hizo realidad.' }
];

const ReviewsSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: dots => (
      <Box position={"absolute"} bottom={"5%"}>
        <List display={"flex"} justifyContent={'center'} gap={8}>
          {dots}
        </List>
      </Box>
    ),
    customPaging: i => (
      <Box
        w={"15px"}
        h={"15px"}
        border={"1px solid #ffffff"}
        borderRadius={"50%"}
      />
    )
  };
  return (
    <Flex
      className='reviews-slider'
      w={'100%'}
      minH={'600px'}
      bgColor={'#0051A9'}
      justifyContent={'center'}
      mt={'1'}>
      <Slider {...settings}>
        { reviews.map((review, i) => {
          return(
            <Center display={'flex !important'} w={'100%'} h={'100%'} textAlign={'center'} key={i}>
              <Flex
                maxW={'50%'}
                flexDir={'column'}
                transition={'transform 0.3s ease-in-out'}
                _hover={{ transform: 'scale(1.1)' }}>
                <Heading color={'#ffffff'} fontWeight={'200'}>
                  {review.user}
                </Heading>
                <Heading color={'#ffffff'}>
                  {review.comment}
                </Heading>
              </Flex>
            </Center>
          )})
        }
      </Slider>
    </Flex>
  );
}

export default ReviewsSlider