import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../components/Checkout/Payment/PaymentForm';
import PaymentInfo from '../components/Checkout/PaymentInfo/PaymentInfo';
import { Flex } from '@chakra-ui/react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY, {locale: 'es'});

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
};

const Checkout = () => {
  return (
    <Flex
      h={'100%'}
      justifyContent={'center'}
      maxW={'1800px'}
      mx={'auto'}
      mt={'80px'}
      gap={5}>
      <PaymentInfo />
      <Elements stripe={stripePromise} options={{...options, appearance: {
        variables: {
          borderRadius: '30px',
        },
      }}}>
        <PaymentForm />
      </Elements>
    </Flex>
  );
};

export default Checkout;
