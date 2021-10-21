import React from 'react'
import { Container } from './style'

interface TransparentButtonProps {
  width: string
  height: string
}

export const TransparentButton: React.FC<TransparentButtonProps> = ({
  width,
  height,
  children
}) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  )
}
