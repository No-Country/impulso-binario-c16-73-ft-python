import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Container, Flex, Grid, GridItem, HStack, Heading, IconButton, Image, Progress, Stack, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import data from '../../utils/projects.json';
import { getDaysRemaining } from '../../utils/helpers';

function Detail() {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setProject(data.find((d) => d.id === parseInt(id)));
    return () => {
      setProject({});
    }
  }, [])
  return (
    <Container maxW='none' px='75px'>
      <Breadcrumb mt='8' mb='5' fontStyle='italic' color='#007bff'>
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
        <GridItem display='grid' gridTemplateRows='auto 1fr' gap='10'>
          <Stack spacing='4'>
            <HStack>
              { project.languages?.length > 0 && project.languages.map((l, i) => (
                <Text key={i} as='h3' fontSize='2xl' lineHeight='1' color='#007bff'>
                  {l}
                </Text>
              ))}
            </HStack>
            <Heading as='h2' fontWeight='500'>
              {project.title}
            </Heading>
            <Flex gap='3'>
              <Image
                src={'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
                w='25px'
              />
              <Text fontWeight='400' fontStyle='italic'>
                {project.user?.name}
              </Text>
            </Flex>
          </Stack>
          <Stack justifyContent='space-between'>
            <Stack spacing='3'>
              <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize='3xl' fontWeight='500'>
                  ${project.amountCollected}
                </Text>
                <Text fontSize='xl' fontStyle='italic'>
                  {`${project.backers} patrocinadores`}
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
                <Text fontSize='xl' fontStyle='italic' color='#007bff'>
                  {project.progress}%
                </Text>
                <Text fontSize='xl' fontStyle='italic'>
                  Quedan {getDaysRemaining(new Date(project.expirationDate))}
                </Text>
              </Flex>
              <Link to={`/project/${project.id}/rewards`}>
              <Button
                w='100%'
                bg='#007bff'
                color='#ffffff'
                borderRadius='full'
                size='md'
                fontSize='lg'
                fontWeight='400'
                _hover={{ bg: '#0051A9' }}>
                  Patrocinar este proyecto
              </Button>
                </Link>
            </Stack>
            <HStack mt='auto' spacing='4'>
              <Button
                color={'white'}
                px='8'
                size='lg'
                bgColor='#007bff'
                borderRadius='full'
                fontSize='lg'
                fontWeight='400'
                leftIcon={<CheckIcon />}>
                Guardar
              </Button>
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Detail