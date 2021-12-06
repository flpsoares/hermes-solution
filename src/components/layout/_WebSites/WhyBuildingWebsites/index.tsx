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

export const WhyBuildingWebSites = () => {
  return (
    <Container id="why-building">
      <Title>
        <h1>Porque devemos desenvolver seu website</h1>
        <div></div>
        <p>
          Transformamos o seu produto digital em um obra de arte divina! Vamos
          transformar todo o seu trabalho em conversão de forma moderna e criativa,
          para assim, chamar o seu público alvo a conhecer o seu comércio.
        </p>
      </Title>
      <Content>
        <Infos>
          <WhyInfos>
            <img src="./assets/websites/icone-01.png" alt="icone-1" />
            <p>
              87% da população brasileira entrou em contato com o mundo digital pela
              primeira vez através do WebSite, tornando-se um dos maiores recursos
              digitais.
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/websites/icone-01.png" alt="icone-2" />
            <p>
              Seu projeto orientado para conversão, iremos apresentar o seu produto
              de forma eficiente e única, para surpreender você e seus futuros
              clientes.
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/websites/icone-01.png" alt="icone-3" />
            <p>
              Seu produto será apresentado de forma eficiente e única, para
              surpreender você e seus futuros clientes
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/websites/icone-01.png" alt="icone-4" />
            <p>
              Com uma vitrine digital e personalizada seus clientes sentirão mais
              necessidade de adquirir o seu produto/serviço
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/websites/icone-01.png" alt="icone-5" />
            <p>
              Facilita a comunicação com o seu cliente, proporcionando maior
              interação com links e outras formas de contato
            </p>
          </WhyInfos>
          <YellowLink
            width="263px"
            height="52px"
            link="budget"
            smooth
            offset={-140}
            margintop="3rem"
          >
            Simule um orçamento
          </YellowLink>
        </Infos>
        <Photo>
          <PhotoContainer>
            <img src="./assets/case4.png" alt="Luiz Piercer" />
          </PhotoContainer>
        </Photo>
      </Content>
    </Container>
  )
}
