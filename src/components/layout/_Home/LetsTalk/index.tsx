import React from 'react'
import { GlobalContainer } from '../../../../styles/container'
import { YellowLink } from '../../../YellowLink'
import { FloatImage } from '../../../FloatImage'
import { Container, Wrapper, Info } from './style'

export const LetsTalk: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Info>
            <h2>Vamos conversar?</h2>
            <h1>Fale com a equipe Hermes</h1>
            <YellowLink
              children="Fale conosco"
              link="contact"
              smooth
              width="20rem"
              height="4.7rem"
            />
          </Info>
          <img src="./assets/statue-2.png" alt="statue" />
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/yellow-load.png"
        width="87px"
        height="87px"
        brightness="0.28"
        left="30rem"
        bottom="-5rem"
      />
    </Container>
  )
}
