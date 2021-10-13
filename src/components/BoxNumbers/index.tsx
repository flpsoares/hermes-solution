import React, { ReactNode } from 'react'
import { Container } from './style'

interface BoxProps {
  title: string
  borderleft?: string
  borderright?: string
  bordertop?: string
  borderbottom?: string
}
export const BoxNumbers: React.FC<BoxProps> = ({
  title,
  borderleft,
  borderright,
  bordertop,
  borderbottom,
  children
}) => {
  return (
    <Container
      borderbottom={borderbottom}
      borderleft={borderleft}
      borderright={borderright}
      bordertop={bordertop}
    >
      <h1>{title}</h1>
      <span>{children}</span>
    </Container>
  )
}
