import { Container } from './style'

interface NumberProps {
  number: string
  title: string
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export const Number = (props: NumberProps) => {
  return (
    <Container
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}
    >
      <h2>{props.number}</h2>
      <p>{props.title}</p>
    </Container>
  )
}
