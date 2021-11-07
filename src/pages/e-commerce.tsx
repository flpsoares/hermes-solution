import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { StepByStep } from '../components/layout/StepByStep'
import { Team } from '../components/layout/Team'
import { EcommerceDevelopment } from '../components/layout/_Ecommerce/EcommerceDevelopment'
import { WhyBuildingEcommerce } from '../components/layout/_Ecommerce/WhyBuildingEcommerce'
import { ServicesEcommerce } from '../components/layout/_Ecommerce/ServicesEcommerce'
import { Budget } from '../components/layout/Budget'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
`

const Top = styled.div`
  position: relative;
`

const Ecommerce: React.FC = () => {
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
        <EcommerceDevelopment />
      </Top>
      <StepByStep
        title="Entenda o"
        subTitle="Passo a Passo"
        stepOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepFour="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepFive="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
      />
      <WhyBuildingEcommerce />
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

export default Ecommerce
