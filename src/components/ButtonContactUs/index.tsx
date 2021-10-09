import React from 'react'
import { Container } from './style'

interface ButtonContactUspROPS {
  size: string
}

export const ButtonContactUs: React.FC<ButtonContactUspROPS> = ({ size }) => {
  return <Container size={size}>Fale conosco</Container>
}
