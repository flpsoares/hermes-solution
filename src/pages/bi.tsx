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
      empresa crescer e o quanto ela ainda pode crescer. O crescimento digital
      fez com que todos tenham inúmeros concorrentes, e com isso, o cuidado com
      a criação de estratégias virou uma chave importante para todas as
      empresas, planejar cada passo, tendo em mente o que está acontecendo no
      mercado, é o que o BI nos proporciona.`}
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
          title="Passo a passo para nossa"
          subTitle="Criação de B.I"
          stepOneTitle="Identificação de desafios"
          stepOne="Procuramos com você, o que pode estar dificultando sua comunicação com os clientes"
          stepTwoTitle="Localize a jornada de seu consumidor"
          stepTwo="Ache como os clientes mais entram em contato com você e veja o melhor processo de venda até agora."
          stepThreeTitle="Reveja resultados"
          stepThree="Veja o que deu certo e o que pode melhorar conosco, para melhoria de resultado"
          stepFourTitle="Definição de nova BI"
          stepFour="Ao identificar as novas estratégias para o cuidado da empresa, verificaremos com vocês o funcionamento semanal ou mensal do mesmo."
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
