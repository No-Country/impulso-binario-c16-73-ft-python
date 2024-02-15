import { CheckIcon } from "@chakra-ui/icons";
import { Box, ButtonGroup, Card, CardBody, CardFooter, Flex, Heading, IconButton, Progress, Spacer, Stack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react"

const CardSuggestions = ({ title, image, imageAlt, description, userName }) => {
  return(
    <Card maxW='md' boxShadow="none">
      <CardBody p="0">
        <Image
          src={image}
          alt={imageAlt}
        />
        <Stack px="4" py="3" spacing='3'>
          <Heading size='lg' color="#333333">{title}</Heading>
          <Text fontSize='xl' lineHeight="1.2" fontWeight="500" color="#333333">
            {description}
          </Text>
          <Text fontSize='lg' fontWeight="400" as="i" color="#333333">
            {userName}
          </Text>
        </Stack>
        <Stack px="4" spacing="2">
          <Flex>
            <Text fontSize="xl" fontWeight="500" lineHeight="1.2">
              $450
            </Text>
            <Spacer/>
            <Text fontSize="xl" fontWeight="500" lineHeight="1.2">
              60%
            </Text>
          </Flex>
          <Progress
            borderRadius="lg"
            background="#f2f2f2"
            size="lg"
            value={60}
          />
          <Text fontSize="sm" as="i" color="#333333" >
            Tiempo de expiración
          </Text>
        </Stack>
      </CardBody>
      <CardFooter p="4">
        <ButtonGroup spacing='2'>
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon />}
          />
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon />}
          />
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon />}
          />
          <IconButton
            size="xs"
            isRound={true}
            variant="transparent"
            fontSize='16px'
            icon={<CheckIcon />}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardSuggestions; 