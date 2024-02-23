import { Heading, HStack, Select } from '@chakra-ui/react';
import { useState } from 'react';

const sorts = [
  { name: 'Más recientes', value: 'newest'},
  { name: 'Más financiados', value: 'financed'},
  { name: 'Mayor cantidad de apoyadores', value: 'backers'},
  { name: 'Más próximos a expirar', value: 'expiration'},
];

const Sort = () => {
  const [sort, setSort] = useState('');
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
