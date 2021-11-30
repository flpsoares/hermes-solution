import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { SameWhyBuilding } from '../components/layout/SameWhyBuilding'
import { Team } from '../components/layout/Team'
import { StepByStep4 } from '../components/layout/StepByStep4'
import { CRMDevelopment } from '../components/layout/_CRM/CRMDevelopment'
import { Budget } from '../components/layout/Budget'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { ContactButtons } from '../components/ButtonContact'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
  position: relative;
`

const Top = styled.div`
  position: relative;
`

const CRM: React.FC = () => {
  return (
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
        <Header background="var(--background-secondary)" />
        <CRMDevelopment />
      </Top>
      <StepByStep4
        title="Entenda nosso"
        subTitle="Passo a passo"
        stepOneTitle="Identificação de desafios"
        stepOne="Procuramos com você, o que pode estar dificultando sua comunicação com os clientes"
        stepTwoTitle="Localize a jornada de seu consumidor"
        stepTwo="Ache como os clientes mais entram em contato com você e veja o melhor processo de venda até agora."
        stepThreeTitle="Reveja resultados"
        stepThree="Veja o que deu certo e o que pode melhorar conosco, para melhoria de resultado"
        stepFourTitle="Definição de nova CRM"
        stepFour="Ao definir, ficar ligado em novos eventos e lançamentos, acompanhamos tudo para melhor resultado e correção técnicas"
      />
      <SameWhyBuilding
        title="Como podemos te ajudar a usar essas ferramentas"
        subtitle="Lorem ipsum dolor sit amet, consectetur"
        ImageOne="./assets/crm/icon.png"
        TitleImageOne="Lorem ipsum dolor sit amet, consectetur"
        ImageTwo="./assets/crm/icon.png"
        TitleImageTwo="Lorem ipsum dolor sit amet, consectetur"
        ImageThree="./assets/crm/icon.png"
        TitleImageThree="Lorem ipsum dolor sit amet, consectetur"
        ImageFour="./assets/crm/icon.png"
        TitleImageFour="Lorem ipsum dolor sit amet, consectetur"
        ImageFive="./assets/crm/icon.png"
        TitleImageFive="Lorem ipsum dolor sit amet, consectetur"
        ImageSix="./assets/crm/icon.png"
        TitleImageSix="Lorem ipsum dolor sit amet, consectetur"
        ImageSeven="./assets/crm/icon.png"
        TitleImageSeven="Lorem ipsum dolor sit amet, consectetur"
        ImageEight="./assets/crm/icon.png"
        TitleImageEight="Lorem ipsum dolor sit amet, consectetur"
      />
      <CustomersServed />
      <Team isHome={false} />
      <Budget />
      <Footer />
      <ContactButtons />
    </Container>
  )
}

export default CRM
