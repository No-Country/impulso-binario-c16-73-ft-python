import { useEffect, useState } from 'react';
import { Button, Flex, Heading, Spinner, useToast } from '@chakra-ui/react';
import {
  PaymentElement,
  useElements,
} from '@stripe/react-stripe-js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProjects } from '../../../context/ProjectsContext';
import { usePayment } from '../../../context/PaymentContext';
import { useUser } from '../../../context/UserContext';

const PaymentForm = () => {
  const elements = useElements();
  const toast = useToast();
  const navigate = useNavigate();
  const { payment: { total } } = usePayment();
  const { id } = useParams();
  const { setProjects, projects } = useProjects();
  const { setFinancedProjects } = useUser();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(projects.find((p) => p.id == id));
  }, projects);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!elements) {
      return;
    }
    const {error: submitError} = await elements.submit();
    if (submitError) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const paymentElement = elements.getElement(PaymentElement);
      toast({
        status: 'success',
        title: 'Pago realizado con exito',
        duration: 3000,
      });
      setLoading(false);
      paymentElement.clear();
      const updatedProjects = projects.map((p) =>{
        if (parseInt(id) === p.id) {
          const newAmount = p.amountCollected + parseInt(total);
          return {
            ...p,
            amountCollected: newAmount,
            backers: p.backers++,
          };
        }
        return p;
      });
      setProjects(updatedProjects);
      setFinancedProjects((oldState) => oldState.concat([updatedProjects.find((p) => p.id === parseInt(id))]));
      setTimeout(() => {
        navigate('/user/dashboard');
      }, 3500);
    }, 1300);
  };

  return (
    <Flex
      border={'1px'}
      borderColor={'#333333'}
      borderRadius={30}
      flexDir={'column'}
      w={'50%'}
      p={'20px'}
      justifyContent={'space-between'}>
      <Flex flexDir={'column'} gap={10}>
        <Flex justifyContent={'space-between'} alignItems={'flex-end'}>
          <Heading size={'lg'}>Agregar método de pago</Heading>
          <Link to={`/project/${id}/rewards`}>Atrás</Link>
        </Flex>
        <PaymentElement />
      </Flex>
      <Flex>
        <Button
          bgColor={'#007BFF'}
          borderRadius={30}
          _hover={{ backgroundColor: '#007BFF' }}
          onClick={handleSubmit}
          p={'30px'}
          w={'100%'}>
          { !loading ? <Heading size={'md'} color={'white'}>
            Contribuir
          </Heading> : <Spinner /> }
        </Button>
      </Flex>
    </Flex>
  );
};

export default PaymentForm;
