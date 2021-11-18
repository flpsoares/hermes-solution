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
import { ContactButtons } from '../components/ButtonContact'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
  position: relative;
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
        title="Como podemos fazer do seu comércio, um comércio de sucesso"
        subTitle=" Com boas estratégias de marketing, seja orgânico ou pago, estudo de seu público e organização, suas conversões com certeza vão aumentar, venha conosco para seu crescimento"
        imageOne="./assets/ecommerce/icon-1.png"
        titleImageOne="O crescimento de comércios digitais, e com isso, o crescimento da concorrência também é grande, e por isso é de grande importância ter ótimos profissionais para te ajudar na criação e estratégia de seu comércio."
        imageTwo="./assets/ecommerce/icon-1.png"
        titleImageTwo="Ter uma boa estratégia também não garante conversão, um site bem estruturado e bem escrito é fundamental para uma venda de produtos, com os nossos profissionais, toda a estrutura virá de boa qualidade, com o seu acompanhamento."
        imageThree="./assets/ecommerce/icon-1.png"
        titleImageThree="A organização que um E-commerce pode trazer a sua empresa é de muita importância, com controle de estoque, saída e entrada de produtos, entre outros, vai facilitar seu desenvolvimento no trabalho. "
        imageFour="./assets/ecommerce/icon-1.png"
        titleImageFour="O Brasil é o terceiro país que mais faz compras pela internet. O País lidera ainda o ranking de comércio eletrônico na América Latina, com participação nas compras de 59,1%."
        photoContainer="./assets/ecommerce/banner-2.png"
      />
      <CustomersServed />
      <Team isHome={false} />
      <Budget />
      <Footer />
      <ContactButtons />
    </Container>
  )
}

export default Ecommerce
