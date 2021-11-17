import { GlobalContainer } from '../../../../styles/container'
import { YellowLink } from '../../../YellowLink'
import {
  Container,
  Title,
  Content,
  Infos,
  Photo,
  WhyInfos,
  PhotoContainer,
  Frame,
  WebSiteImage
} from './style'

export const WhyBuildingWebSites = () => {
  return (
    <Container>
      <Title>
        <h1>Porque devemos construir sua Vitrine</h1>
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
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              87% da população brasileira entrou em contato com o mundo digital pela
              primeira vez através do WebSite, tornando-se um dos maiores recursos
              digitais.
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Seu projeto orientado para conversão, iremos apresentar o seu produto
              de forma eficiente e única, para surpreender você e seus futuros
              clientes.
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              A melhor forma de criar afinidade com o público, recursos fáceis de
              usar e atualizar, para melhor experiência a todos.
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Vamos juntos, usando as ferramentas certas, enaltecer o seu produto
              fazendo com que o seu público alvo, sinta ainda mais necessidade de ter
              o seu serviço.
            </p>
          </WhyInfos>
          <WhyInfos>
            <img src="./assets/services-icons/icone-07.png" alt="" />
            <p>
              Facilita a comunicação com o seu cliente, deixando suas formas de
              contato e links para criar um feedback do seu produto
            </p>
          </WhyInfos>
          <YellowLink width="263px" height="52px" link="budget" margintop="3rem">
            Simule um orçamento
          </YellowLink>
        </Infos>
        {/* <Frame>
          <WebSiteImage src="./assets/websites/website-1.png" alt="Breno Correia" />
        </Frame> */}
        <Photo>
          <PhotoContainer>
            <img src="./assets/websites/website-1.png" alt="Breno Correia" />
          </PhotoContainer>
        </Photo>
      </Content>
    </Container>
  )
}
