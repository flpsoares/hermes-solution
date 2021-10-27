import React from 'react'
import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { Step } from '../../../Step'
import { Container, Title, Wrapper, Content, StepsImage, StepsArea } from './style'

export const StepByStep: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Entenda</p>
            <h1>Passo a Passo</h1>
          </Title>
          <Content>
            <StepsImage src="./assets/steps.png" />
            <StepsArea>
              <Step
                stepNumber="1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
              />
              <Step
                stepNumber="2"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
              />
              <Step
                stepNumber="3"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
              />
              <Step
                stepNumber="4"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
              />
              <Step
                stepNumber="5"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
              />
            </StepsArea>
          </Content>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/broken-circle.png"
        width="34.6rem"
        height="34.1rem"
        right="16rem"
        top="-29rem"
        brightness="0.4"
      />
      <FloatImage
        src="./assets/right-point.png"
        width="70rem"
        height="87.1rem"
        left="0"
        top="0"
      />
      <FloatImage
        src="./assets/right-point.png"
        width="62.3rem"
        height="87.1rem"
        left="32rem"
        top="0"
      />
      <FloatImage
        src="./assets/triangle.png"
        width="9.3rem"
        height="7.8rem"
        left="20rem"
        bottom="-6rem"
        rotate="-60"
        animation="vertical"
        brightness="0.5"
      />
    </Container>
  )
}
