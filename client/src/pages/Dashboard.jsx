import {
  Container,
  Tab,
  Tabs,
  TabList,
  TabIndicator,
  TabPanels,
  TabPanel
} from '@chakra-ui/react';
import FinancedProjects from '../components/Dashboard/FinancedProjects/FInancedProjects';
import Footer from '../components/Footer/Footer';
import UserData from '../components/Dashboard/UserData/UserData';
import UserProjects from '../components/Dashboard/UserProjects/UserProjects';

const Dashboard = () => {
  return (
    <>
      <Container
        mt={'10px'}
        maxW={'1800px'}
        gap={10}
        color={'#333333'}>
        <UserData />
        <Tabs>
          <TabList>
            <Tab>Proyectos financiados</Tab>
            <Tab>Proyectos creados</Tab>
          </TabList>
          <TabIndicator
            mt='-1.5px'
            height='3px'
            bg='#007BFF'/>
          <TabPanels>
            <TabPanel>
              <FinancedProjects />
            </TabPanel>
            <TabPanel>
              <UserProjects />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
