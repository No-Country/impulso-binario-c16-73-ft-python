import {
  Icon,
  Flex,
  Image,
  Heading,
  Box,
  Center,
  Button,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const Carousel = ({ items, numItems, carouselType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState(items.slice(currentIndex, numItems));
  const goToPrevious = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastIndex = currentIndex === items.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Logica para rotar el array cuando se llega al final.
    const effectiveStartIndex = currentIndex % items.length;
    const effectiveEndIndex = (currentIndex + numItems) % items.length;
    const shouldRotate = effectiveEndIndex < effectiveStartIndex;
    const slicedArray = shouldRotate ? [
      ...items.slice(effectiveStartIndex),
      ...items.slice(0, effectiveEndIndex),
    ] : items.slice(effectiveStartIndex, effectiveEndIndex);
    setCurrentItems(slicedArray);
  }, [currentIndex]);
  return (
    <Flex _hover={{ '.carousel-btn': { visibility: 'visible' } }}>
      <Box
        className={'carousel-btn'}
        visibility={'hidden'}
        position='relative'
        display={'flex'}
        justifyContent={'center'}
        transition={'visibility 0.3s ease-in-out'}>
        <Button
          position='absolute'
          top={'50%'}
          left={'10'}
          h={'54px'}
          w={'54px'}
          transform='translateY(-50%)'
          bgColor={'#007BFF'}
          borderRadius={100}
          _hover={{ backgroundColor: '#007BFF' }}
          zIndex={2}
          onClick={goToPrevious}>
          <Icon color={'white'} as={ArrowBackIcon}/>
        </Button>
      </Box>
      <Flex
        w={'100%'}
        minH={'600px'}
        justifyContent={'center'}>
        { carouselType === 'images' && currentItems.map((p, i) => (
          <Image
            w={'33.33%'}
            objectFit={'fill'}
            key={i}
            src={p}
            transition={'transform 0.3s ease-in-out'}
            _hover={{ transform: 'scale(1.1)' }}
          />
        )) }
        { carouselType === 'reviews' && currentItems.map((p, i) => (
          <Center w={'100%'} bgColor={'#0051A9'} textAlign={'center'} key={i}>
            <Flex
              transition={'transform 0.3s ease-in-out'}
              _hover={{ transform: 'scale(1.1)' }}
              maxW={'50%'}
              flexDir={'column'} >
              <Heading color={'#ffffff'} fontWeight={'200'}>{p.user}</Heading>
              <Heading color={'#ffffff'}>{p.comment}</Heading>
            </Flex>
          </Center>
        )) }
      </Flex>
      <Box
        className={'carousel-btn'}
        visibility={'hidden'}
        position={'relative'}
        display={'flex'}
        justifyContent={'center'}
        transition={'visibility 0.3s ease-in-out'}>
        <Button
          position='absolute'
          top={'50%'}
          right={'10'}
          h={'54px'}
          w={'54px'}
          transform='translateY(-50%)'
          onClick={goToNext}
          bgColor={'#007BFF'}
          borderRadius={100}
          zIndex={2}
          _hover={{ backgroundColor: '#007BFF' }}>
          <Icon color={'white'} as={ArrowForwardIcon}/>
        </Button>
      </Box>
    </Flex>
  );
};

export default Carousel;
