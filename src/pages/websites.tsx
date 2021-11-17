import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ServicesProduced } from '../components/layout/ServicesProduced'
import { Team } from '../components/layout/Team'
import { StepByStep5 } from '../components/layout/StepByStep5'
import { WebSitesDevelopment } from '../components/layout/_WebSites/WebSitesDevelopment'
import { WhyBuildingWebSites } from '../components/layout/_WebSites/WhyBuildingWebsites'
import { Budget } from '../components/layout/Budget'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
`

const Top = styled.div`
  position: relative;
`

const WebSites: React.FC = () => {
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
        <WebSitesDevelopment />
      </Top>
      <StepByStep5
        title="Entenda o"
        subTitle="Passo a passo"
        stepOne="Elaboração do briefing: A equipe entrevista cliente para compreender e conseguir atender às demandas do projeto"
        stepTwo="Criação da arquitetura gráfica: O arquiteto gráfico realiza o desenvolvimento do protótipo de uma arquitetura gráfica dentro dos padrões pré-acordados com o cliente"
        stepThree="Criação do gráfico artístico: A arte gráfica é criada pelo design a partir do cliente que dá seus direcionamentos ao projeto"
        stepFour="Desenvolvimento tecnológico: O seu projeto é realizado tecnologicamente por uma equipe de desenvolvedores"
        stepFive="Entrega do projeto: O projeto entra em processo de finalização sempre de acordo com o direcionamento do cliente até que o mesmo fique satisfeito."
      />
      <WhyBuildingWebSites />
      <ServicesProduced />
      <CustomersServed />
      <Team isHome={false} />
      <Budget />
      <Footer />
    </Container>
  )
}

export default WebSites
