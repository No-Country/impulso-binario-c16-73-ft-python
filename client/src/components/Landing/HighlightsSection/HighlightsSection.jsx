import { Flex, Grid, GridItem, Heading, Image, Link, Icon, Center } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

const link1 = 'https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/django-logo-big.jpg';
const link2 = 'https://miro.medium.com/v2/resize:fit:796/1*pYSuCdXwGakuRMhRue5fVA.png';

const Highlights = () => {
  return (
    <Flex flexDirection={'column'} w={'100%'}>
      <Heading color={'#333333'} p='20px'>
        Proyectos destacados
      </Heading>
      <Grid
        templateColumns={'1fr 1fr'}
        templateRows={'1fr 1fr'}
        minH='620px'>
        <GridItem
          colStart={1}
          colEnd={1}
          rowStart={1}
          rowEnd={1}
          bgColor={'black'}
          borderRadius={'0px 0px 100px 0px'}
          as={Center}
          h={'100%'}>
          <Image
            src={link1}
            w={'100%'}
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
            <Heading color={'#333333'} size={'xl'}>Svelte</Heading>
            <Heading color={'#007BFF'} fontWeight={'500'} size={'md'}>67% Financiado</Heading>
            <Heading fontWeight={'normal'} size={'md'} fontStyle={'italic'}>Por: Jane Doe</Heading>
            <Link
              mt={'auto'}
              fontWeight={'bold'}
              fontSize={'1em'}
              color={'#4D94FF'}
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
            <Heading color={'#333333'} size={'xl'}>Django Framework</Heading>
            <Heading color={'#007BFF'} fontWeight={'500'} size={'md'}>86% Financiado</Heading>
            <Heading fontWeight={'normal'} size={'md'} fontStyle={'italic'}>Por: John Doe</Heading>
            <Link
              mt={'auto'}
              fontWeight={'bold'}
              fontSize={'1em'}
              color={'#4D94FF'}
              as={ReactLink}> {<Icon fontSize={'1.5em'} as={ArrowForwardIcon} mx='10px'/>} Ver más </Link>
          </Flex>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={2}
          rowStart={2}
          rowEnd={2}
          bgColor={'#D9D9D9'}
          as={Center}
          h={'100%'}
          borderRadius={'0px 0px 0px 100px'}>
          <Image
            src={link2}
            w={'100%'}
            h={'100%'}
            objectFit={'cover'}
            alt={'HighlightImage 2'}/>
        </GridItem>
      </Grid>

    </Flex>
  );
};

export default Highlights;
