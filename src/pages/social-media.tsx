import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Team } from '../components/layout/Team'
import { StepByStep5 } from '../components/layout/StepByStep5'
import { SocialMediaDevelopment } from '../components/layout/_SocialMedia/SocialMediaDevelopment'
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

const SocialMedia: React.FC = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="Social Media"
      description={`As redes sociais são muito importantes para que o seu produto tenha a
      visibilidade devida, conosco, iremos conversar sobre a identidade visual
      perfeita e como iremos divulgar cada publicação com o copy certo e
      planejado. Com estudo de mercado e nossa excelente equipe de audiovisual,
      vamos montar a vitrine perfeita para você.`}
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
          <SocialMediaDevelopment />
        </Top>
        <StepByStep5
          title="Entenda o"
          subTitle="Passo a passo"
          stepOneTitle="Elaboração do briefing"
          stepOne="A equipe entrevista cliente para compreender e conseguir atender às demandas do projeto"
          stepTwoTitle="Criação da arquitetura gráfica"
          stepTwo="O arquiteto gráfico realiza o desenvolvimento do protótipo de uma arquitetura gráfica dentro dos padrões pré-acordados com o cliente"
          stepThreeTitle="Criação do gráfico artístico"
          stepThree="A arte gráfica é criada pelo design a partir do cliente que dá seus direcionamentos ao projeto"
          stepFourTitle="Desenvolvimento tecnológico"
          stepFour="O seu projeto é realizado tecnologicamente por uma equipe de desenvolvedores"
          stepFiveTitle="Entrega do projeto"
          stepFive="O projeto entra em processo de finalização sempre de acordo com o direcionamento do cliente até que o mesmo fique satisfeito"
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

export default SocialMedia
