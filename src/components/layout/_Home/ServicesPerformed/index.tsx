import React from 'react'
import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { ServiceBox } from '../../../ServiceBox'
import { BoxCases } from '../../../BoxCases'
import { LinkButtons } from '../../../LinkButtons'
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
              title="E-commerce"
              content="É muito mais do que apenas a criação de uma loja virtual, é otimização, sua estrutura e funcionamento são totalmente digitais, fazendo com que os processos básicos de venda e atendimento ao cliente sejam completamente digitalizados em seu empreendedorismo."
              image="./assets/services-icons/icone-09.png"
              link="/e-commerce"
            />
            <ServiceBox
              title="Sites"
              content="Canais de vendas digitais, com grande potencial de crescimento para o seu comércio. Útil para organização de estoque, controle de vendas e aumento na visibilidade de seu produto."
              image="./assets/services-icons/icone-01.png"
              link="/websites"
            />
            <ServiceBox
              title="Social mídia"
              content="Cuidamos de suas redes sociais com profissionais treinados para que seu produto tenha cada vez mais visibilidade no mercado digital."
              image="./assets/services-icons/icone-06.png"
              link="social-media"
            />
            <ServiceBox
              title="Tráfego Pago"
              content="Fazemos a sua estratégia para que esse modelo de investimento usado através de plataformas individuais seja a mais eficiente para o seu produto, fazendo com que os anúncios e propagandas atinjam o seu público alvo."
              image="./assets/services-icons/icone-08.png"
              link="traffic-paid"
            />
            <ServiceBox
              title="Inteligência de dados"
              image="./assets/services-icons/icone-06.png"
              link="/data-security"
              secondLink="/bi"
            />
            <ServiceBox
              title="CMS e CRM"
              content="Crie o seu site tendo atualizações e manutenções diárias ou semanais de forma rápida e fácil! Otimize seu relacionamento com os clientes com automações nos processos de marketing."
              image="./assets/services-icons/icone-05.png"
              link="/crm"
            />
            <ServiceBox
              title="App Ios/ Android"
              content="Criação de aplicativos IOS e Android para qualquer finalidade, podendo criar designs únicos e de alta performance."
              image="./assets/services-icons/icone-03.png"
              link="/app"
            />
            <ServiceBox
              title="Audiovisual"
              content="Te ajudamos a instigar seus clientes da melhor forma possível usando ótimas ferramentas para que o audiovisual de suas mídias tragam experiências diferenciadas."
              image="./assets/services-icons/icone-07.png"
              link="/audiovisual"
            />
            <ServiceBox
              title="UX/UI Design e Design thinking"
              content="Tenha um design exclusivo e preparado para o seu projeto, e aumente sua credibilidade e reputação. Tenha seu produto com a sua cara!"
              image="./assets/services-icons/icone-04.png"
              link="ux-ui"
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
            <BoxCases
              title="Cartões Caixa"
              subtitle="Ux Designs"
              url="./assets/case1.png"
            />
            <BoxCases
              title="Parcelão Delivery"
              subtitle="Pentest"
              url="./assets/case2.png"
            />
            <BoxCases
              title="FTD Educação"
              subtitle="Vinheta"
              url="./assets/case3.png"
            />
            <BoxCases
              title="Luis Piercer"
              subtitle="Criação de site"
              url="./assets/case4.png"
            />
          </Right>
        </WrapperCases>
      </GlobalContainer>

      <FloatImage
        src="./assets/half-rectangle.png"
        width="16rem"
        height="16rem"
        rotate="80"
        top="158rem"
        left="1rem"
        inverter="scaleX(-1)"
        responsive={{
          1100: { top: '204rem', width: '13rem', height: '13rem' },
          1064: { top: '204rem', width: '13rem', height: '13rem', left: '20rem' },
          900: { top: '204rem', width: '13rem', height: '13rem', left: '0rem' }
        }}
      />

      <FloatImage
        src="./assets/hexagon.png"
        width="99rem"
        height="69rem"
        rotate="341"
        top="92rem"
        left="63rem"
        responsive={{
          1300: { left: '43rem' },
          1100: { left: '40rem', top: '135rem' },
          900: {
            left: '10rem',
            top: '151rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          820: {
            left: '10rem',
            top: '251rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          750: {
            left: '0rem',
            top: '251rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          600: {
            left: '-10rem',
            top: '325rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          430: {
            left: '-25rem',
            top: '325rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          },
          389: {
            left: '-23rem',
            top: '327rem',
            width: '75rem',
            height: '45rem',
            brightness: '0.3'
          }
        }}
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
        responsive={{
          1500: { width: '90px', height: '90px', top: '4rem' },
          900: { width: '90px', height: '90px', top: '15rem' },
          620: { width: '90px', height: '90px', top: '4rem' }
        }}
      />
      <FloatImage
        src="./assets/half-rectangle.png"
        width="161px"
        height="160px"
        right="21.5rem"
        top="22rem"
        responsive={{
          900: { top: '32rem', right: '10rem' },
          735: { top: '32rem', right: '3rem' },
          600: {
            width: '121px',
            height: '120px',
            top: '36rem',
            right: '13rem',
            brightness: '0.2'
          },
          399: {
            width: '121px',
            height: '120px',
            top: '40rem',
            right: '13rem',
            brightness: '0.2'
          },
          390: {
            width: '121px',
            height: '120px',
            top: '46rem',
            right: '13rem',
            brightness: '0.2'
          }
        }}
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
        responsive={{
          1500: { right: '5rem' },
          845: { right: '39.5rem' },
          790: { right: '37rem' },
          735: { right: '33rem' },
          700: { right: '53rem', top: '35rem' },
          590: { right: '45rem', top: '39rem' }
        }}
      />
    </Container>
  )
}
