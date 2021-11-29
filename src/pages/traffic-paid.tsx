import styled from 'styled-components'
import { ContactButtons } from '../components/ButtonContact'
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
  position: relative;
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
        stepOneTitle="Identificação de desafios"
        stepOne="Encontre suas dificuldades em sua busca de novos clientes ou o aumento de suas views"
        stepTwoTitle="Identificação de seu público alvo"
        stepTwo="Quem você deseja alcançar e porque? Veja qual é o melhor público para o seu produto"
        stepThreeTitle="Localize a jornada de seu consumidor"
        stepThree="Onde está o seu público alvo e como chamar sua atenção, monte sua estratégia"
        stepFourTitle="Reveja resultados"
        stepFour="Reveja bons e ruins resultados para que as mudanças sejam certeiras"
        stepFiveTitle="Definição de nova estratégia de marketing"
        stepFive="Colocar em prática seus estudos e análises de clientes"
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
      <CustomersServed />
      <Team isHome={false} />
      <Budget />
      <Footer />
      <ContactButtons />
    </Container>
  )
}

export default TrafficPaid
