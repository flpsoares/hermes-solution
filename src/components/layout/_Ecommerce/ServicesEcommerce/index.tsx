import { Container, Photos, Info, Wrapper } from './style'

import { BoxCases } from '../../../BoxCases'
import { LinkButtons } from '../../../LinkButtons'
import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'

export const ServicesEcommerce = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Info>
            <BoxCases
              title="Cartões Caixa"
              subtitle="Ux Designs"
              url="./assets/case1.png"
            />
            <BoxCases
              title="Parcelão Delivery"
              subtitle="Criação de site"
              url="./assets/case2.png"
            />
            <BoxCases
              title="FTD Educação"
              subtitle="Vinheta"
              url="./assets/case3.png"
            />
            <BoxCases
              title="Luis Piercer"
              subtitle="Criação de site"
              url="./assets/case4.png"
            />
          </Info>
          <Photos>
            <h1>
              Alguns <b>projetos</b> de sucesso que produzimos
            </h1>
            <p>
              Nossos divinos trabalhos desenvolvidos pelos membros de nossa equipe
              nos motivam a realizar projetos cada vez mais aprimorados.{' '}
            </p>
            <LinkButtons link="#" children="Simule um orçamento" size="1rem" />
          </Photos>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/hexagon.png"
        width="90rem"
        height="60rem"
        rotate="375"
        top="277rem"
        left="0rem"
        responsive={{
          1540: {
            left: '-10rem'
          },
          1326: {
            top: '320rem',
            left: '-10rem',
            width: '80rem',
            height: '50rem'
          },
          1240: {
            top: '320rem',
            left: '-10rem',
            width: '80rem',
            height: '50rem'
          },
          1220: {
            top: '320rem',
            left: '-10rem',
            width: '80rem',
            height: '50rem'
          },
          1161: {
            top: '310rem',
            left: '-15rem',
            width: '80rem',
            height: '50rem'
          },
          1100: {
            top: '320rem',
            left: '-15rem',
            width: '80rem',
            height: '50rem'
          },
          1095: {
            top: '325rem',
            left: '-14rem',
            width: '80rem',
            height: '50rem'
          },
          1076: {
            top: '315rem',
            left: '-14rem',
            width: '80rem',
            height: '50rem'
          },
          1020: {
            top: '320rem',
            left: '-20rem',
            width: '80rem',
            height: '50rem'
          },
          950: {
            top: '335rem',
            left: '-20rem',
            width: '80rem',
            height: '50rem'
          },
          942: {
            top: '310rem',
            left: '-2rem',
            width: '85rem',
            height: '55rem',
            brightness: '0.1'
          },
          894: {
            top: '335rem',
            left: '2rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.1'
          },
          816: {
            top: '335rem',
            left: '2rem',
            width: '70rem',
            height: '40rem',
            brightness: '0.1'
          },
          768: {
            top: '335rem',
            left: '2rem',
            width: '65rem',
            height: '35rem',
            brightness: '0.1'
          },
          730: {
            top: '350rem',
            left: '2rem',
            width: '65rem',
            height: '35rem',
            brightness: '0.1'
          },
          708: {
            top: '350rem',
            left: '2rem',
            width: '60rem',
            height: '30rem',
            brightness: '0.1'
          },
          700: {
            top: '475rem',
            left: '2rem',
            width: '60rem',
            height: '30rem',
            brightness: '0.1'
          },
          650: {
            top: '490rem',
            left: '-6rem',
            width: '50rem',
            height: '20rem',
            brightness: '0.1'
          },
          630: {
            top: '490rem',
            left: '-6rem',
            width: '50rem',
            height: '20rem',
            brightness: '0.1'
          },
          500: {
            top: '490rem',
            left: '-16rem',
            width: '50rem',
            height: '20rem',
            brightness: '0.1'
          },
          400: {
            top: '490rem',
            left: '-26rem',
            width: '50rem',
            height: '20rem',
            brightness: '0.1'
          }
        }}
      />
      <FloatImage
        src="./assets/triangle.png"
        width="90px"
        height="77px"
        animation="vertical"
        rotate="32"
        top="270rem"
        right="30rem"
        responsive={{
          1160: {
            top: '300rem'
          },
          1030: {
            top: '300rem'
          },
          900: {
            top: '300rem',
            right: '10rem'
          },
          700: {
            top: '340rem',
            right: '10rem'
          },
          470: {
            top: '390rem',
            right: '10rem'
          },
          412: {
            top: '400rem',
            right: '10rem'
          },
          402: {
            top: '410rem',
            right: '10rem'
          },
          374: {
            top: '420rem',
            right: '10rem'
          }
        }}
      />
    </Container>
  )
}
