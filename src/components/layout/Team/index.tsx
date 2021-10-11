import React, { useMemo } from 'react'
import { Container, Info, Wrapper } from './style'

import Carousel from 'react-elastic-carousel'

import team from '../../../team.json'
import { TeamProfile } from '../../TeamProfile'
import { FloatImage } from '../../FloatImage'
import useWindowSize from '../../../hooks/useWindowSize'

export const Team: React.FC = () => {
  const { width } = useWindowSize()

  const { carouselItems, carouselOuterSpacing, carouselPadding } = useMemo(() => {
    if (width >= 1700) {
      return { carouselItems: 3, carouselOuterSpacing: 80, carouselPadding: 20 }
    }
    if (width <= 1690 && width >= 1631) {
      return { carouselItems: 3, carouselOuterSpacing: 100, carouselPadding: 60 }
    }
    if (width <= 1631 && width >= 1501) {
      return { carouselItems: 3, carouselOuterSpacing: 40, carouselPadding: 70 }
    }
    if (width <= 1500 && width >= 1371) {
      return { carouselItems: 3, carouselOuterSpacing: 80, carouselPadding: 140 }
    }
    if (width <= 1370 && width >= 1161) {
      return { carouselItems: 2, carouselOuterSpacing: 0, carouselPadding: 10 }
    }
    if (width <= 1160 && width >= 901) {
      return { carouselItems: 3, carouselOuterSpacing: 80, carouselPadding: 10 }
    }
    if (width <= 900 && width >= 511) {
      return { carouselItems: 2, carouselOuterSpacing: 0, carouselPadding: -400 }
    }
    if (width <= 510) {
      return { carouselItems: 1, carouselOuterSpacing: 0, carouselPadding: 10 }
    }
    return { carouselItems: 0, carouselOuterSpacing: 0, carouselPadding: 0 }
  }, [width])

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
      />
    </Container>
  )
}
