import { GlobalContainer } from '../../../../styles/container'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea } from './style'

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
            aspectos mais importantes da sua marca. Muito relevante para aqueles que
            querem ter um e-commerce em redes sociais, são ótimos para criar
            afinidade com o público e facilitar a comunicação com a marca. 72% da
            população brasileira tiveram contato com o mundo digital em 2020 através
            de landing pages, tornando assim, um recurso popular entre os
            e-commerces.
          </Info>
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
    </Container>
  )
}
