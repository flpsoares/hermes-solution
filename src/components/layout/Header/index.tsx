import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'
import { Container, Logo, Wrapper } from './style'

export const Header: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
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
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/triangle.png"
        width="68px"
        height="55px"
        animation="horizontal"
        rotate="200"
        brightness="0.6"
        bottom="0"
        left="56rem"
      />
    </Container>
  )
}
