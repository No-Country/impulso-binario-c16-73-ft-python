import { Container, Divider, Flex, Grid, GridItem, Input, InputGroup, InputRightAddon, List, ListItem, Stack, Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Container maxW="none" p="0 30px" mt="24" mb="6">
      <Divider my="8" opacity="0.8"/>
      <Grid templateColumns="1fr 1fr">
        <GridItem>
          <Stack>
            <Text fontSize="lg" pl="16px">
              Mantente al día
            </Text>
            <InputGroup size="md" w="md" border="1px solid #333333" borderRadius="full" overflow="hidden">
              <Input placeholder="impulsobinario@gmail.com" border="none" boxShadow="none !important"/>
              <InputRightAddon children="Suscríbete" border="none" fontSize="lg" background="none"/>
            </InputGroup>
            <Text fontSize="lg" pl="16px">
              Suscríbete para recibir novedades al instante
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Flex justifyContent="space-around">
            <List>
              <ListItem fontSize="2xl" fontWeight="500">
                Soporte
              </ListItem>
              <ListItem fontSize="lg">Preguntas frecuentes</ListItem>
              <ListItem fontSize="lg">Contacto</ListItem>
            </List>
            <List>
              <ListItem fontSize="2xl" fontWeight="500">
                Sobre nosotros
              </ListItem>
              <ListItem fontSize="lg">Nuestra historia</ListItem>
            </List>
            <List>
              <ListItem fontSize="2xl" fontWeight="500">
                Social
              </ListItem>
              <ListItem fontSize="lg">Instagram</ListItem>
              <ListItem fontSize="lg">Facebook</ListItem>
              <ListItem fontSize="lg">Twitter</ListItem>
              <ListItem fontSize="lg">LinkedIn</ListItem>
            </List>
          </Flex>
        </GridItem>
      </Grid>
      <Flex justifyContent="space-between" mt="24">
        <Text>
          Impulso binario 2024
        </Text>
        <List display="flex" gap="6">
          <ListItem>Política de privacidad</ListItem>
          <ListItem>Términos de uso</ListItem>
        </List>
      </Flex>
    </Container>
  )
}

export default Footer