import { Container, Photos, Info, Wrapper } from './style'

import { BoxCases } from '../../BoxCases'
import { LinkButtons } from '../../LinkButtons'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'

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
        rotate="380"
        top="242rem"
        left="-1rem"
        responsive={{
          1300: { left: '43rem' },
          1100: { left: '40rem', top: '282rem' },
          900: {
            left: '10rem',
            top: '292rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          820: {
            left: '10rem',
            top: '242rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          750: {
            left: '0rem',
            top: '242rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          600: {
            left: '-10rem',
            top: '242rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          430: {
            left: '-25rem',
            top: '242rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          389: {
            left: '-23rem',
            top: '242rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          }
        }}
      />
    </Container>
  )
}
