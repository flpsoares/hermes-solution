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
import { PageSEO } from '../components/PageSEO'

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
    <PageSEO
      isServicePage={true}
      title="Tráfego Pago"
      path="traffic-paid"
      description={`O tráfego pago é responsável por todos os anúncios e propagandas que
      existem nas mídias digitais, e com eles vem os Adsenses (ADS), entre as
      principais plataformas o Google Adsense e o Facebook Adsense, com eles é
      possível monitorar todo o desempenho de seus anúncios, uma de suas
      funções, são os famosos cookies, utilizados para o monitoramento das
      pessoa, para poder mostrar um anúncio de um produto ou serviço, de algo
      que já se interessou algum dia navegando na internet.`}
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
          <Header background="var(--background-secondary)" />
          <TrafficPaidDevelopment />
        </Top>
        <StepByStep5
          title="Entenda o"
          subTitle="Passo a passo"
          stepOneTitle="Identificação de desafios"
          stepOne="Analise as dificuldades que encontra na busca por clientes, aumento de views, etc."
          stepTwoTitle="Identificação de seu público alvo"
          stepTwo="Processos de compreensão e definição do seu público"
          stepThreeTitle="Jornada do consumidor"
          stepThree="Identifique onde está o seu público alvo e como chamar sua atenção"
          stepFourTitle="Reveja resultados"
          stepFour="Análise de resultados bons e ruins para próximos passos"
          stepFiveTitle="Definição de nova estratégia de marketing"
          stepFive="Efetivação das estratégias, estudos e análises realizados anteriormente"
        />
        <SameWhyBuilding
          title="Por que você deve investir em tráfego pago?"
          subtitle="As pessoas estão cada vez mais procurando e utilizando esse serviço, entenda melhor algumas vantagens que o mesmo pode trazer para você e seu negócio"
          ImageOne="./assets/trafficpaid/icon.svg"
          TitleImageOne="Crescimento de leads"
          ImageTwo="./assets/trafficpaid/icon.svg"
          TitleImageTwo="Aperfeiçoamento de público"
          ImageThree="./assets/trafficpaid/icon.svg"
          TitleImageThree="Conversão maior"
          ImageFour="./assets/trafficpaid/icon.svg"
          TitleImageFour="Mais relevância nas pesquisas"
          ImageFive="./assets/trafficpaid/icon.svg"
          TitleImageFive=" Direcionamento do seu serviço/produto"
          ImageSix="./assets/trafficpaid/icon.svg"
          TitleImageSix="Melhor relacionamento com os clientes"
          ImageSeven="./assets/trafficpaid/icon.svg"
          TitleImageSeven="Reconhecimento da marca"
          ImageEight="./assets/trafficpaid/icon.svg"
          TitleImageEight="Divulgação eficiente"
        />
        <CustomersServed marginTop="9rem" />
        <Team isHome={false} />
        <Budget />
        <Footer />
        <ContactButtons />
      </Container>
    </PageSEO>
  )
}

export default TrafficPaid
