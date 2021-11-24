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
        subtitle="Temos sistemas incríveis de criação de sites e estratégias de marketing orgânico para ajudar o seu produto a atingir o ápice de vendas e conversão, estamos mais que preparados para te acompanhar nessa nova jornada."
        ImageOne="./assets/crm/icon.png"
        TitleImageOne="Apenas com o valor do site, você tem a opção de criar a sua estratégia para chamar a atenção de seu público alvo sem precisar pagar por anúncios."
        ImageTwo="./assets/crm/icon.png"
        TitleImageTwo="Com o nosso produto, você pode editar e atualizar o seu site quanto quiser, e com um custo baixíssimo, facilitando assim, sua interação com os clientes."
        ImageThree="./assets/crm/icon.png"
        TitleImageThree="Lorem ipsum dolor sit amet, consectetur"
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
      <ContactButtons />
    </Container>
  )
}

export default CRM
