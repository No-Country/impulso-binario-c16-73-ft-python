import { CheckIcon } from "@chakra-ui/icons";
import { ButtonGroup, Card, CardBody, CardFooter, Flex, Heading, IconButton, Progress, Spacer, Stack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react"

const CardSuggestions = ({ title, image, imageAlt, description, userName }) => {
  return(
    <Card p="0 12px" boxShadow="none">
      <CardBody p="0">
        <Image
          src={image}
          alt={imageAlt}
          w={'100%'}
          aspectRatio="5/3"
          objectFit="contain"
          border={'1px inset black'}
        />
        <Stack p="3" spacing='3'>
          <Heading size='md' color="#333333">{title}</Heading>
          <Text fontSize='lg' lineHeight="1.2" fontWeight="500" color="#333333">
            {description}
          </Text>
          <Text fontSize='lg' fontWeight="400" as="i" color="#333333">
            {userName}
          </Text>
        </Stack>
        <Stack px="3" spacing="2">
          <Flex alignItems="flex-end">
            <Text fontSize="xl" fontWeight="500" lineHeight="1.2">
              $450
            </Text>
            <Spacer/>
            <Text fontSize="md" fontWeight="400" lineHeight="1.2" as="i" color="#007bff">
              60%
            </Text>
          </Flex>
          <Progress
            colorScheme="messenger"
            border="1px solid #007bff"
            borderRadius="lg"
            background="#ffffff"
            size="sm"
            value={60}
          />
          <Text fontSize="md" fontWeight="400" as="i" color="#333333" >
            Tiempo de expiración
          </Text>
        </Stack>
      </CardBody>
      <CardFooter px="3" py="2">
        <ButtonGroup spacing='2'>
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon color="#007bff"/>}
          />
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon color="#007bff"/>}
          />
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon color="#007bff"/>}
          />
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon color="#007bff"/>}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardSuggestions; 