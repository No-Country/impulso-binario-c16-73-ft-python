import { Heading, HStack, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BACKERS, EXPIRATION, FINANCED, NEWEST } from '../../../utils/constants';
import { useSortProjects } from '../../../context/ProjectsContext';

const sorts = [
  { name: 'Más recientes', value: NEWEST},
  { name: 'Más financiados', value: FINANCED},
  { name: 'Mayor cantidad de apoyadores', value: BACKERS},
  { name: 'Más próximos a expirar', value: EXPIRATION},
];

const Sort = () => {
  const [sort, setSort] = useState('');
  const useSort = useSortProjects();
  useEffect(() => {
    useSort(sort);
  }, [sort]);
  return (
    <HStack justifyContent={'flex-end'} mb={'40px'}>
      <Heading size='xs'>Ordenar por:</Heading>
      <Select
        borderRadius={63}
        borderColor={'#333333'}
        maxW={'200px'}
        _hover={{ borderColor: '#333333' }}
        onChange={(e) => setSort(e.target.value)}>
        { sorts.map((s, i) => (
          <option key={i} value={s.value}>{s.name}</option>
        )) }
      </Select>
    </HStack>
  );
};

export default Sort;
