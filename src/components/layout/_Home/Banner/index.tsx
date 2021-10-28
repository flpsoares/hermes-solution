import React, { useRef } from 'react'
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
import { FloatImage } from '../../../FloatImage'

import { YellowLink } from '../../../YellowLink'
import { TransparentLink } from '../../../TransparentLink'

export const Banner: React.FC = () => {
  const carouselRef = useRef(null)
  const totalPages = 3
  let resetTimeout

  return (
    <Container>
      <Carousel
        ref={carouselRef}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 5000)
          }
        }}
        className="carousel"
        showArrows={false}
        isRTL={false}
      >
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
            <TransparentLink
              width="16rem"
              height="4.7rem"
              link="who-we-are"
              smooth={true}
              offset={-100}
              children="Quem somos"
            />
            <YellowLink
              link="contact"
              smooth={true}
              children="Contato"
              width="16rem"
              height="4.7rem"
            />
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
            <TransparentLink
              link="services-performed"
              width="16rem"
              height="4.7rem"
              smooth={true}
              offset={-20}
              children="Nossos serviços"
            />

            <YellowLink
              link="cases"
              width="16rem"
              height="4.7"
              smooth={true}
              offset={-60}
              children="Nossos Cases"
            />
          </div>
          <StatueImage src="./assets/banner-2.png" alt="statue" />
          <FloatImage
            src="./assets/triangle.png"
            width="68px"
            height="55px"
            animation="horizontal"
            rotate="200"
            brightness="0.6"
            top="1rem"
            right="70rem"
            responsive={{
              875: { display: 'none' }
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
              900: { right: '10rem' },
              590: { right: '0rem' },
              400: { right: '11rem' }
            }}
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
              850: { top: '29rem' },
              522: { left: '0rem', top: '25rem', brightness: '0.2' },
              400: { display: 'none' }
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
            <YellowLink
              link="hermes"
              offset={-80}
              smooth={true}
              width="36rem"
              height="4.7rem"
              children="Conheça nossos profissionais"
            />
          </div>
          <StatueImage src="./assets/banner-3.png" alt="statue" />
          <FloatImage
            src="./assets/triangle.png"
            width="68px"
            height="55px"
            animation="horizontal"
            rotate="200"
            brightness="0.6"
            top="1rem"
            right="70rem"
            responsive={{
              884: { display: 'none' }
            }}
          />
          <FloatImage
            src="./assets/yellow-load.png"
            width="57px"
            height="57px"
            brightness="0.4"
            top="0.6rem"
            right="5rem"
            responsive={{
              410: { right: '4rem' },
              380: { right: '0rem' }
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
              720: { left: '2rem' },
              580: { left: '2rem', top: '30rem' },
              515: { left: '2rem', top: '35rem' },
              500: { left: '2rem', top: '25rem' },
              430: { display: 'none' }
            }}
          />
        </Wrapper>
      </Carousel>
    </Container>
  )
}
