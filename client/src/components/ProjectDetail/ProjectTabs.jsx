import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Heading, IconButton, Image, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import data from '../../utils/projects.json';
import { CheckIcon } from '@chakra-ui/icons';

function ProjectTabs() {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setProject(data.find((d) => d.id === parseInt(id)));
    return () => {
      setProject({});
    }
  }, [])

  const campain = useState({
    history: true,
    info: false
  })

  return (
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
      <TabPanels mt='10'>
        <TabPanel p='0'>
          <Grid gridTemplateColumns='1fr 3.5fr' gap='14'>
            <GridItem>
              <Stack w='fit-content'>
                <Button
                  px='8' py='6'
                  bg='transparent'
                  borderRadius='none'
                  borderLeft='3px solid #333333'
                  justifyContent='flex-start'
                  _hover={{borderLeft: '3px solid #007BFF', color: '#007BFF'}}>
                  Historia
                </Button>
                <Button
                  px='8' py='6'
                  bg='transparent'
                  borderRadius='none'
                  borderLeft='3px solid #333333'
                  justifyContent='flex-start'
                  _hover={{borderLeft: '3px solid #0051A9', color: '#007BFF'}}>
                  Información adicional
                </Button>
              </Stack>
            </GridItem>
            <GridItem>
              <Grid gridTemplateColumns='2.1fr 1fr' gap='5'>
                <GridItem>
                  <Heading size='md' fontWeight='400' mb='7'>
                    Historia
                  </Heading>
                  <Text textAlign='justify'>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                  </Text>
                  <ButtonGroup spacing='2' mt='12'>
                    <IconButton
                      size='xs'
                      isRound={true}
                      variant='transparent'
                      fontSize='16px'
                      icon={<CheckIcon color='#007BFF'/>}
                    />
                    <IconButton
                      size='xs'
                      isRound={true}
                      variant='transparent'
                      fontSize='16px'
                      icon={<CheckIcon color='#007BFF'/>}
                    />
                  </ButtonGroup>
                </GridItem>
                <GridItem border='1px solid #007BFF' borderRadius='3xl' px='5' py='8'>
                  <Flex flexDirection='column' gap='8'>
                    <Flex justifyContent='center' alignItems='center' gap='5%'>
                      <Box w='25%' aspectRatio='1/1'>
                        <Image 
                          w='100%' h='100%'
                          src={'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
                        />
                      </Box>
                      <Text fontStyle='italic'>
                        {project.user?.name}
                      </Text>
                    </Flex>
                    <Text textAlign='justify'>
                      Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
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
  )
}

export default ProjectTabs