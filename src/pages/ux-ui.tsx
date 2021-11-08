import styled from 'styled-components'

import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

import { StepByStep } from '../components/layout/StepByStep'

import { FloatImage } from '../components/FloatImage'
import GoodExperience from '../components/layout/_Uxui/GoodExperience'
import { SameWhyBuildingTwo } from '../components/SameWhyBuildingTwo'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { Team } from '../components/layout/Team'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Budget } from '../components/layout/Budget'
import { UxuiDevelopment } from '../components/layout/_Uxui/UxuiDevelopment'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
`

const Top = styled.div`
  position: relative;
`

const Uxui = () => {
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
        <UxuiDevelopment />
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
      <GoodExperience />
      <SameWhyBuildingTwo
        title="Diferenciais que nosso processo de UX possui"
        subTitle=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
          bibendum laoreet. Proin gravida dolor sit amet lacus"
        imageOne="./assets/uxui/icon.svg"
        titleImageOne="Lorem ipsum dolor sit amet, consectetur"
        imageTwo="./assets/uxui/icon.svg"
        titleImageTwo="Lorem ipsum dolor sit amet, consectetur"
        imageThree="./assets/uxui/icon.svg"
        titleImageThree="Lorem ipsum dolor sit amet, consectetur"
        imageFour="./assets/uxui/icon.svg"
        titleImageFour="Lorem ipsum dolor sit amet, consectetur"
        imageFive="./assets/uxui/icon.svg"
        titleImageFive="Lorem ipsum dolor sit amet, consectetur"
        photoContainer="./assets/uxui/picture.png"
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
      <CustomersServed isHome={false} />
      <Team isHome={false} />
      <Budget />
      <Footer />
    </Container>
  )
}

export default Uxui
