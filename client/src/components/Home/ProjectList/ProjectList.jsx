import { SimpleGrid, GridItem, Center, Heading } from '@chakra-ui/react';
import { useProjects } from '../../../context/ProjectsContext';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectList = () => {
  const { projects } = useProjects();
  return (
    <Center>
      <SimpleGrid columns={3}>
        {
          projects.map((el) => (
            <GridItem key={el.id}>
              <ProjectCard
                id={el.id}
                amountCollected={el.amountCollected}
                description={el.description}
                expirationDate={el.expirationDate}
                mainImage={el.mainImage}
                progress={el.progress}
                title={el.title}
                user={el.user}
                languages={el.languages}/>
            </GridItem>
          ))
        }
        {!projects.length && <Heading size={'md'}>No se encontraron proyectos</Heading>}
      </SimpleGrid>
    </Center>
  );
};

export default ProjectList;
