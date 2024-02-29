import React from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Grid } from '@chakra-ui/react'

export function ArrowPrev({ left, translate, onClick }) {
  return (
    <Grid
      className='arrow-button'
      placeItems={'center'}
      position={'absolute'}
      w={'50px'} h={'50px'}
      borderRadius={'50%'}
      bg={'#007BFF'}
      cursor={'pointer'}
      zIndex={'1'}
      left={left}
      transform={translate}
      visibility={'hidden'}
      onClick={onClick}>
      <ArrowBackIcon color="white" fontSize="24px"/>
    </Grid>
  )
}

export function ArrowNext({ right, translate, onClick }) {
  return (
    <Grid
      className='arrow-button'
      placeItems={'center'}
      position={'absolute'}
      w={'50px'} h={'50px'}
      borderRadius={'50%'}
      bg={'#007BFF'}
      cursor={'pointer'}
      zIndex={'1'}
      right={right}
      transform={translate}
      visibility={'hidden'}
      onClick={onClick}>
      <ArrowForwardIcon  color="white" fontSize="24px"/>
    </Grid>
  )
}