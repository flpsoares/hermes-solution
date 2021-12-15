import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { StepByStep5 } from '../components/layout/StepByStep5'
import { Team } from '../components/layout/Team'
import { DataSecurityDevelopment } from '../components/layout/_DataSecurity/DataSecurityDevelopment'

import { SameWhyBuilding } from '../components/layout/SameWhyBuilding'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { Budget } from '../components/layout/Budget'
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

const DataSecurity: React.FC = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="Segurança de dados"
      path="data-security"
      description={`Você, seu público, projeto, ideia e serviço merecem a melhor segurança
      possível. Ataques e invasões podem acontecer em qualquer negócio, as
      pequenas e grandes empresas se preocupam com suas informações e dados, e
      é necessário uma prevenção de alto nível para que tudo esteja seguro e
      preservado, tanto para você quanto para todos que acessarem seu site`}
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
          <DataSecurityDevelopment />
        </Top>
        <StepByStep5
          title="Entenda"
          subTitle="Como fazemos"
          stepOneTitle="Verificação"
          stepOne="Reconhecimento e análise do sistema para coleta de informações."
          stepTwoTitle="Análise de informações e risco"
          stepTwo="Reconhecimento de tentativas de invasão e pequeno relatório sobre possíveis tentativas futuras."
          stepThreeTitle="Tentativas"
          stepThree="Realização de testes no sistema."
          stepFourTitle="Análise final"
          stepFour="Reconhecimentos gerais do funcionamento do sistema de segurança."
          stepFiveTitle="Relatórios"
          stepFive="Informações detalhadas sobre a análise para o cliente."
        />
        <SameWhyBuilding
          title="Por que você deve investir em segurança de dados?"
          subtitle="Contemple alguns ótimos motivos para não esperar o pior acontecer para investir na segurança de seu negócio"
          ImageOne="./assets/data-security/icon-1.png"
          TitleImageOne="Informações preservadas"
          ImageTwo="./assets/data-security/icon-1.png"
          TitleImageTwo="Prevenção a ataques e invasões"
          ImageThree="./assets/data-security/icon-1.png"
          TitleImageThree="Maior credibilidade"
          ImageFour="./assets/data-security/icon-1.png"
          TitleImageFour="Evitar prejuízos"
          ImageFive="./assets/data-security/icon-1.png"
          TitleImageFive="Manutenção do acesso"
          ImageSix="./assets/data-security/icon-1.png"
          TitleImageSix="Aumento da integridade de dados"
          ImageSeven="./assets/data-security/icon-1.png"
          TitleImageSeven="Confiabilidade mais alta"
        />
        <ServicesProducedTwo
          imageOne="./assets/case1.png"
          imageOneTitle="Cartões Caixa"
          imageOneSubTitle="Ux Design"
          displayOne="none"
          displayTwo="none"
          displayThree="none"
          imageTwo="./assets/case1.png"
          imageTwoTitle="Cartões Caixa"
          imageTwoSubTitle="Ux Design"
          imageThree="./assets/case1.png"
          imageThreeTitle="Cartões Caixa"
          imageThreeSubTitle="Ux Design"
          imageFour="./assets/case1.png"
          imageFourTitle="Cartões Caixa"
          imageFourSubTitle="Ux Design"
          title="Alguns projetos de sucesso que realizamos"
          subTitle="Nossos divinos trabalhos desenvolvidos pela nossa equipe nos motivam a realizar projetos cada vez mais aprimorados"
        />
        <CustomersServed />
        <Team isHome={false} />
        <Budget />
        <Footer />
        <ContactButtons />
      </Container>
    </PageSEO>
  )
}

export default DataSecurity
