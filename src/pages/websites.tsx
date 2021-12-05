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

const WebSites: React.FC = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="Websites"
      path="websites"
      description={`Tenha sua página para qualquer finalidade, tenha o
      melhor desenvolvimentos para a divulgação de suas ideias e projetos,
      tenha seus views ou conversões mostrando seu diferencial a todos.`}
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
          <WebSitesDevelopment />
        </Top>
        <StepByStep5
          title="Entenda o"
          subTitle="Passo a passo"
          stepOneTitle="Elaboração de briefing"
          stepOne="A equipe entrevista o cliente para compreender e conseguir atender às demandas do projeto"
          stepTwoTitle="Criação da arquitetura UX "
          stepTwo="O arquiteto gráfico realiza o desenvolvimento do protótipo de uma arquitetura gráfica dentro dos padrões pré-acordados com o cliente"
          stepThreeTitle="Criação gráfico artístico"
          stepThree="A arte gráfica é criada pelo design a partir do cliente que dá seus direcionamentos ao projeto"
          stepFourTitle="Desenvolvimento tecnológico"
          stepFour="O seu projeto é realizado tecnologicamente por uma equipe de desenvolvedores"
          stepFiveTitle="Entrega do projeto"
          stepFive="O projeto entra em processo de finalização sempre de acordo com o direcionamento do cliente até que o mesmo fique satisfeito."
        />
        <WhyBuildingWebSites />
        <CustomersServed />
        <Team isHome={false} />
        <Budget />
        <Footer />
        <ContactButtons />
      </Container>
    </PageSEO>
  )
}

export default WebSites
