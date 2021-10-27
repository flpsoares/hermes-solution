import React from 'react'
import { Container } from './style'

interface StepProps {
  stepNumber: string
  content: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export const Step: React.FC<StepProps> = ({
  stepNumber,
  content,
  top,
  right,
  bottom,
  left
}) => {
  return (
    <Container top={top} right={right} bottom={bottom} left={left}>
      <h1>Passo {stepNumber}</h1>
      <div></div>
      <p>{content}</p>
    </Container>
  )
}
