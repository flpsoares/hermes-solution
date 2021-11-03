import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, SubInfo, ButtonsArea } from './style'

export const WebSitesDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Desenvolvimento de</p>
            <h1>Websites</h1>
          </Title>
          <Info>
            Orientada para conversão, a Landing Page, é uma página básica de
            apresentação, com o intuito de demonstrar o seu trabalho e chamar a
            atenção dos usuários destacando seus diferenciais e enaltecendo os
            aspectos mais importantes da sua marca.
          </Info>
          <SubInfo>
            Muito relevante para aqueles que querem ter um e-commerce em redes
            sociais, são ótimos para criar afinidade com o público e facilitar a
            comunicação com a marca. 72% da população brasileira tiveram contato com
            o mundo digital em 2020 através de landing pages, tornando assim, um
            recurso popular entre os e-commerces.
          </SubInfo>
          <ButtonsArea>
            <TransparentLink link="#" width="18.9rem" height="5.3rem">
              Conheça o serviço
            </TransparentLink>
            <YellowLink link="#" width="18.9rem" height="5.3rem">
              Simule o orçamento
            </YellowLink>
          </ButtonsArea>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/broken-circle.png"
        width="55.7rem"
        height="54.9rem"
        right="13rem"
        top="5rem"
        brightness="0.15"
        responsive={{
          1335: { right: '2rem' },
          1175: { right: '2rem', width: '45.7rem', height: '44.9rem', top: '10rem' },
          1090: { right: '2rem', width: '35.7rem', height: '34.9rem', top: '15rem' },
          990: { right: '2rem', width: '30.7rem', height: '29.9rem', top: '20rem' },
          930: { right: '2rem', width: '20.7rem', height: '19.9rem', top: '20rem' },
          830: { display: 'none' }
        }}
      />
    </Container>
  )
}
