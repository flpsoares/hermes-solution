import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { StepByStep4 } from '../components/layout/StepByStep4'
import { Team } from '../components/layout/Team'
import { DataSecurityDevelopment } from '../components/layout/_DataSecurity/DataSecurityDevelopment'

import { SameWhyBuilding } from '../components/layout/SameWhyBuilding'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { Budget } from '../components/layout/Budget'
import { ContactButtons } from '../components/ButtonContact'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
  position: relative;
`

const Top = styled.div`
  position: relative;
`

const DataSecurity: React.FC = () => {
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
        <DataSecurityDevelopment />
      </Top>
      <StepByStep4
        title="Entenda"
        subTitle="Como fazemos"
        stepOne="Verificação: Reconhecimento e análise do sistema para coleta de informações."
        stepTwo="Análise de informações e risco: Reconhecimento de tentativas de invasão e pequeno relatório sobre possíveis tentativas futuras."
        stepThree="Tentativas: Realização de testes no sistema."
        stepFour="Análise final: Reconhecimentos gerais do funcionamento do sistema de segurança."
      />
      <SameWhyBuilding
        title="Por que você deve investir em segurança de dados?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        ImageOne="./assets/data-security/icon-1.png"
        TitleImageOne="Lorem ipsum dolor sit amet, consectetur"
        ImageTwo="./assets/data-security/icon-1.png"
        TitleImageTwo="Lorem ipsum dolor sit amet, consectetur"
        ImageThree="./assets/data-security/icon-1.png"
        TitleImageThree="Lorem ipsum dolor sit amet, consectetur"
        ImageFour="./assets/data-security/icon-1.png"
        TitleImageFour="Lorem ipsum dolor sit amet, consectetur"
        ImageFive="./assets/data-security/icon-1.png"
        TitleImageFive="Lorem ipsum dolor sit amet, consectetur"
        ImageSix="./assets/data-security/icon-1.png"
        TitleImageSix="Lorem ipsum dolor sit amet, consectetur"
        ImageSeven="./assets/data-security/icon-1.png"
        TitleImageSeven="Lorem ipsum dolor sit amet, consectetur"
        ImageEight="./assets/data-security/icon-1.png"
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
      <ContactButtons />
    </Container>
  )
}

export default DataSecurity
