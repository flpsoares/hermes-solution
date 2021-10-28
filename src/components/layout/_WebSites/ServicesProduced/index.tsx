import { Container, Photos, Info, Wrapper } from './style'

import { BoxCases } from '../../../BoxCases'
import { LinkButtons } from '../../../LinkButtons'
import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'

export const ServicesProduced = () => {
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
              Alguns <b>sites</b> de sucesso que produzimos
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
          1330: {
            top: '282rem',
            left: '-15rem'
          },
          1240: {
            top: '285rem',
            left: '-15rem'
          },
          1220: {
            top: '285rem',
            left: '-20rem'
          },
          1161: {
            top: '285rem',
            left: '-26rem'
          },
          1100: {
            top: '295rem',
            left: '-26rem',
            width: '80rem',
            height: '50rem'
          },
          1095: {
            top: '296rem',
            left: '-26rem',
            width: '80rem',
            height: '50rem'
          },
          1076: {
            top: '315rem',
            left: '-26rem',
            width: '70rem',
            height: '40rem'
          },
          1020: {
            top: '325rem',
            left: '-26rem',
            width: '70rem',
            height: '40rem'
          },
          950: {
            top: '329rem',
            left: '-26rem',
            width: '70rem',
            height: '40rem'
          },
          942: {
            top: '339rem',
            left: '-26rem',
            width: '70rem',
            height: '40rem'
          },
          700: {
            top: '445rem',
            left: '-25rem',
            width: '80rem',
            height: '50rem',
            brightness: '0.1'
          },
          630: {
            top: '445rem',
            left: '-25rem',
            width: '70rem',
            height: '40rem',
            brightness: '0.1'
          },
          500: {
            top: '460rem',
            left: '-25rem',
            width: '60rem',
            height: '30rem',
            brightness: '0.1'
          },
          400: {
            top: '460rem',
            left: '-25rem',
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
            top: '260rem'
          },
          1030: {
            top: '280rem'
          },
          900: {
            top: '280rem',
            right: '10rem'
          },
          376: {
            top: '285rem',
            right: '10rem'
          },
          374: {
            top: '285rem',
            right: '10rem'
          }
        }}
      />
    </Container>
  )
}
