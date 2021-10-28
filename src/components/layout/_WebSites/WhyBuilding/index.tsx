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

export const WhyBuilding = () => {
  return (
    <Container>
      <Title>
        <h1>Por que devemos construir seu Website?</h1>
        <div></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
          bibendum laoreet. Proin gravida dolor sit amet lacus
        </p>
      </Title>
      <Content>
        <Infos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Lorem <b>ipsum dolor sit</b> amet, consectetur
            </p>
          </WhyInfos>
          <YellowLink width="263px" height="52px" link="" margintop="0rem">
            Simule um orçamento
          </YellowLink>
        </Infos>
        <Photo>
          <PhotoContainer>
            <img src="./assets/websites/website-1.png" alt="Breno Correia" />
          </PhotoContainer>
        </Photo>
      </Content>
    </Container>
  )
}
