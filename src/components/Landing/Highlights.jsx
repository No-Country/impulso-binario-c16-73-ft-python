import { Flex, Grid, GridItem, Heading, Image, Link, Icon, Center } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

const link1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHz_J2O-AoneFJbKl45BylFl1DknBlgHf1A&usqp=CAU';
const link2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2afqg9dKWiRKn-lQCe5fxkqrxVeGKGkCvA&usqp=CAU';

const Highlights = () => {
  return (
    <Flex flexDirection={'column'} w={'100%'}>
      <Heading p='20px'>
        Proyectos destacados
      </Heading>
      <Grid
        templateColumns={'1fr 1fr'}
        templateRows={'1fr 1fr'}
        minH='720px'>
        <GridItem
          colStart={1}
          colEnd={1}
          rowStart={1}
          rowEnd={1}
          bgColor={'#D9D9D9'}
          as={Center}>
          <Image
            src={link1}
            h={'100%'}
            objectFit={'cover'}
            alt={'HighlightImage 1'}/>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={2}
          rowStart={1}
          rowEnd={1}
          p={'10px'}>
          <Flex flexDir={'column'} height={'100%'} gap={5}>
            <Heading size={'xl'}>Svelte</Heading>
            <Heading fontWeight={'500'} size={'md'}>128% Financiado</Heading>
            <Heading fontWeight={'normal'} size={'md'} fontStyle={'italic'}>Por: Jane Doe</Heading>
            <Link
              mt={'auto'}
              fontWeight={'bold'}
              fontSize={'1em'}
              as={ReactLink}> {<Icon fontSize={'1.5em'} as={ArrowForwardIcon} mx='10px'/>} Ver más </Link>
          </Flex>
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={1}
          rowStart={2}
          rowEnd={2}
          p={'10px'}>
          <Flex flexDir={'column'} height={'100%'} gap={5}>
            <Heading size={'xl'}>Django Framework</Heading>
            <Heading fontWeight={'500'} size={'md'}>165% Financiado</Heading>
            <Heading fontWeight={'normal'} size={'md'} fontStyle={'italic'}>Por: John Doe</Heading>
            <Link
              mt={'auto'}
              fontWeight={'bold'}
              fontSize={'1em'}
              as={ReactLink}> {<Icon fontSize={'1.5em'} as={ArrowForwardIcon} mx='10px'/>} Ver más </Link>
          </Flex>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={2}
          rowStart={2}
          rowEnd={2}
          bgColor={'#D9D9D9'}
          as={Center}>
          <Image
            src={link2}
            h={'100%'}
            objectFit={'cover'}
            alt={'HighlightImage 2'}/>
        </GridItem>
      </Grid>

    </Flex>
  );
};

export default Highlights;
