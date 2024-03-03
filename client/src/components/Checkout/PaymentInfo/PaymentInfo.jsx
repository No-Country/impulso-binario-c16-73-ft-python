import { Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { usePayment } from '../../../context/PaymentContext';

const PaymentInfo = () => {
  const { payment: { payment, total } } = usePayment();
  return (
    <Flex gap={8} color={'#333333'} p={'20px'} maxW={'50%'} flexDir={'column'}>
      <Flex gap={5} flexDir={'column'}>
        <Heading>
        Resumen de tu contribución
        </Heading>
        <Text color={'#7D7D7D'}>
        No te cobraremos en este momento. Si el proyecto alcanza la meta de financiamiento,
        se hará el cargo a tu método de pago cuando finalice la campaña.
        Te enviaremos un correo electrónico de confirmación a nombreusuario@gmail.com
        cuando tu contribución se haya procesado con éxito.
        </Text>
      </Flex>
      <Flex>
        <Image borderRadius={30} boxSize="200px" src={payment.project.mainImage}/>
        <Flex flexDir={'column'} justifyContent={'center'}>
          <Heading size={'sm'}>{payment.project.title}</Heading>
          <Text>{payment.project.progress}% financiado</Text>
          <Heading size={'xs'}>Por: {payment.project.user.name}</Heading>
        </Flex>
      </Flex>
      <Flex gap={8} flexDir={'column'}>
        <Heading size={'lg'}>Tu contribución</Heading>
        <Flex flexDir={'column'}>
          {payment.rewards.length > 0 ? payment.rewards.map((r, i) => (
            <Flex justifyContent={'space-between'} key={i}>
              <Heading size={'sm'}>Recompensa</Heading>
              <Heading size={'sm'}>{r.title}</Heading>
              <Heading size={'sm'}>${r.price}</Heading>
            </Flex>
          )) : <Heading size={'lg'}>${total}</Heading>}
        </Flex>
        <Divider borderColor={'#333333'} orientation='horizontal'/>
        <Flex>
          <Heading size={'md'}>Monto total</Heading>
          <Heading ml={'auto'} size={'sm'}>${total}</Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PaymentInfo;
