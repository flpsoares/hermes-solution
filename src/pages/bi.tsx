import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Team } from '../components/layout/Team'
import { StepByStep4 } from '../components/layout/StepByStep4'
import { BIDevelopment } from '../components/layout/_BI/BIDevelopment'
import { Budget } from '../components/layout/Budget'
import { ContactButtons } from '../components/ButtonContact'
import { PageSEO } from '../components/PageSEO'
import { SameWhyBuildingFour } from '../components/layout/SameWhyBuildingFour'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
  position: relative;
`

const Top = styled.div`
  position: relative;
`

const BI: React.FC = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="Business Intelligence"
      path="bi"
      description={`O estudo do mercado em que se atua é fundamental para qualquer tomada de
      decisão, o cuidado com números, estratégias e objetivos é o que faz uma
      empresa crescer. O crescimento digital fez com que todos tenham inúmeros
      concorrentes, e com isso, o cuidado com a criação de estratégias virou
      uma chave importante para todas as empresas`}
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
          <BIDevelopment />
        </Top>
        <StepByStep4
          title="Passo a passo"
          subTitle="Criação de B.I"
          stepOneTitle="Identificação de desafios"
          stepOne="Localizamos com você o que pode estar dificultando sua comunicação com os clientes "
          stepTwoTitle="Jornada do consumidor"
          stepTwo=" Identificamos como os clientes mais entram em contato com você e o melhor processo de venda"
          stepThreeTitle="Reveja resultados"
          stepThree="Analisamos todos os resultados para avaliar a melhor estratégia"
          stepFourTitle="Definição de nova BI"
          stepFour="Ao identificar as novas estratégias para o cuidado da empresa verificamos o funcionamento semanal ou mensal do mesmo"
        />
        <SameWhyBuildingFour
          title="Porque usar B.I na sua empresa"
          subTitle="Auxiliamos sua empresa na tomada de decisões com estudos do mercado, informações antigas e atuais são importantes para que siga tudo harmoniosamente."
          imageOne="./assets/bi/icon-1.png"
          titleImageOne="A identificação de tendências do mercado ajudam a estarem à frente da concorrência"
          imageTwo="./assets/bi/icon-2.png"
          titleImageTwo="Usando BI os analistas poderão analisar o desempenho da empresa para ajudar a melhorar a eficiência do trabalho"
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

export default BI
