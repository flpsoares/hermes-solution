import React from 'react'
import { Container, Info, Wrapper } from './style'

import Carousel from 'react-elastic-carousel'

import team from '../../../team.json'
import { TeamProfile } from '../../TeamProfile'
import { FloatImage } from '../../FloatImage'

export const Team: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <span>
            <strong>A equipe</strong> que faz o seu projeto virar realidade
          </span>
        </Info>
        <Carousel
          isRTL={false}
          enableSwipe={false}
          outerSpacing={80}
          itemPadding={[0, 20]}
          showArrows={false}
          itemsToShow={3}
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
    </Container>
  )
}
