import React from 'react'
import { GlobalContainer } from '../../../styles/container'
import { FloatImage } from '../../FloatImage'
import { ServiceBox } from '../../ServiceBox'
import { BoxCases } from '../../BoxCases'
import { LinkButtons } from '../../LinkButtons'
import {
  Container,
  Grid,
  Header,
  Line,
  Wrapper,
  WrapperCases,
  Left,
  Right
} from './style'

export const ServicesPerformed: React.FC = () => {
  return (
    <Container id="services-performed">
      <FloatImage
        src="./assets/chain.png"
        width="886px"
        brightness="0.3"
        height="26px"
        top="0"
        left="-22rem"
      />
      <GlobalContainer>
        <Wrapper>
          <Header>
            <h1>
              Os <strong>serviços</strong> que realizamos
            </h1>
            <Line></Line>
            <p>
              Inove, a Hermes está aqui para te auxiliar em todas as etapas desse
              caminho
            </p>
          </Header>
          <Grid>
            <ServiceBox
              title="Landing Page, E-commerce"
              content="Canais de vendas digitais, com grande potencial de crescimento para o seu comércio. Útil para organização de estoque, controle de vendas e aumento na visibilidade de seu produto."
              image="./assets/services-icons/icone-01.png"
            />
            <ServiceBox
              title="Segurança De Dados"
              content="Proporcionamos ferramentas para a proteção geral de sua empresa e seu produto digital, aonde quer que você vá."
              image="./assets/services-icons/icone-02.png"
            />
            <ServiceBox
              title="App Ios/ Android"
              content="Criação de aplicativos IOS e Android para qualquer finalidade, podendo criar designs únicos e de alta performance."
              image="./assets/services-icons/icone-03.png"
            />
            <ServiceBox
              title="UX/UI Design e Design thinking"
              content="Tenha um design exclusivo e preparado para o seu projeto, e aumente sua credibilidade e reputação. Tenha seu produto com a sua cara!"
              image="./assets/services-icons/icone-04.png"
            />
            <ServiceBox
              title="CMS"
              content="Crie o seu site e tenha atualizações e manutenções diárias ou semanais de forma rápida e fácil!"
              image="./assets/services-icons/icone-05.png"
            />
            <ServiceBox
              title="Social mídia"
              content="Cuidamos de suas redes sociais com profissionais treinados para que seu produto tenha cada vez mais visibilidade no mercado digital."
              image="./assets/services-icons/icone-06.png"
            />
            <ServiceBox
              title="Audiovisual"
              content="Te ajudamos a instigar seus clientes da melhor forma possível usando ótimas ferramentas para que o audiovisual de suas mídias tragam experiências diferenciadas."
              image="./assets/services-icons/icone-07.png"
            />
            <ServiceBox
              title="Tráfego Pago"
              content="Fazemos a sua estratégia para que esse modelo de investimento usado através de plataformas individuais seja a mais eficiente para o seu produto, fazendo com que os anúncios e propagandas atinjam o seu público alvo."
              image="./assets/services-icons/icone-08.png"
            />
          </Grid>
        </Wrapper>
        <WrapperCases id="cases">
          <Left>
            <h1>
              Alguns <b>cases</b> de sucesso que produzimos
            </h1>
            <p>
              Nossos divinos trabalhos desenvolvidos pelos membros de nossa equipe
              nos motivam a realizar projetos cada vez mais aprimorados.{' '}
            </p>
            <LinkButtons link="#" children="Veja todos os cases" size="1rem" />
          </Left>
          <Right>
            <BoxCases title="Sistema gerencial" url="./assets/case1.png" />
            <BoxCases title="E-commerce em Magento" url="./assets/case2.png" />
            <BoxCases title="Website wordpress" url="./assets/case3.png" />
            <BoxCases title="Aplicativo IOS e Android" url="./assets/case4.png" />
          </Right>
        </WrapperCases>
      </GlobalContainer>

      <FloatImage
        src="./assets/half-rectangle.png"
        width="16rem"
        height="16rem"
        rotate="80"
        top="142rem"
        left="1rem"
        inverter="scaleX(-1)"
      />

      <FloatImage
        src="./assets/hexagon.png"
        width="99rem"
        height="69rem"
        rotate="341"
        top="80rem"
        left="63rem"
      />
      <FloatImage
        src="./assets/yellow-load.png"
        width="130px"
        height="130px"
        brightness="0.2"
        rotate="30"
        left="5rem"
        top="20rem"
        animation="vertical"
      />
      <FloatImage
        src="./assets/half-rectangle.png"
        width="161px"
        height="160px"
        right="21.5rem"
        top="22rem"
      />
      <FloatImage
        src="./assets/triangle.png"
        width="72px"
        height="62px"
        rotate="70"
        brightness="0.5"
        right="15rem"
        top="60rem"
        animation="horizontal"
      />
    </Container>
  )
}
