import React from 'react'
import { Container, FirstWrapper, Info, OurCasesButton, StatueImage } from './style'

import Carousel from 'react-elastic-carousel'
import { FloatImage } from '../../FloatImage'
import { ButtonContactUs } from '../../ButtonContactUs'

export const Banner: React.FC = () => {
  return (
    <Container>
      <Carousel className="carousel" showArrows={false} isRTL={false}>
        <FirstWrapper>
          <Info>
            <h1>
              <strong>Criamos</strong> o que deseja <br /> da{' '}
              <strong>maneira</strong> que precisa
            </h1>
            <p>
              Descomplique! Que tal uma maneira eficiente de se inserir no digital?
            </p>
          </Info>
          <div>
            <OurCasesButton>Nossos Cases</OurCasesButton>
            <ButtonContactUs size="16rem" />
          </div>
          <StatueImage src="./assets/statue-1.png" alt="statue" />
          <FloatImage
            src="./assets/yellow-load.png"
            width="57px"
            height="57px"
            brightness="0.4"
            top="0.6rem"
            right="25rem"
            responsive={{
              1000: {
                right: '20rem'
              },
              475: {
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
                top: '32rem',
                right: '-14rem',
                brightness: '0.2',
                width: '68px',
                height: '68px'
              }
            }}
          />
        </FirstWrapper>
        <FirstWrapper>
          <Info>
            <h1>
              <strong>Criamos</strong> o que deseja <strong>maneira</strong> que
              precisa
            </h1>
            <p>
              Descomplique! Que tal uma maneira eficiente de se inserir no digital?
            </p>
          </Info>
          <div>
            <OurCasesButton>Nossos Cases</OurCasesButton>
            <ButtonContactUs size="16rem" />
          </div>
          <StatueImage src="./assets/statue-1.png" alt="statue" />
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
        </FirstWrapper>
        <FirstWrapper>
          <Info>
            <h1>
              <strong>Criamos</strong> o que deseja da <strong>maneira</strong> que
              precisa
            </h1>
            <p>
              Descomplique! Que tal uma maneira eficiente de se inserir no digital?
            </p>
          </Info>
          <div>
            <OurCasesButton>Nossos Cases</OurCasesButton>
            <ButtonContactUs size="16rem" />
          </div>
          <StatueImage src="./assets/statue-1.png" alt="statue" />
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
        </FirstWrapper>
      </Carousel>
    </Container>
  )
}
