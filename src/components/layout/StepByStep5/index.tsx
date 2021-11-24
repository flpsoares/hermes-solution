import React from 'react'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'
import { Step } from '../../Step'
import { Container, Title, Wrapper, Content, StepsImage, StepsArea } from './style'

interface StepByStep5Props {
  title: string
  subTitle: string
  stepOne: string
  stepTwo: string
  stepThree: string
  stepFour: string
  stepFive: string
}

export const StepByStep5: React.FC<StepByStep5Props> = ({
  title,
  subTitle,
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  stepFive
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
            <StepsImage src="./assets/steps5.png" />
            <StepsArea>
              <Step
                stepTitle="Elaboração de briefing"
                isAbsolute={true}
                left="-5rem;"
                top="-12rem"
                responsive={{
                  1315: { left: '5rem' },
                  1145: { left: '2rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepOne}
              />
              <Step
                stepTitle="Criação da arquitetura gráfica"
                isAbsolute={true}
                left="25rem;"
                responsive={{
                  1315: { left: '30rem' },
                  1200: { left: '28rem' },
                  1145: { left: '24rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepTwo}
              />
              <Step
                stepTitle="Criação gráfico artístico"
                isAbsolute={true}
                left="55rem;"
                top="-12rem"
                responsive={{
                  1200: { left: '50rem' },
                  1145: { left: '46rem' },
                  1100: { isAbsolute: false }
                }}
                content={stepThree}
              />
              <Step
                stepTitle="Desenvolvimento tecnológico"
                isAbsolute={true}
                left="82rem;"
                responsive={{
                  1315: { left: '78rem' },
                  1200: { left: '72rem' },
                  1145: { left: '68rem' },

                  1100: { isAbsolute: false }
                }}
                content={stepFour}
              />
              <Step
                stepTitle="Entrega do projeto"
                isAbsolute={true}
                left="105rem;"
                top="-12rem"
                responsive={{
                  1315: { left: '100rem' },
                  1200: { left: '94rem' },
                  1145: { left: '90rem' },

                  1100: { isAbsolute: false }
                }}
                content={stepFive}
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
