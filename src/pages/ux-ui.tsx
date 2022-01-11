import styled from 'styled-components'

import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

import { StepByStep3 } from '../components/layout/StepByStep3'

import { FloatImage } from '../components/FloatImage'
import GoodExperience from '../components/layout/_Uxui/GoodExperience'
import { SameWhyBuildingTwo } from '../components/layout/SameWhyBuildingTwo'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { Team } from '../components/layout/Team'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Budget } from '../components/layout/Budget'
import { UxuiDevelopment } from '../components/layout/_Uxui/UxuiDevelopment'
import { ContactButtons } from '../components/ButtonContact'
import { PageSEO } from '../components/PageSEO'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
  position: relative;
`

const Top = styled.div`
  position: relative;
`

const Uxui = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="UX e UI"
      path="ux-ui"
      description={`Tenha um design exclusivo para o seu projeto e aumente sua credibilidade
      e reputação. Trabalho focado no melhor atendimento ao cliente para que
      seja entendido qual é o visual que deseja passar para os clientes,
      levando a melhor experiência possível ao usuário`}
    >
      <Container>
        <Top>
          <FloatImage
            src="/assets/blocks.png"
            width="42rem"
            height="42rem"
            brightness="0.4"
            top="-38rem"
            left="-24rem"
            responsive={{
              1560: { brightness: '0.2' },
              830: { brightness: '0.1' }
            }}
          />
          <FloatImage
            src="/assets/blocks.png"
            width="42rem"
            height="42rem"
            brightness="0.4"
            top="4rem"
            left="-24rem"
            responsive={{
              1560: { brightness: '0.2' },
              830: { brightness: '0.1' }
            }}
          />
          <FloatImage
            src="/assets/blocks.png"
            width="42rem"
            height="42rem"
            brightness="0.4"
            top="46rem"
            left="-24rem"
            responsive={{
              1560: { brightness: '0.2' },
              830: { brightness: '0.1' }
            }}
          />
          <Header hasCases background="var(--background-secondary)" />
          <UxuiDevelopment />
        </Top>
        <StepByStep3
          title="Entenda o"
          subTitle="Passo a passo"
          stepOneTitle="Briefing de ideias"
          stepOne="Organização de ideias e referências para a identidade visual."
          stepTwoTitle="Criação gráfico artístico"
          stepTwo="A arte gráfica é criada pelo designer a partir do cliente que dá seus direcionamentos ao projeto."
          stepThreeTitle="Entrega do projeto"
          stepThree="O projeto entra em processo de finalização sempre de acordo com o direcionamento do cliente até que o mesmo fique satisfeito."
        />
        <GoodExperience />
        <SameWhyBuildingTwo
          title="Diferenciais que nosso processo de UX possui"
          subTitle=" Ter um visual diferenciado em seu site ou aplicativo não é a única vantagem que podemos te proporcionar"
          imageOne="./assets/uxui/icon.svg"
          titleImageOne="Preocupação com a apresentação dos produtos/serviços"
          imageTwo="./assets/uxui/icon.svg"
          titleImageTwo="Dedicação em alavancar a reputação da empresa"
          imageThree="./assets/uxui/icon.svg"
          titleImageThree="Empenho no aumento da visibilidade do seu negócio"
          imageFour="./assets/uxui/icon.svg"
          titleImageFour="Designs altamente criativos e personalizados"
          imageFive="./assets/uxui/icon.svg"
          titleImageFive="Entrega do projeto em altíssima qualidade"
          photoContainer="./assets/uxui/picture.png"
        />
        <ServicesProducedTwo
          imageOne="./assets/uxui/cases/Caixa.png"
          imageOneTitle="Caixa"
          imageOneLink="https://lsc4bg.axshare.com"
          imageTwo="./assets/uxui/cases/Cielo.png"
          imageTwoTitle="Cielo"
          imageTwoLink="https://6x8bnu.axshare.com/"
          imageThree="./assets/uxui/cases/Natura.png"
          imageThreeTitle="Natura"
          imageThreeLink="https://r0z6je.axshare.com/"
          imageFourTitle="Xp Conteúdos"
          imageFour="./assets/uxui/cases/Xp.png"
          imageFourLink="https://vky2zi.axshare.com/#id=siz79j&p=home_mob&g=1"
          title="Algumas artes de sucesso que nossa equipe de designers produziu"
          subTitle="Nossos divinos trabalhos desenvolvidos pela nossa equipe nos motivam a realizar projetos cada vez mais aprimorados"
        />
        <CustomersServed isHome={false} />
        <Team isHome={false} />
        <Budget />
        <Footer />
        <ContactButtons />
      </Container>
    </PageSEO>
  )
}

export default Uxui
