import {
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const languages = {
  languages: ['JavaScript', 'Python'],
};

const Filters = () => {
  const [filters, setFilters] = useState({
    programmingLanguage: '',
    price: {
      min: '',
      max: '',
    },
    progress: '',
  });
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, price: { ...filters.price, [e.target.name]: e.target.value } });
  };
  return (
    <Flex flexDir={'column'} w={'100%'}>
      <Flex mb={'30px'}>
        <Heading size={'md'} color={'#333333'}>
          Filtrar por:
        </Heading>
      </Flex>
      <Flex w={'inherit'}>
        <Select
          borderRadius={63}
          borderColor={'#333333'}
          _hover={{ borderColor: '#333333' }}
          onChange={handleFilterChange} placeholder={'Lenguaje'}>
          { languages.languages.map((l) => (
            <option key={l} value={l}>{l}</option>
          )) }
        </Select>
      </Flex>
      <Divider borderColor="#333333" my="20px" />
      <Stack direction={'column'}>
        <Heading size={'xs'}>Por cantidad financiada:</Heading>
        <VStack alignItems={'flex-start'} direction={'row'}>
          <InputGroup maxW={'200px'} borderColor={'#333333'}>
            <InputLeftAddon bgColor={'white'}>$</InputLeftAddon>
            <Input
              _hover={{ borderColor: '#333333' }}
              onChange={handlePriceChange}
              name='min'
              value={filters.price.min}/>
          </InputGroup>
          <InputGroup
            maxW={'200px'}
            borderColor={'#333333'}>
            <InputLeftAddon bgColor={'white'}>$</InputLeftAddon>
            <Input
              _hover={{ borderColor: '#333333' }}
              onChange={handlePriceChange}
              name='max'
              value={filters.price.max}/>
          </InputGroup>
          <Button
            alignSelf={'flex-start'}
            bgColor={'#007BFF'}
            color={'white'}
            border={'1px'}
            borderRadius={63}
            _hover={{ backgroundColor: '#007BFF' }}>
            Buscar
          </Button>
        </VStack>
      </Stack>
      <Divider borderColor="#333333" my="20px" />
      <RadioGroup onChange={handleFilterChange}>
        <Stack direction={'column'}>
          <Radio value={'complete'}>Porcentaje mayor a 100%</Radio>
          <Radio value={'incomplete'}>Porcentaje menor a 100%</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default Filters;
