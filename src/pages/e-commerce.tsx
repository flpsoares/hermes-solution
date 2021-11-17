import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { StepByStep5 } from '../components/layout/StepByStep5'
import { Team } from '../components/layout/Team'
import { EcommerceDevelopment } from '../components/layout/_Ecommerce/EcommerceDevelopment'
import { Budget } from '../components/layout/Budget'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { SameWhyBuildingTwo } from '../components/layout/SameWhyBuildingTwo'

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
      <StepByStep5
        title="Entenda o"
        subTitle="Passo a Passo"
        stepOne="Elaboração de briefing: A equipe entrevista o cliente para compreender e conseguir entender as demandas do projeto"
        stepTwo="Criação da arquitetura gráfica: o arquiteto gráfico realiza o desenvolvimento do protótipo de uma arquitetura dentro dos padrões pré-acordados com o cliente"
        stepThree="Criação gráfico artístico: A arte gráfica é criada pelo designer a partir do cliente que dá seus direcionamentos ao projeto."
        stepFour="Desenvolvimento tecnológico: Seu projeto é realizado tecnologicamente por uma equipe de desenvolvedores."
        stepFive="Entrega do projeto: o projeto entra em processo de finalização sempre de acordo com o direcionamento do cliente até que o mesmo fique satisfeito."
      />
      <SameWhyBuildingTwo
        title="Por que devemos construir seu E-commerce?"
        subTitle=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
          bibendum laoreet. Proin gravida dolor sit amet lacus"
        imageOne="./assets/ecommerce/icon-1.png"
        titleImageOne="Lorem ipsum dolor sit amet, consectetur"
        imageTwo="./assets/ecommerce/icon-1.png"
        titleImageTwo="Lorem ipsum dolor sit amet, consectetur"
        imageThree="./assets/ecommerce/icon-1.png"
        titleImageThree="Lorem ipsum dolor sit amet, consectetur"
        imageFour="./assets/ecommerce/icon-1.png"
        titleImageFour="Lorem ipsum dolor sit amet, consectetur"
        imageFive="./assets/ecommerce/icon-1.png"
        titleImageFive="Lorem ipsum dolor sit amet, consectetur"
        photoContainer="./assets/ecommerce/banner-2.png"
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

export default Ecommerce
