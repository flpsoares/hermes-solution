import React from 'react'
import { Container } from './style'

import Carousel from 'react-elastic-carousel'

export const Banner: React.FC = () => {
  return (
    <Container>
      <Carousel isRTL={false}></Carousel>
    </Container>
  )
}
