/* eslint-disable max-len */
import { Flex, Heading, ListItem, UnorderedList, Tooltip } from '@chakra-ui/react';

const Questions = () => {
  return (
    <Flex
      p={'20px'}
      border={'1px'}
      borderColor={'#333333'}
      borderRadius={30}
      flexDir={'column'}
      alignItems={'center'}
      gap={10}
      maxW={'300px'}
      maxH={'370px'}
      mt={'75px'}>
      <Heading size={'sm'} fontWeight={'500'} color={'#333333'}>
        Preguntas frecuentes
      </Heading>
      <UnorderedList color={'#7D7D7D'} whiteSpace={'normal'}>
        <ListItem>
          <Tooltip
            label="La financiación colectiva funciona permitiendo a los usuarios apoyar proyectos con una contribución monetaria a cambio de recompensas, como productos, acceso a contenido exclusivo, o simplemente un agradecimiento."
            placement="bottom-start">
            <span>¿Cómo funciona la financiación colectiva en Impulso Binario?</span>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip
            label="Ambas plataformas ofrecen medidas de seguridad, incluyendo la protección de los pagos y la capacidad de reembolsar contribuciones en caso de que un proyecto no alcance su meta de financiación."
            placement="bottom-start">
            <span>¿Es seguro hacer contribuciones en Impulso Binario?</span>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip
            label="Si un proyecto no alcanza su meta de financiación, los fondos recaudados se devuelven a los contribuyentes. Ambos sitios tienen políticas específicas sobre cuándo y cómo se reembolsan los fondos, por lo que es importante revisar estas políticas antes de contribuir."
            placement="bottom-start">
            <span>¿Qué sucede si un proyecto no alcanza su meta de financiación en Impulso Binario?</span>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip
            label="Los creadores de proyectos suelen proporcionar actualizaciones regulares sobre el progreso del proyecto y la entrega de los productos o servicios prometidos. Sin embargo, es importante leer las políticas de la plataforma y revisar las reputaciones de los creadores de proyectos antes de contribuir."
            placement="bottom-start">
            <span>¿Cómo se garantiza la entrega de los productos o servicios prometidos en un proyecto de financiación colectiva?</span>
          </Tooltip>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default Questions;
