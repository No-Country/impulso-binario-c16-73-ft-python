import { Container, Divider, Flex, Grid, GridItem, Input, InputGroup, InputRightAddon, List, ListItem, Stack, Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Container maxW="none" p="0 30px" mt="24" mb="3">
      <Divider my="8" opacity="0.8"/>
      <Grid templateColumns="1fr 1fr">
        <GridItem>
          <Stack color={'#007BFF'}>
            <Text fontSize="md" pl="4">
              Mantente al día
            </Text>
            <InputGroup size="md" w="md" border="1px solid #007BFF" borderRadius="full" overflow="hidden">
              <Input
                placeholder="impulsobinario@gmail.com"
                border="none"
                boxShadow="none !important"
              />
              <InputRightAddon
                children="Suscríbete"
                border="none"
                fontSize="md"
                background="none"
                cursor="pointer"
              />
            </InputGroup>
            <Text fontSize="md" pl="4">
              Suscríbete para recibir novedades al instante
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Flex color="#007BFF" justifyContent="flex-end" gap="16">
            <List>
              <ListItem fontSize="xl" fontWeight="500" mb="2">
                Soporte
              </ListItem>
              <ListItem fontSize="md">Preguntas frecuentes</ListItem>
              <ListItem fontSize="md">Contacto</ListItem>
            </List>
            <List>
              <ListItem fontSize="xl" fontWeight="500" mb="2">
                Sobre nosotros
              </ListItem>
              <ListItem fontSize="md">Nuestra historia</ListItem>
            </List>
            <List>
              <ListItem fontSize="xl" fontWeight="500" mb="2">
                Social
              </ListItem>
              <ListItem fontSize="md">Instagram</ListItem>
              <ListItem fontSize="md">Facebook</ListItem>
              <ListItem fontSize="md">Twitter</ListItem>
              <ListItem fontSize="md">LinkedIn</ListItem>
            </List>
          </Flex>
        </GridItem>
      </Grid>
      <Flex color="#007BFF" justifyContent="space-between" mt="24">
        <Text>
          Impulso binario 2024
        </Text>
        <List display="flex" gap="10">
          <ListItem>Política de privacidad</ListItem>
          <ListItem>Términos de uso</ListItem>
        </List>
      </Flex>
    </Container>
  )
}

export default Footer