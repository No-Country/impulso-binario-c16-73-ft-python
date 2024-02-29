import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useProject } from '../../../context/ProjectContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { project } = useProject();
  return (
    <Flex w={'100%'} flexDir={'column'}>
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        color={'white'}
        bgImage={`url(${project.mainImage})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        w="100%"
        h="250px"
      >
        <Flex
          w={'100%'}
          h={'100%'}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          bgColor={'rgba(0, 81, 169, 0.7)'}>
          <Heading>{project.title}</Heading>
          <Heading fontStyle={'italic'} size={'sm'}>{project.user?.name}</Heading>
        </Flex>
      </Flex>
      <Breadcrumb
        separator={<ChevronRightIcon fontSize={'30px'}/>}
        ml={'80px'}
        my={'30px'}>
        <BreadcrumbItem as={Heading} size={'sm'} fontWeight={'500'}>
          <BreadcrumbLink as={Link} to='/home'>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem as={Heading} size={'sm'} fontWeight={'500'}>
          <BreadcrumbLink as={Link} to={`/detail/${project.id}`}>
            {project.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Heading size={'sm'} fontWeight={'300'}>
            Recompensas
          </Heading>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

export default Header;

