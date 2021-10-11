import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'
import { Container, Logo, ResponsiveImage, Wrapper } from './style'

import { Link } from 'react-scroll'

export const Header: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Logo src="./assets/logo.png" alt="logo" />
          <ul>
            <li>
              <Link to="services-performed" smooth={true} offset={80} href="#">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="cases" smooth={true} href="#">
                Cases
              </Link>
            </li>
            <li>
              <Link to="hermes" smooth={true} href="#">
                A Hermes
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} href="#">
                Contato
              </Link>
            </li>
          </ul>
        </Wrapper>
      </GlobalContainer>
      <ResponsiveImage>
        <FloatImage
          src="./assets/triangle.png"
          width="68px"
          height="55px"
          animation="horizontal"
          rotate="200"
          brightness="0.6"
          bottom="0"
          left="48rem"
        />
      </ResponsiveImage>
    </Container>
  )
}
