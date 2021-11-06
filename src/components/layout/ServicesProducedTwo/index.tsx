import { Container, Photos, Info, Wrapper } from './style'

import { BoxCases } from '../../BoxCases'
import { LinkButtons } from '../../LinkButtons'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'

interface ServicesProducedTwoProps {
  imageOne: string
  imageOneTitle: string
  imageOneSubTitle: string
  imageTwo: string
  imageTwoTitle: string
  imageTwoSubTitle: string
  imageThree: string
  imageThreeTitle: string
  imageThreeSubTitle: string
  imageFour: string
  imageFourTitle: string
  imageFourSubTitle: string
  title: string
  subTitle: string
}

export const ServicesProducedTwo = (props: ServicesProducedTwoProps) => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Info>
            <BoxCases
              title={props.imageOneTitle}
              subtitle={props.imageOneSubTitle}
              url={props.imageOne}
            />
            <BoxCases
              title={props.imageTwoTitle}
              subtitle={props.imageTwoSubTitle}
              url={props.imageTwo}
            />
            <BoxCases
              title={props.imageThreeTitle}
              subtitle={props.imageThreeSubTitle}
              url={props.imageThree}
            />
            <BoxCases
              title={props.imageFourTitle}
              subtitle={props.imageFourSubTitle}
              url={props.imageFour}
            />
          </Info>
          <Photos>
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
            <LinkButtons link="#" children="Simule um orçamento" size="1rem" />
          </Photos>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/hexagon.png"
        width="80rem"
        height="50rem"
        rotate="375"
        top="10rem"
        left="0rem"
      />
      <FloatImage
        src="./assets/triangle.png"
        width="90px"
        height="77px"
        animation="vertical"
        rotate="32"
        top="0rem"
        right="30rem"
      />
    </Container>
  )
}
