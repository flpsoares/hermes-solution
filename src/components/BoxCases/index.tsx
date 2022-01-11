import { Container, Overlay } from './style'

interface BoxCasesProps {
  title: string
  subtitle: string
  display?: string
  image: string
  link: string
}

export const BoxCases = (props: BoxCasesProps) => {
  return (
    <Container target="_blank" href={props.link} display={props.display}>
      <img src={props.image} alt={props.title} />
      <Overlay>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
      </Overlay>
    </Container>
  )
}
