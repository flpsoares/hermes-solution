import { Container, Photos, Info, Wrapper } from './style'

import { BoxCases } from '../../BoxCases'
import { LinkButtons } from '../../LinkButtons'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'

interface ServicesProducedTwoProps {
  imageOne?: string
  imageOneTitle?: string
  imageOneSubTitle?: string
  displayOne?: string
  imageTwo?: string
  imageTwoTitle?: string
  imageTwoSubTitle?: string
  displayTwo?: string
  imageThree?: string
  imageThreeTitle?: string
  imageThreeSubTitle?: string
  displayThree?: string
  imageFour?: string
  imageFourTitle?: string
  imageFourSubTitle?: string
  displayFour?: string
  title?: string
  subTitle?: string
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
              display={props.displayOne}
            />
            <BoxCases
              title={props.imageTwoTitle}
              subtitle={props.imageTwoSubTitle}
              url={props.imageTwo}
              display={props.displayTwo}
            />
            <BoxCases
              title={props.imageThreeTitle}
              subtitle={props.imageThreeSubTitle}
              url={props.imageThree}
              display={props.displayThree}
            />
            <BoxCases
              title={props.imageFourTitle}
              subtitle={props.imageFourSubTitle}
              url={props.imageFour}
              display={props.displayFour}
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
        width="92.5rem"
        height="58rem"
        rotate="380"
        top="1.7rem"
        left="-3rem"
        responsive={{
          1464: {
            top: '3rem',
            width: '88.5rem',
            height: '54rem'
          },
          1384: {
            top: '6rem',
            width: '82.5rem',
            height: '48rem'
          },
          1272: {
            top: '10rem',
            width: '72.5rem',
            height: '38rem'
          },
          1152: {
            top: '10rem',
            width: '62.5rem',
            height: '38rem'
          },
          984: {
            top: '15rem',
            width: '57.5rem',
            height: '38rem'
          },
          900: {
            top: '6rem',
            width: '82.5rem',
            height: '48rem'
          },
          770: {
            top: '9rem',
            width: '79.5rem',
            height: '45rem'
          },
          740: {
            top: '12rem',
            width: '75.5rem',
            height: '41rem'
          },
          700: {
            display: 'none'
          }
        }}
      />
      <FloatImage
        src="./assets/triangle.png"
        width="90px"
        height="77px"
        animation="vertical"
        rotate="32"
        top="-4rem"
        right="31rem"
        responsive={{
          420: {
            right: '20rem'
          }
        }}
      />
    </Container>
  )
}
