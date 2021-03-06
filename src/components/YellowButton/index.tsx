import React from 'react'
import { Container } from './style'

interface YellowButtonProps {
  width: string
  height: string
}

export const YellowButton: React.FC<YellowButtonProps> = ({
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
