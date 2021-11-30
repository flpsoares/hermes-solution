import { GlobalContainer } from '../../../styles/container'
import { YellowLink } from '../../YellowLink'
import { Container, Title, Content, Infos, WhyInfos, Main } from './style'

interface SameWhyBuildingProps {
  title: string
  subtitle: string
  ImageOne?: string
  TitleImageOne?: string
  ImageTwo?: string
  TitleImageTwo?: string
  ImageThree?: string
  TitleImageThree?: string
  ImageFour?: string
  TitleImageFour?: string
  ImageFive?: string
  TitleImageFive?: string
  ImageSix?: string
  TitleImageSix?: string
  ImageSeven?: string
  TitleImageSeven?: string
  ImageEight?: string
  TitleImageEight?: string
}

export const SameWhyBuilding = (props?: SameWhyBuildingProps) => {
  return (
    <Container id="why-building">
      <GlobalContainer>
        <Main>
          <Title>
            <h1>{props.title}</h1>
            <div></div>
            <p>{props.subtitle}</p>
          </Title>
          <Content>
            <Infos>
              <WhyInfos>
                <img src={props.ImageOne} alt="" />
                <p>{props.TitleImageOne}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.ImageTwo} alt="" />
                <p>{props.TitleImageTwo}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.ImageThree} alt="" />
                <p>{props.TitleImageThree}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.ImageFour} alt="" />
                <p>{props.TitleImageFour}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.ImageFive} alt="" />
                <p>{props.TitleImageFive}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.ImageSix} alt="" />
                <p>{props.TitleImageSix}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.ImageSeven} alt="" />
                <p>{props.TitleImageSeven}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.ImageEight} alt="" />
                <p>{props.TitleImageEight}</p>
              </WhyInfos>
            </Infos>
            <YellowLink
              width="263px"
              height="52px"
              link="budget"
              smooth
              offset={-140}
              margintop="0rem"
            >
              Simule um orçamento
            </YellowLink>
          </Content>
        </Main>
      </GlobalContainer>
    </Container>
  )
}
