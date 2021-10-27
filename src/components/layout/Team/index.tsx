import React, { useMemo } from 'react'
import { Container, Info, Wrapper } from './style'

import Carousel from 'react-elastic-carousel'

import team from '../../../team.json'
import { TeamProfile } from '../../TeamProfile'
import { FloatImage } from '../../FloatImage'
import useWindowSize from '../../../hooks/useWindowSize'

export const Team: React.FC = () => {
  const { screenWidth } = useWindowSize()

  const { carouselItems, carouselOuterSpacing, carouselPadding } = useMemo(() => {
    if (screenWidth >= 1700) {
      return { carouselItems: 3, carouselOuterSpacing: 80, carouselPadding: 20 }
    }
    if (screenWidth <= 1690 && screenWidth >= 1631) {
      return { carouselItems: 3, carouselOuterSpacing: 100, carouselPadding: 60 }
    }
    if (screenWidth <= 1631 && screenWidth >= 1501) {
      return { carouselItems: 3, carouselOuterSpacing: 40, carouselPadding: 70 }
    }
    if (screenWidth <= 1500 && screenWidth >= 1371) {
      return { carouselItems: 3, carouselOuterSpacing: 80, carouselPadding: 140 }
    }
    if (screenWidth <= 1370 && screenWidth >= 1161) {
      return { carouselItems: 2, carouselOuterSpacing: 0, carouselPadding: 10 }
    }
    if (screenWidth <= 1160 && screenWidth >= 901) {
      return { carouselItems: 3, carouselOuterSpacing: 80, carouselPadding: 10 }
    }
    if (screenWidth <= 900 && screenWidth >= 511) {
      return { carouselItems: 2, carouselOuterSpacing: 0, carouselPadding: -400 }
    }
    if (screenWidth <= 510) {
      return { carouselItems: 1, carouselOuterSpacing: 0, carouselPadding: 10 }
    }
    return { carouselItems: 0, carouselOuterSpacing: 0, carouselPadding: 0 }
  }, [screenWidth])

  return (
    <Container id="hermes">
      <Wrapper>
        <Info>
          <span>
            <strong>A equipe</strong> que faz o seu projeto virar realidade
          </span>
        </Info>
        <Carousel
          isRTL={false}
          outerSpacing={carouselOuterSpacing}
          itemPadding={[0, carouselPadding]}
          showArrows={false}
          itemsToShow={carouselItems}
        >
          {team.map((team) => {
            return (
              <TeamProfile
                key={team.id}
                name={team.name}
                charge={team.charge}
                photo_url={team.photo_url}
              />
            )
          })}
        </Carousel>
      </Wrapper>
      <FloatImage
        src="./assets/chain.png"
        width="1050px"
        height="24px"
        brightness="0.3"
        bottom="0"
        right="0"
      />
      <FloatImage
        src="./assets/broken-circle.png"
        width="363px"
        height="359px"
        brightness="0.2"
        left="-2rem"
        bottom="-28rem"
        zindex="1"
        responsive={{
          1500: { width: '333px', height: '329px' },
          1360: {
            width: '283px',
            height: '279px',
            left: '44rem'
          },
          1235: { width: '283px', height: '279px', left: '34rem' },
          1070: {
            width: '283px',
            height: '279px',
            left: '34rem',
            brightness: '0.1',
            bottom: '-32rem'
          },
          883: {
            width: '283px',
            height: '279px',
            left: '28rem',
            brightness: '0.1',
            bottom: '-32rem'
          },
          750: {
            width: '283px',
            height: '279px',
            left: '20rem',
            brightness: '0.1',
            bottom: '-32rem'
          },
          565: {
            width: '283px',
            height: '279px',
            left: '12rem',
            brightness: '0.1',
            bottom: '-32rem'
          },
          430: {
            width: '283px',
            height: '279px',
            left: '5rem',
            brightness: '0.1',
            bottom: '-32rem'
          },
          340: {
            width: '283px',
            height: '279px',
            left: '2rem',
            brightness: '0.1',
            bottom: '-32rem'
          }
        }}
      />
    </Container>
  )
}
