import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea, SubInfo } from './style'

export const AudiovisualDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Entenda mais sobre</p>
            <h1>Audiovissual</h1>
          </Title>
          <Info>Entenda nosso processo de desenvolvimento</Info>
          <SubInfo>
            O processo de criação audiovisual é muito importante para a divulgação de
            produtos e serviços. A identidade visual de seu comércio digital ou um
            vídeo motion podem ser tão importantes quanto um flyer bem produzido,
            relacione a criação de imagens, sons e vídeos e efetive ainda mais a
            visibilidade de seu comércio, negócio ou empresa.
          </SubInfo>
          <ButtonsArea>
            <TransparentLink
              link="why-building"
              smooth
              width="18.9rem"
              height="5.3rem"
            >
              Conheça o serviço
            </TransparentLink>
            <YellowLink
              link="budget"
              fontsize="1.7rem"
              offset={-140}
              smooth
              width="18.9rem"
              height="5.3rem"
            >
              Simule o orçamento
            </YellowLink>
          </ButtonsArea>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/audiovisual/banner.png"
        width="74.3rem"
        height="54.2rem"
        right="2rem"
        top="17rem"
        responsive={{
          1170: { width: '57.2rem', height: '49.5rem', top: '27rem' },
          1065: { width: '37.2rem', height: '29.5rem', top: '27rem' },
          950: { display: 'none' }
        }}
      />
    </Container>
  )
}
