import { GlobalContainer } from '../../../styles/container'
import { Container, Logo, Wrapper, Space } from './style'

import { Link } from 'react-scroll'

import { useRouter } from 'next/router'

interface HeaderProps {
  background: string
}

export const Header: React.FC<HeaderProps> = ({ background }) => {
  const router = useRouter()

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('scroll-header')
      header.classList.toggle('sticky', window.scrollY > 10)
    })
  }

  return (
    <>
      <Space id="header" background={background} />
      <Container background={background} id="scroll-header">
        <GlobalContainer>
          <Wrapper>
            {router.pathname === '/' ? (
              <>
                <Link to="header" href="header" smooth={true}>
                  <Logo src="./assets/logo-horizontal.png" alt="logo" />
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
                    <Link to="cases" href="cases" smooth={true} offset={-80}>
                      Cases
                    </Link>
                  </li>
                  <li>
                    <Link to="hermes" href="hermes" smooth={true} offset={-80}>
                      A Hermes
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" href="contact" smooth={true}>
                      Contato
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <a href="/#header">
                  <Logo src="./assets/logo-horizontal.png" alt="logo" />
                </a>
                <ul>
                  <li>
                    <a href="/#services-performed">Serviços</a>
                  </li>
                  <li>
                    <a href="/#cases" className="cases-offset">
                      Cases
                    </a>
                  </li>
                  <li>
                    <Link to="hermes" href="hermes" smooth={true} offset={-80}>
                      A Hermes
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" href="contact" smooth={true}>
                      Contato
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </Wrapper>
        </GlobalContainer>
      </Container>
    </>
  )
}
