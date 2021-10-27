import React from 'react'
import { Container } from './style'

interface StepProps {
  stepNumber: string
  content: string
}

export const Step: React.FC<StepProps> = ({ stepNumber, content }) => {
  return (
    <Container>
      <h1>Passo {stepNumber}</h1>
      <div></div>
      <p>{content}</p>
    </Container>
  )
}
