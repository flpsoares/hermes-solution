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

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
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
        title="Entenda o"
        subTitle="Passo a passo"
        stepOne="Identificação de desafios: procuramos com você, o que pode estar dificultando sua comunicação com os clientes"
        stepTwo="Localize a jornada de seu consumidor: Ache como os clientes mais entram em contato com você e veja o melhor processo de venda até agora."
        stepThree="Reveja resultados: Veja o que deu certo e o que pode melhorar conosco, para melhoria de resultado"
        stepFour="Definição de nova CRM: Ao definir, ficar ligado em novos eventos e lançamentos, acompanhamos tudo para melhor resultado e correção técnicas"
      />
      <SameWhyBuilding
        title="Por que você deve investir em segurança de dados?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
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
      <ServicesProducedTwo
        imageOne="./assets/case1.png"
        imageOneTitle="Cartões Caixa"
        imageOneSubTitle="Ux Design"
        imageTwo="./assets/case1.png"
        imageTwoTitle="Cartões Caixa"
        imageTwoSubTitle="Ux Design"
        imageThree="./assets/case1.png"
        imageThreeTitle="Cartões Caixa"
        imageThreeSubTitle="Ux Design"
        imageFour="./assets/case1.png"
        imageFourTitle="Cartões Caixa"
        imageFourSubTitle="Ux Design"
        title="Alguns cases de sucesso que produzimos"
        subTitle="Nossos divinWos trabalhos desenvolvidos pelos membros de nossa equipe nos motivam a realizar projetos cada vez mais aprimorados."
      />
      <CustomersServed />
      <Team isHome={false} />
      <Budget />
      <Footer />
    </Container>
  )
}

export default CRM
