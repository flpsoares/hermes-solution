import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ServicesProduced } from '../components/layout/ServicesProduced'
import { Team } from '../components/layout/Team'
import { StepByStep } from '../components/layout/StepByStep'
import { CRMDevelopment } from '../components/layout/_CRM/CRMDevelopment'
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
      <StepByStep
        title="Entenda o"
        subTitle="Passo a passo"
        stepOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepFour="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepFive="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
      />
      {/* <WhyBuildingWebSites /> */}
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
      <Footer />
    </Container>
  )
}

export default CRM
