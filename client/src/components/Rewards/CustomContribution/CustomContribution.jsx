import { useState } from 'react';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const CustomContribution = ({ handleSelection }) => {
  const [amount, setAmount] = useState(false);
  const toast = useToast();
  const handleSubmit = () => {
    if (!amount || amount < 1) {
      toast({
        status: 'error',
        title: 'El aporte debe valer por lo menos $1',
        duration: 4000,
      });
      return;
    }
    handleSelection(null, amount);
  };
  return (
    <Flex
      alignItems={'center'}
      borderRadius={30}
      border={'1px'}
      borderColor={'#333333'}
      justifyContent={'center'}
      p={'20px'}>
      <Heading>Contribuir sin recompensa</Heading>
      <Flex gap={2} ml={'auto'}>
        <Input
          maxW={'200px'}
          min={1}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Agrega un importe'
          type='number'
          value={amount}/>
        <Button
          bgColor={'#007BFF'}
          borderRadius={30}
          color={'white'}
          _hover={{ backgroundColor: '#007BFF' }}
          onClick={handleSubmit}>
          Pagar
        </Button>
      </Flex>
    </Flex>
  );
};

export default CustomContribution;
