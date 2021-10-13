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
              <Link to="services-performed" smooth={true} offset={80}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to="cases" smooth={true}>
                Cases
              </Link>
            </li>
            <li>
              <Link to="hermes" smooth={true}>
                A Hermes
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true}>
                Contato
              </Link>
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
        left="48rem"
        responsive={{
          1250: { left: '28rem' },
          830: { left: '38rem', top: '-100rem' },
          630: { left: '24rem', top: '-100rem' },
          360: { left: '20rem', top: '-100rem' }
        }}
      />
    </Container>
  )
}
