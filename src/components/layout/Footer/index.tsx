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

import { ImLinkedin2, ImFacebook } from 'react-icons/im'
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
                A Hermes Solutions foca em atingir o melhor resultado sempre para os
                nossos clientes oferecendo soluções divinas em nossos projetos
              </span>
            </Info>
            <Services>
              <Wrapper>
                <Title>Serviços</Title>
                <ul>
                  <li>
                    <a href="/e-commerce">E-commerce</a>
                  </li>
                  <li>
                    <a href="/crm">CMS e CRM</a>
                  </li>
                  <li>
                    <a href="/websites">Sites</a>
                  </li>
                  <li>
                    <a href="/app">App</a>
                  </li>
                  <li>
                    <a href="/social-media">Social media</a>
                  </li>
                  <li>
                    <a href="/audiovisual">Audiovisual</a>
                  </li>
                  <li>
                    <a href="/traffic-paid">Tráfego Pago/SEO</a>
                  </li>
                  <li>
                    <a href="/ux-ui">UX/UI Design e Design Thinking</a>
                  </li>
                  <li>
                    <a href="/data-security">Segurança de dados</a>
                  </li>
                  <li>
                    <a href="/bi">Business Intelligence</a>
                  </li>
                </ul>
              </Wrapper>
            </Services>
            <Cases>
              <Wrapper>
                <Title>Cases</Title>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="http://demo.parcelao.com/"
                      rel="noreferrer"
                    >
                      Parcelao Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.behance.net/gallery/88963827/FTD-VINHETA-CURSO-EDUCAR-HOJE"
                      rel="noreferrer"
                    >
                      FTD
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.behance.net/gallery/118916477/Vinheta-MBA-Grupo-atitude-Emocional"
                      rel="noreferrer"
                    >
                      Grupo atitude emocional
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://r0z6je.axshare.com"
                      rel="noreferrer"
                    >
                      Natura
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://lsc4bg.axshare.com"
                      rel="noreferrer"
                    >
                      Caixa econômica
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://6x8bnu.axshare.com/"
                      rel="noreferrer"
                    >
                      Cielo
                    </a>
                  </li>
                </ul>
              </Wrapper>
            </Cases>
            <Hermes>
              <Wrapper>
                <Title>A Hermes</Title>
                <ul>
                  <li>
                    <Link
                      rel="noreferrer"
                      href="hermes"
                      to="hermes"
                      smooth={true}
                      offset={-80}
                    >
                      Quem somos
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noreferrer"
                      href="customers"
                      to="customers"
                      smooth={true}
                      offset={-160}
                    >
                      Clientes
                    </Link>
                  </li>
                  <li>
                    <Link rel="noreferrer" href="contact" to="contact" smooth={true}>
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
                aria-label="Linkedin"
                href="https://www.linkedin.com/company/hermes-solutions/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin2 size={20} />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/Ag%C3%AAncia-Digital-Hermes-Solutions-102458504867056/"
                target="_blank"
                rel="noreferrer"
              >
                <ImFacebook size={20} />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/hermes_solutions/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={20} />
              </a>
            </Icons>
          </Grid>
        </GlobalContainer>
      </Container>
      <BottomFooter>
        <div>
          <span>Copywriting - Todos os direitos reservados</span>
        </div>
      </BottomFooter>
    </>
  )
}
