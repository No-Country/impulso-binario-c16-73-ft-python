import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Progress,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getDaysRemaining } from '../../../utils/helpers';

const DashboardCard = ({
  id,
  title,
  mainImage,
  user: { name },
  description,
  amountCollected,
  progress,
  expirationDate,
  languages,
}) => {
  return (
    <Card p="0 12px" boxShadow="none">
      <CardBody>
          <Stack p={'3'}>
            <Image
              borderRadius={27}
              src={mainImage}
              objectFit="contain"
              boxSize="200px"
              />
          </Stack>
          <LinkBox>
          <Stack
            p="3"
            spacing="3"
            >
            <Heading size="md" color="#333333">
              <LinkOverlay as={Link} to={`/detail/${id}`}>
                {title}
              </LinkOverlay>
            </Heading>
            <Text noOfLines={2} fontSize="lg" lineHeight="1.2" fontWeight="500" color="#333333">
              {description}
            </Text>
            <Text fontSize="lg" fontWeight="400" as="i" color="#333333">
              {name}
            </Text>
            <Heading size="sm">Lenguajes:</Heading>
            <Stack direction="row" spacing={2}>
              {languages.map((language, index) => (
                <Text key={index} fontSize="sm" bg="gray.200" px="2" py="1" borderRadius="md">
                  {language}
                </Text>
              ))}
            </Stack>
          </Stack>
              </LinkBox>
        <Stack px="3" spacing="2">
          <Flex alignItems="flex-end">
            <Text fontSize="xl" fontWeight="500" lineHeight="1.2">
              ${amountCollected}
            </Text>
            <Spacer />
            <Text fontSize="md" fontWeight="400" lineHeight="1.2" as="i" color="#007bff">
              {progress}%
            </Text>
          </Flex>
          <Progress
            colorScheme="messenger"
            border="1px solid #007bff"
            borderRadius="lg"
            background="#ffffff"
            size="sm"
            value={progress}
          />
          <Text fontSize="md" fontWeight="400" as="i" color="#333333">
            Quedan {getDaysRemaining(new Date(expirationDate))}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DashboardCard;