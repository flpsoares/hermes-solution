import { FloatImage } from '../../FloatImage'
import { Container, Logo } from './style'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo src="./assets/logo.png" alt="logo" />
      <ul>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Cases</a>
        </li>
        <li>
          <a href="#">A Hermes</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
      <FloatImage
        src="./assets/triangle.png"
        width="68px"
        height="55px"
        animation="horizontal"
        rotate="195"
        brightness="0.6"
        bottom="10px"
        left="600px"
      />
    </Container>
  )
}
