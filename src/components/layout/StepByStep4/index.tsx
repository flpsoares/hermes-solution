import React from 'react'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'
import { Step } from '../../Step'
import { Container, Title, Wrapper, Content, StepsImage, StepsArea } from './style'

interface StepByStep4Props {
  title: string
  subTitle: string
  stepOne: string
  stepTwo: string
  stepThree: string
  stepFour: string
}

export const StepByStep4: React.FC<StepByStep4Props> = ({
  title,
  subTitle,
  stepOne,
  stepTwo,
  stepThree,
  stepFour
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
            <StepsImage src="./assets/steps4.png" />
            <StepsArea>
              <Step
                stepTitle="Identificação de desafios"
                isAbsolute={true}
                left="5rem;"
                top="-12rem"
                responsive={{
                  1200: { left: '7rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepOne}
              />
              <Step
                stepTitle="Localize a jornada de seu consumidor"
                isAbsolute={true}
                left="35rem;"
                responsive={{
                  1100: { isAbsolute: false }
                }}
                content={stepTwo}
              />
              <Step
                stepTitle="Reveja resultados"
                isAbsolute={true}
                left="70rem"
                top="-12rem"
                responsive={{
                  1200: { left: '63rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepThree}
              />
              <Step
                stepTitle="Definição de nova CRM"
                isAbsolute={true}
                left="97rem;"
                responsive={{
                  1200: { left: '87rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepFour}
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
