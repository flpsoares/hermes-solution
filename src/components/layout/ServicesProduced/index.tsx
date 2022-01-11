import { Container, Photos, Info, Wrapper } from './style'

import { BoxCases } from '../../BoxCases'
import { LinkButtons } from '../../LinkButtons'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'

export const ServicesProduced = () => {
  return (
    <Container id="cases">
      <GlobalContainer>
        <Wrapper>
          <Info>
            <BoxCases
              title="Cartões Caixa"
              subtitle="Ux Designs"
              image="./assets/case1.png"
              link=""
            />
            <BoxCases
              title="Parcelão Delivery"
              subtitle="Criação de site"
              image="./assets/case2.png"
              link=""
            />
            <BoxCases
              title="FTD Educação"
              subtitle="Vinheta"
              image="./assets/case3.png"
              link=""
            />
            <BoxCases
              title="Luis Piercer"
              subtitle="Criação de site"
              image="./assets/case4.png"
              link=""
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
            <LinkButtons
              link="budget"
              smooth
              offset={-140}
              children="Simule um orçamento"
              size="1rem"
            />
          </Photos>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/hexagon.png"
        width="92.5rem"
        height="58rem"
        rotate="380"
        top="1.7rem"
        left="-3rem"
        responsive={{
          1464: {
            top: '3rem',
            width: '88.5rem',
            height: '54rem'
          },
          1384: {
            top: '6rem',
            width: '82.5rem',
            height: '48rem'
          },
          1272: {
            top: '10rem',
            width: '72.5rem',
            height: '38rem'
          },
          1152: {
            top: '10rem',
            width: '62.5rem',
            height: '38rem'
          },
          984: {
            top: '15rem',
            width: '57.5rem',
            height: '38rem'
          },
          900: {
            top: '6rem',
            width: '82.5rem',
            height: '48rem'
          },
          770: {
            top: '9rem',
            width: '79.5rem',
            height: '45rem'
          },
          740: {
            top: '12rem',
            width: '75.5rem',
            height: '41rem'
          },
          700: {
            display: 'none'
          }
        }}
      />
      <FloatImage
        src="./assets/triangle.png"
        width="90px"
        height="77px"
        animation="vertical"
        rotate="32"
        top="-4rem"
        right="31rem"
        responsive={{
          420: {
            right: '20rem'
          }
        }}
      />
    </Container>
  )
}
