import { GlobalContainer } from '../../../styles/container'
import { YellowLink } from '../../YellowLink'

import { Container, Title, Content, Infos, WhyInfos, Wrapper } from './style'

interface SameWhyBuildingFourProps {
  title: string
  subTitle?: string
  imageOne?: string
  titleImageOne?: string
  imageTwo?: string
  titleImageTwo?: string
}

export const SameWhyBuildingFour: React.FC<SameWhyBuildingFourProps> = (props) => {
  return (
    <Container id="why-building">
      <GlobalContainer>
        <Wrapper>
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
            </Infos>
            <YellowLink
              width="263px"
              height="52px"
              margintop="2rem"
              link="budget"
              smooth
              offset={-140}
            >
              Simule um orçamento
            </YellowLink>
          </Content>
        </Wrapper>
      </GlobalContainer>
    </Container>
  )
}
