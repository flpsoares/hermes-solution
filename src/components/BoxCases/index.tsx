import { Container, Overlay } from './style'

interface BoxCasesProps {
  title: string
  subtitle: string
  display?: string
  url: string
}

export const BoxCases = (props: BoxCasesProps) => {
  return (
    <Container display={props.display}>
      <img src={props.url} alt={props.title} />
      <Overlay>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
      </Overlay>
    </Container>
  )
}
