import { ReactNode } from 'react'
import { Container } from './style'

interface BoxProps {
  title: string
  borderleft?: string
  borderright?: string
  bordertop?: string
  borderbottom?: string
  children: ReactNode
}
export const BoxNumbers = (props: BoxProps) => {
  return (
    <Container
      borderbottom={props.borderbottom}
      borderleft={props.borderleft}
      borderright={props.borderright}
      bordertop={props.bordertop}
    >
      <h1>{props.title}</h1>
      <p>{props.children}</p>
    </Container>
  )
}
