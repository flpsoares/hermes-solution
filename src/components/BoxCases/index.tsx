import { Container, Overlay } from './style'

interface BoxCasesProps {
  title: string
  url: string
}

export const BoxCases = (props: BoxCasesProps) => {
  return (
    <Container>
      <img src={props.url} alt={props.title} />
      <Overlay>
        <span>{props.title}</span>
      </Overlay>
    </Container>
  )
}
