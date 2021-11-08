import { GlobalContainer } from '../../styles/container'
import { FloatImage } from '../FloatImage'
import { YellowLink } from '../YellowLink'

import {
  Container,
  Title,
  Content,
  Infos,
  Photo,
  WhyInfos,
  PhotoContainer,
  ContainerTwo
} from './style'

interface SameWhyBuildingTwoProps {
  title: string
  subTitle: string
  imageOne: string
  titleImageOne: string
  imageTwo: string
  titleImageTwo: string
  imageThree: string
  titleImageThree: string
  imageFour: string
  titleImageFour: string
  imageFive: string
  titleImageFive: string
  photoContainer: string
}

export const SameWhyBuildingTwo: React.FC<SameWhyBuildingTwoProps> = (props) => {
  return (
    <Container>
      <GlobalContainer>
        <ContainerTwo>
          <Title>
            <h1>{props.title}</h1>
            <div></div>
            <p>{props.subTitle}</p>
          </Title>
          <Content>
            <Infos>
              <WhyInfos>
                <img src={props.imageOne} alt="" />
                <p>{props.titleImageOne}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.imageTwo} alt="" />
                <p>{props.titleImageTwo}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.imageThree} alt="" />
                <p>{props.titleImageThree}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.imageFour} alt="" />
                <p>{props.titleImageFour}</p>
              </WhyInfos>
              <WhyInfos>
                <img src={props.imageFive} alt="" />
                <p>{props.titleImageFive}</p>
              </WhyInfos>
              <YellowLink width="263px" height="52px" margintop="2rem" link="">
                Simule um orçamento
              </YellowLink>
            </Infos>
            <Photo>
              <PhotoContainer>
                <img src={props.photoContainer} alt="" />
              </PhotoContainer>
            </Photo>
          </Content>
        </ContainerTwo>
      </GlobalContainer>
    </Container>
  )
}
