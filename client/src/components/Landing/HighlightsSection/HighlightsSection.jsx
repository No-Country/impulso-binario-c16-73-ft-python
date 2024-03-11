import { Flex, Grid, GridItem, Heading, Image, Link, Icon, Center } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

const link1 = 'https://img.freepik.com/foto-gratis/dispositivo-sujecion-hombre-tiro-medio_23-2149126943.jpg?w=1800&t=st=1708730025~exp=1708730625~hmac=40742497119bc74fda8953fe7b3eb341bc9690471def495a13e062e4d2fa1394';
const link2 = 'https://img.freepik.com/foto-gratis/alegre-empresaria-laptop-mirando-presentacion-virtual_74855-1514.jpg?w=1800&t=st=1708730126~exp=1708730726~hmac=6e94ba31c0c38f4d8bd658e40fae2e8946d75462d5ac3d8026baedcf05ebcbe3';

const Highlights = () => {
  return (
    <Flex flexDirection={'column'} w={'100%'} mt='8'>
      <Heading color={'#333333'} fontWeight={'500'} px='30px' py='8'>
        Proyectos destacados
      </Heading>
      <Grid
        templateColumns={'1fr 1fr'}
        templateRows={'1fr 1fr'}
        minH='620px'
        rowGap='7'>
        <GridItem
          colStart={1}
          colEnd={1}
          rowStart={1}
          rowEnd={1}
          borderRadius={'0px 0px 100px 0px'}
          as={Center}
          h={'100%'}>
          <Image
            src={link1}
            w={'100%'}
            boxShadow={'xl'}
            aspectRatio={'3/2'}
            borderRadius={'0px 0px 100px 0px'}
            alt={'HighlightImage 1'}/>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={2}
          rowStart={1}
          rowEnd={1}>
          <Flex flexDir={'column'} height={'100%'} px={'8'} py={'10'} gap={2}>
            <Heading color={'#333333'} fontWeight={'500'} size={'lg'}>Holo Gram</Heading>
            <Heading color={'#007BFF'} fontWeight={'400'} size={'md'}>67% Financiado</Heading>
            <Heading fontStyle={'italic'} fontWeight={'300'} size={'sm'}>Por: Jane Doe</Heading>
            <Link
              color={'#4D94FF'}
              fontSize={'md'}
              fontWeight={'400'}
              mt={'auto'}
              as={ReactLink}>
              {<Icon fontSize={'2xl'} as={ArrowForwardIcon} mx='10px'/>} Ver más
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={1}
          rowStart={2}
          rowEnd={2}>
          <Flex flexDir={'column'} height={'100%'} px={'8'} py={'10'} gap={2}>
            <Heading color={'#333333'} fontWeight={'500'} size={'lg'}>Un Touch</Heading>
            <Heading color={'#007BFF'} fontWeight={'400'} size={'md'}>86% Financiado</Heading>
            <Heading fontStyle={'italic'} fontWeight={'300'} size={'sm'}>Por: John Doe</Heading>
            <Link
              color={'#4D94FF'}
              fontSize={'md'}
              fontWeight={'400'}
              mt={'auto'}
              as={ReactLink}>
              {<Icon fontSize={'2xl'} as={ArrowForwardIcon} mx='10px'/>} Ver más
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={2}
          rowStart={2}
          rowEnd={2}
          as={Center}
          h={'100%'}
          borderRadius={'100px 0px 0px 0px'}>
          <Image
            src={link2}
            w={'100%'}
            boxShadow={'xl'}
            aspectRatio={'3/2'}
            borderRadius={'100px 0px 0px 0px'}
            alt={'HighlightImage 2'}/>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Highlights;
