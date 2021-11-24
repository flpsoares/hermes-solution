import React from 'react'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'
import { Step } from '../../Step'
import { Container, Title, Wrapper, Content, StepsImage, StepsArea } from './style'

interface StepByStep3Props {
  title: string
  subTitle: string
  stepOneTitle: string
  stepOne: string
  stepTwoTitle: string
  stepTwo: string
  stepThreeTitle: string
  stepThree: string
}

export const StepByStep3: React.FC<StepByStep3Props> = ({
  title,
  subTitle,
  stepOneTitle,
  stepOne,
  stepTwoTitle,
  stepTwo,
  stepThreeTitle,
  stepThree
}) => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>{title}</p>
            <h1>{subTitle}</h1>
          </Title>
          <Content>
            <StepsImage src="./assets/steps3.png" />
            <StepsArea>
              <Step
                stepTitle={stepOneTitle}
                isAbsolute={true}
                left="7rem"
                top="-12rem"
                responsive={{
                  1100: { isAbsolute: false }
                }}
                content={stepOne}
              />
              <Step
                stepTitle={stepTwoTitle}
                isAbsolute={true}
                left="50rem;"
                responsive={{
                  1200: { left: '46rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepTwo}
              />
              <Step
                stepTitle={stepThreeTitle}
                isAbsolute={true}
                left="90rem;"
                top="-12rem"
                responsive={{
                  1200: { left: '85rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepThree}
              />
            </StepsArea>
          </Content>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/right-point.png"
        width="70rem"
        height="87.1rem"
        left="0"
        top="0"
        responsive={{ 730: { display: 'none' } }}
      />
      <FloatImage
        src="./assets/right-point.png"
        width="62.3rem"
        height="87.1rem"
        left="32rem"
        top="0"
        responsive={{ 730: { display: 'none' } }}
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
