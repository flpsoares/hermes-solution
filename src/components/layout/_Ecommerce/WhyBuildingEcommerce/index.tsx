import { FloatImage } from '../../../FloatImage'
import { YellowLink } from '../../../YellowLink'
import {
  Container,
  Title,
  Content,
  Infos,
  Photo,
  WhyInfos,
  PhotoContainer
} from './style'

export const WhyBuildingEcommerce = () => {
  return (
    <Container>
      <Title>
        <h1>Por que devemos construir seu E-commerce?</h1>
        <div></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
          bibendum laoreet. Proin gravida dolor sit amet lacus
        </p>
      </Title>
      <Content>
        <Infos>
          <WhyInfos>
            <img src="./assets/ecommerce/icon-1.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/ecommerce/icon-1.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/ecommerce/icon-1.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/ecommerce/icon-1.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/ecommerce/icon-1.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <YellowLink width="263px" height="52px" margintop="2rem" link="">
            Simule um orçamento
          </YellowLink>
        </Infos>
        <Photo>
          <PhotoContainer>
            <img src="./assets/ecommerce/banner-2.png" alt="Breno Correia" />
          </PhotoContainer>
        </Photo>
      </Content>
    </Container>
  )
}
