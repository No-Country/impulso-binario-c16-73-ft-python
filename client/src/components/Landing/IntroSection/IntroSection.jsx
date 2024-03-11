import { Image, Button, Heading, Grid, GridItem, Link, Icon, Center } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

const IntroSection = () => {
  return (
    <Grid
      templateRows={'0.9fr 0.1fr'}
      templateColumns={'1fr 1.4fr'}
      width={'100%'}>
      <GridItem
        colStart={1}
        colEnd={1}
        rowStart={1}
        rowEnd={1}>
        <Center width={'100%'}
          px='50px'
          h={'100%'}>
          <Heading
            color={'#333333'}
            fontSize='3.1vw'
            fontWeight={'500'}
            textAlign={'left'}>
            Conéctate con innovación: Descubre y respalda proyectos digitales hoy
          </Heading>
        </Center>
      </GridItem>
      <GridItem
        colStart={1}
        colEnd={1}
        rowStart={2}
        rowEnd={2}>
        <Button
          ml={'50px'}
          bgColor={'white'}
          color={'#4D94FF'}
          border={'2px solid #4D94FF'}
          borderRadius={63}
          _hover={{ backgroundColor: 'white' }}>
          <Link
            fontWeight={'500'}
            to={'/home'}
            as={ReactLink}>
            {<Icon as={ArrowForwardIcon} fontSize={'xl'}/>} Explorar proyectos
          </Link>
        </Button>
      </GridItem>
      <GridItem
        colStart={2}
        rowSpan={2}
        aspectRatio={'3/2'}>
        <Image
          w={'100%'} h={'100%'}
          objectFit={'cover'}
          boxShadow={'2xl'}
          alt="Intro Image" 
          src={'https://img.freepik.com/foto-gratis/primer-plano-mano-presionando-pantalla_53876-101866.jpg?w=2000&t=st=1708729948~exp=1708730548~hmac=89191ca2dce66db6b10c6fc0338d587d6e66f0b7dabbde6aba1abdf5fd11da78'}
        />
      </GridItem>
    </Grid>
  );
};

export default IntroSection;
