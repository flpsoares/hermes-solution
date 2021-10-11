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

import { ImLinkedin2, ImFacebook, ImYoutube2 } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'

export const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <GlobalContainer>
          <Grid>
            <Info>
              <img src="./assets/logo.png" alt="logo" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                et viverra justo
              </span>
            </Info>
            <Services>
              <Wrapper>
                <Title>Serviços</Title>
                <ul>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                </ul>
              </Wrapper>
            </Services>
            <Cases>
              <Wrapper>
                <Title>Cases</Title>
                <ul>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                  <li>
                    <a href="#">Serviço xxxxxx</a>
                  </li>
                </ul>
              </Wrapper>
            </Cases>
            <Hermes>
              <Wrapper>
                <Title>A Hermes</Title>
                <ul>
                  <li>
                    <a href="#">Quem somos</a>
                  </li>
                  <li>
                    <a href="#">Clientes</a>
                  </li>
                  <li>
                    <a href="#">Tragetória</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contato</a>
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
              <a href="#">
                <ImLinkedin2 size={20} />
              </a>
              <a href="#">
                <ImFacebook size={20} />
              </a>
              <a href="#">
                <AiOutlineInstagram size={20} />
              </a>
              <a href="#">
                <ImYoutube2 size={20} />
              </a>
            </Icons>
          </Grid>
        </GlobalContainer>
      </Container>
      <BottomFooter>
        <span>Copright - Todos direitos reservados</span>
        <span>Desenvolvido por UX AGENCY</span>
      </BottomFooter>
    </>
  )
}
