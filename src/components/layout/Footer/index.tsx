import React from 'react'
import { GlobalContainer } from '../../../styles/container'
import {
  Cases,
  Container,
  Email,
  Grid,
  Hermes,
  Icons,
  Info,
  Services,
  Whatsapp,
  Title,
  Wrapper,
  ErasedTitle,
  BottomFooter
} from './style'

import { Link } from 'react-scroll'

import { ImLinkedin2, ImFacebook, ImYoutube2 } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'

export const Footer: React.FC = () => {
  return (
    <>
      <Container id="contact">
        <GlobalContainer>
          <Grid>
            <Info>
              <img src="./assets/logo.png" alt="logo" />
              <span>
                A Hermes Solutions é uma empresa que foca em atingir o melhor
                resultado possível para nossos clientes, oferecendo soluções divinas
                em nossos projetos.
              </span>
            </Info>
            <Services>
              <Wrapper>
                <Title>Serviços</Title>
                <ul>
                  <li>
                    <a href="#">E-commerce</a>
                  </li>
                  <li>
                    <a href="#">CMS e CRM</a>
                  </li>
                  <li>
                    <a href="#">Sites</a>
                  </li>
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">Social media</a>
                  </li>

                  <li>
                    <a href="#">Audiovisual</a>
                  </li>
                  <li>
                    <a href="#">Tráfego Pago/SEO</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Design e Design Thinking</a>
                  </li>
                  <li>
                    <a href="#">Inteligência de dados</a>
                  </li>
                </ul>
              </Wrapper>
            </Services>
            <Cases>
              <Wrapper>
                <Title>Cases</Title>
                <ul>
                  <li>
                    <a href="#">Aiba</a>
                  </li>
                  <li>
                    <a href="#">Parcelao Delivery</a>
                  </li>
                  <li>
                    <a href="#">Parque Global</a>
                  </li>
                  <li>
                    <a href="#">Grupo atitude emocional</a>
                  </li>
                  <li>
                    <a href="#">FTD</a>
                  </li>
                  <li>
                    <a href="#">Natura</a>
                  </li>
                  <li>
                    <a href="#">Caixa econômica</a>
                  </li>
                  <li>
                    <a href="#">Cielo</a>
                  </li>
                </ul>
              </Wrapper>
            </Cases>
            <Hermes>
              <Wrapper>
                <Title>A Hermes</Title>
                <ul>
                  <li>
                    <Link to="who-we-are" smooth={true} offset={-80}>
                      Quem somos
                    </Link>
                  </li>
                  <li>
                    <Link to="customers" smooth={true} offset={-160}>
                      Clientes
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" smooth={true}>
                      Contato
                    </Link>
                  </li>
                </ul>
              </Wrapper>
            </Hermes>
            <Whatsapp>
              <ErasedTitle>WhatsApp</ErasedTitle>
              <p>11 988209426 - Cesar Santiago</p>
            </Whatsapp>
            <Email>
              <ErasedTitle>Email</ErasedTitle>
              <p>contato@hermessolutions.agency</p>
            </Email>
            <Icons>
              <a
                href="https://www.instagram.com/hermes_solutions/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin2 size={20} />
              </a>
              <a
                href="https://www.facebook.com/Ag%C3%AAncia-Digital-Hermes-Solutions-102458504867056/"
                target="_blank"
                rel="noreferrer"
              >
                <ImFacebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/hermes-solutions/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={20} />
              </a>
              {/* <a href="#">
                <ImYoutube2 size={20} />
              </a> */}
            </Icons>
          </Grid>
        </GlobalContainer>
      </Container>
      <BottomFooter>
        <div>
          <span>Copywriting - Todos os direitos reservados</span>
          <span>Design por UX AGENCY</span>
        </div>
      </BottomFooter>
    </>
  )
}
