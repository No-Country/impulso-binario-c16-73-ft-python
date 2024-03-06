import { Container, Image } from '@chakra-ui/react'
import React from 'react'

function Banner() {
  return (
    <Container maxW='none' p='0'>
      <Image
        src={'https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg'}
        alt={'banner-image'}
        w='100%'
        aspectRatio='5/1'
        objectFit='cover'
      />
    </Container>
  )
}

export default Banner