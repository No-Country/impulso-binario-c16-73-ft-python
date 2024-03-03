import { createContext, useContext, useState, useEffect } from 'react';

export const PaymentContext = createContext(null);

export const PaymentProvider = ({ children }) => {
  const [
    payment,
    setPayment,
  ] = useState(JSON.parse(localStorage.getItem('payment') || '{"payment":{"project": {}, "rewards": []},"total" : 0}'));

  const setPaymentInfo = (payment, total) => {
    setPayment({
      payment,
      total,
    });
  };

  useEffect(() => {
    localStorage.setItem('payment', JSON.stringify(payment));
  }, [payment]);

  return (
    <PaymentContext.Provider value={{
      payment,
      setPaymentInfo,
    }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  return useContext(PaymentContext);
};
