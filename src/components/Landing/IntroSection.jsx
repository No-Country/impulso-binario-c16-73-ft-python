import { Image, Button, Heading, Grid, GridItem, Link, Icon, Center } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import IntroImage from '../../assets/introImage.jpeg';

const IntroSection = () => {
  return (
    <Grid
      templateRows={'0.9fr 0.1fr'}
      templateColumns={'1fr 1fr'}
      width={'100%'}>
      <GridItem
        colStart={1}
        colEnd={1}
        rowStart={1}
        rowEnd={1}>
        <Center width={'100%'}
          p='10px'
          h={'100%'}>
          <Heading
            textAlign={'center'}>
          Queremos facilitar la conexión entre inversores interesados en respaldar
          iniciativas digitales y los emprendedores que buscan financiación
          para sus proyectos.
          </Heading>
        </Center>
      </GridItem>
      <GridItem
        colStart={1}
        colEnd={1}
        rowStart={2}
        rowEnd={2}>
        <Button
          ml={'30px'}
          bgColor={'white'}
          border={'1px'}
          borderRadius={63}
          _hover={{ backgroundColor: 'white' }}>
          <Link as={ReactLink}>
            {<Icon as={ArrowForwardIcon}/>} Explorar Proyectos
          </Link>
        </Button>
      </GridItem>
      <GridItem
        colStart={2}
        rowSpan={2}>
        <Image h={'auto'} w={'100%'} objectFit={'cover'} alt="Intro Image" src={IntroImage}/>
      </GridItem>
    </Grid>
  );
};

export default IntroSection;
