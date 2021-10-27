import { GlobalContainer } from '../../../styles/container'
import { Container, Logo, Wrapper, Space } from './style'

import { Link } from 'react-scroll'

interface HeaderProps {
  background: string
}

export const Header: React.FC<HeaderProps> = ({ background }) => {
  // const [scrolled, setScrolled] = useState(false)

  // if (typeof window !== 'undefined') {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 100) {
  //       setScrolled(true)
  //     } else {
  //       setScrolled(false)
  //     }
  //   })
  // }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('scroll-header')
      header.classList.toggle('sticky', window.scrollY > 10)
    })
  }

  return (
    <>
      <Space background={background} />
      <Container background={background} id="scroll-header">
        <GlobalContainer>
          <Wrapper>
            <Link to="header" smooth={true} offset={-200}>
              <Logo src="./assets/logo.png" alt="logo" />
            </Link>
            <ul>
              <li>
                <Link
                  href="/services-performed"
                  to="services-performed"
                  smooth={true}
                  offset={-20}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="cases" smooth={true} offset={-80}>
                  Cases
                </Link>
              </li>
              <li>
                <Link to="hermes" smooth={true} offset={-80}>
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
      </Container>
    </>
  )
}
