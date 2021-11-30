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
        displayTwo="none"
        displayThree="none"
        displayFour="none"
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
      <ContactButtons />
    </Container>
  )
}

export default Uxui
