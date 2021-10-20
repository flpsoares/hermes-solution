import React from 'react'
import {
  Container,
  Wrapper,
  Info,
  OurCasesButton,
  StatueImage,
  FirstTitle,
  SecondTitle,
  ThirdTitle
} from './style'

import Carousel from 'react-elastic-carousel'
import { FloatImage } from '../../FloatImage'
import { YellowButton } from '../../YellowButton'

export const Banner: React.FC = () => {
  return (
    <Container>
      <Carousel className="carousel" showArrows={false} isRTL={false}>
        <Wrapper>
          <Info>
            <FirstTitle>
              <strong>Criamos</strong> o que deseja <br /> da{' '}
              <strong>maneira</strong> que precisa
            </FirstTitle>
            <p>
              Descomplique! Que tal uma maneira eficiente de se inserir no digital?
            </p>
          </Info>
          <div>
            <OurCasesButton>Nossos Serviços</OurCasesButton>
            <YellowButton children="Nossos Cases" size="16rem" />
          </div>
          <StatueImage src="./assets/banner-1.png" alt="statue" />
          <FloatImage
            src="./assets/triangle.png"
            width="68px"
            height="55px"
            animation="horizontal"
            rotate="200"
            brightness="0.6"
            top="1rem"
            left="48rem"
            responsive={{
              1100: { left: '18rem' },
              910: { left: '8rem', brightness: '0.3' },
              400: { display: 'none' }
            }}
          />
          <FloatImage
            src="./assets/yellow-load.png"
            width="57px"
            height="57px"
            brightness="0.4"
            top="0.6rem"
            right="25rem"
            responsive={{
              1000: {
                right: '10rem'
              }
            }}
          />
          <FloatImage
            src="./assets/yellow-load.png"
            width="78px"
            height="78px"
            brightness="0.4"
            left="8rem"
            top="34rem"
            animation="vertical"
            responsive={{
              700: { top: '26rem' },
              560: { top: '26rem', left: '0' },
              475: {
                top: '25rem',
                right: '-22rem',
                brightness: '0.2',
                width: '68px',
                height: '68px'
              },
              395: {
                top: '25rem',
                right: '-14rem',
                brightness: '0.2',
                width: '68px',
                height: '68px'
              }
            }}
          />
        </Wrapper>
        <Wrapper>
          <Info>
            <SecondTitle>
              Clientes <strong>totalmente satisfeitos</strong> com nossos serviços
              com <strong>excelentes resultados</strong>
            </SecondTitle>
          </Info>
          <div>
            <OurCasesButton>Nossos Serviços</OurCasesButton>
            <YellowButton children="Nossos Cases" size="16rem" />
          </div>
          <StatueImage src="./assets/banner-2.png" alt="statue" />
          <FloatImage
            src="./assets/triangle.png"
            width="68px"
            height="55px"
            animation="horizontal"
            rotate="200"
            brightness="0.6"
            bottom="20rem"
            right="70rem"
          />
          <FloatImage
            src="./assets/yellow-load.png"
            width="57px"
            height="57px"
            brightness="0.4"
            top="0.6rem"
            right="25rem"
          />
          <FloatImage
            src="./assets/yellow-load.png"
            width="78px"
            height="78px"
            brightness="0.4"
            left="8rem"
            top="17.5rem"
            animation="vertical"
            responsive={{
              780: { top: '35rem' },
              503: { left: '10rem', top: '' }
            }}
          />
        </Wrapper>
        <Wrapper>
          <Info>
            <ThirdTitle>
              Se surpreenda com nosso desenvolvimento tecnológico e digital de alta
              performance.
            </ThirdTitle>
          </Info>
          <div>
            <YellowButton children="Conheça nossos profissionais" size="36rem" />
          </div>
          <StatueImage src="./assets/banner-3.png" alt="statue" />
          <FloatImage
            src="./assets/triangle.png"
            width="68px"
            height="55px"
            animation="horizontal"
            rotate="200"
            brightness="0.6"
            bottom="20rem"
            right="70rem"
          />
          <FloatImage
            src="./assets/yellow-load.png"
            width="57px"
            height="57px"
            brightness="0.4"
            top="0.6rem"
            right="25rem"
          />
          <FloatImage
            src="./assets/yellow-load.png"
            width="78px"
            height="78px"
            brightness="0.4"
            left="8rem"
            top="34rem"
            animation="vertical"
          />
        </Wrapper>
      </Carousel>
    </Container>
  )
}
