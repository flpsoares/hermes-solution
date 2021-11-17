import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { Budget } from '../components/layout/Budget'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { SameWhyBuilding } from '../components/layout/SameWhyBuilding'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { StepByStep5 } from '../components/layout/StepByStep5'
import { Team } from '../components/layout/Team'
import { TrafficPaidDevelopment } from '../components/layout/_TrafficPaid/TrafficPaidDevelopment'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
`

const Top = styled.div`
  position: relative;
`

const TrafficPaid: React.FC = () => {
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
        <TrafficPaidDevelopment />
      </Top>
      <StepByStep5
        title="Entenda o"
        subTitle="Passo a passo"
        stepOne="Identificação de desafios: Encontre suas dificuldades em sua busca de novos clientes ou o aumento de suas views"
        stepTwo="Identificação de seu público alvo: Quem você deseja alcançar e porque? Veja qual é o melhor público para o seu produto"
        stepThree="Localize a jornada de seu consumidor: Onde está o seu público alvo e como chamar sua atenção, monte sua estratégia"
        stepFour="Reveja resultados: Reveja bons e ruins resultados para que as mudanças sejam certeiras"
        stepFive="Definição de nova estratégia de marketing: Colocar em prática seus estudos e análises de clientes"
      />
      <SameWhyBuilding
        title="Por que você deve investir em segurança de dados?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        ImageOne="./assets/trafficpaid/icon.svg"
        TitleImageOne="Lorem ipsum dolor sit amet, consectetur"
        ImageTwo="./assets/trafficpaid/icon.svg"
        TitleImageTwo="Lorem ipsum dolor sit amet, consectetur"
        ImageThree="./assets/trafficpaid/icon.svg"
        TitleImageThree="Lorem ipsum dolor sit amet, consectetur"
        ImageFour="./assets/trafficpaid/icon.svg"
        TitleImageFour="Lorem ipsum dolor sit amet, consectetur"
        ImageFive="./assets/trafficpaid/icon.svg"
        TitleImageFive="Lorem ipsum dolor sit amet, consectetur"
        ImageSix="./assets/trafficpaid/icon.svg"
        TitleImageSix="Lorem ipsum dolor sit amet, consectetur"
        ImageSeven="./assets/trafficpaid/icon.svg"
        TitleImageSeven="Lorem ipsum dolor sit amet, consectetur"
        ImageEight="./assets/trafficpaid/icon.svg"
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

export default TrafficPaid
