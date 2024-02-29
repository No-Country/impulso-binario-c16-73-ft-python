import { CheckIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Image,
  Progress,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../utils/projects.json';

function ProjectDetail() {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setProject(data.find((d) => d.id === parseInt(id)));
    return () => {
      setProject({});
    }
  }, []);
  return (
    <>
      <Container maxW='none' p='0'>
        <Image
          src={'https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg'}
          alt={'banner-image'}
          w='100%'
          aspectRatio='5/1'
          objectFit='cover'
        />
      </Container>
      <Container maxW='none' px='75px'>
        <Breadcrumb my='25px'>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/home'>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              {project.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Grid templateColumns='1fr 1fr' gap='5'>
          <GridItem>
            <Image
              src={project.mainImage}
              alt={'project-image'}
              w='100%'
              aspectRatio='4/3'
              objectFit='contain'
            />
          </GridItem>
          <GridItem display='grid' gridTemplateRows='auto 1fr' gap='14'>
            <Stack spacing='4'>
              <Text as='h3' fontSize='2xl' lineHeight='1'>
                {'Categoría'}
              </Text>
              <Heading as='h2' fontWeight='500'>
                {project.title}
              </Heading>
              <Flex>
                <Image
                  src={'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
                  w='25px'
                />
                <Text ml='3' fontWeight='400' fontStyle='italic'>
                  {project.user?.name}
                </Text>
              </Flex>
            </Stack>
            <Stack justifyContent='space-between'>
              <Stack spacing='3.5'>
                <Flex justifyContent='space-between' alignItems='flex-end'>
                  <Text fontSize='3xl' fontWeight='500'>
                    ${project.amountCollected}
                  </Text>
                  <Text fontSize='xl' fontStyle='italic'>
                    {'N° de patrocinadores'}
                  </Text>
                </Flex>
                <Progress
                  colorScheme='messenger'
                  border='1px solid #007bff'
                  borderRadius='lg'
                  background='#ffffff'
                  size='sm'
                  value={project.progress}
                />
                <Flex justifyContent='space-between'>
                  <Text fontSize='xl' fontStyle='italic'>
                    {project.progress}%
                  </Text>
                  <Text fontSize='xl' fontStyle='italic'>
                    Quedan {project.expirationDate}
                  </Text>
                </Flex>
                <Link to={`/project/${project.id}/rewards`}>
                <Button
                  bg='#333333'
                  _hover={{ bg: '#484848' }}
                  color='#ffffff'
                  borderRadius='full'
                  size='lg'
                  fontSize='xl'
                  fontWeight='400'>
                    Patrocinar este proyecto
                </Button>
                  </Link>
              </Stack>
              <HStack mt='auto' spacing='4'>
                <Button
                  px='8'
                  size='lg'
                  bgColor='#ffffff'
                  border='2px solid #333333'
                  borderRadius='full'
                  fontSize='xl'
                  fontWeight='500'
                  leftIcon={<CheckIcon />}>
                  Guardar
                </Button>
                <ButtonGroup spacing='2'>
                  <IconButton
                    size='xs'
                    isRound={true}
                    variant='transparent'
                    fontSize='16px'
                    icon={<CheckIcon color='#333333'/>}
                  />
                  <IconButton
                    size='xs'
                    isRound={true}
                    variant='transparent'
                    fontSize='16px'
                    icon={<CheckIcon color='#333333'/>}
                  />
                  <IconButton
                    size='xs'
                    isRound={true}
                    variant='transparent'
                    fontSize='16px'
                    icon={<CheckIcon color='#333333'/>}
                  />
                  <IconButton
                    size='xs'
                    isRound={true}
                    variant='transparent'
                    fontSize='16px'
                    icon={<CheckIcon color='#333333'/>}
                  />
                </ButtonGroup>
              </HStack>
            </Stack>
          </GridItem>
        </Grid>
        <HStack mt='4'>
          <IconButton
            size='xs'
            isRound={true}
            variant='transparent'
            fontSize='16px'
            icon={<CheckIcon color='#333333'/>}
          />
          <Text fontSize='lg' fontStyle='italic'>
            {'Ubicación geografica'}
          </Text>
        </HStack>
      </Container>
      <Divider w='auto' mx='75px' my='8' borderColor='#333333' />
      <Tabs px='75px' variant='unstyled'>
        <TabList gap='4'>
          <Tab fontSize='lg' px='9'>Campaña</Tab>
          <Tab fontSize='lg' px='9'>Recompensas</Tab>
          <Tab fontSize='lg' px='9'>Preguntas frecuentes</Tab>
          <Tab fontSize='lg' px='9'>Comentarios</Tab>
        </TabList>
        <TabIndicator
          mt='-1.5px'
          height='3px'
          bg='#007BFF'
        />
        <TabPanels>
          <TabPanel>
            <p>one!</p>

          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default ProjectDetail