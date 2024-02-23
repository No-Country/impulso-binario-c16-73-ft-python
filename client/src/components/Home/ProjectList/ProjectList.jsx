import { SimpleGrid, GridItem, Center } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard/ProjectCard';
import data from '../../../utils/projects.json';


const ProjectList = () => {
  return (
    <Center>
      <SimpleGrid columns={3}>
        {
          data.map((el) => (
            <GridItem key={el.id}>
              <ProjectCard
                id={el.id}
                amountCollected={el.amountCollected}
                description={el.description}
                expirationDate={el.expirationDate}
                mainImage={el.mainImage}
                progress={el.progress}
                title={el.title}
                user={el.user}/>
            </GridItem>
          ))
        }
      </SimpleGrid>
    </Center>
  );
};

export default ProjectList;
