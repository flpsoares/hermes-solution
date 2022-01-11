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
import { SameWhyBuildingThree } from '../components/layout/SameWhyBuildingThree'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'

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
      path="social-media"
      description={`As redes sociais são muito importantes para que seu produto, serviço ou
      negócio tenha visibilidade. O Social Media pode realizar do mais simples
      ao mais complexo serviço, do atendimento às mensagens no Instagram à
      criação de um calendário editorial inteiro. Com estudo de mercado e nossa
      excelente equipe vamos realizar e auxiliar nos processos de sua rede`}
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
          <Header hasCases background="var(--background-secondary)" />
          <SocialMediaDevelopment />
        </Top>
        <StepByStep5
          title="Entenda o"
          subTitle="Passo a passo"
          stepOneTitle="Elaboração do briefing"
          stepOne="A equipe entrevista cliente para compreender e conseguir atender às demandas do projeto"
          stepTwoTitle="Criação de arquitetura UX"
          stepTwo="O arquiteto gráfico realiza o desenvolvimento do protótipo de uma arquitetura gráfica dentro dos padrões pré-acordados com o cliente"
          stepThreeTitle="Criação do gráfico artístico"
          stepThree="A arte gráfica é criada pelo design a partir do cliente que dá seus direcionamentos ao projeto"
          stepFourTitle="Desenvolvimento tecnológico"
          stepFour="O seu projeto é realizado tecnologicamente por uma equipe de desenvolvedores"
          stepFiveTitle="Entrega do projeto"
          stepFive="O projeto entra em processo de finalização sempre de acordo com o direcionamento do cliente até que o mesmo fique satisfeito"
        />
        <SameWhyBuildingThree
          title="Não é só uma rede social"
          subTitle="Sua página, seja ela qual for, é a cara de seu comércio, o cuidado e planejamento dela é fundamental para o marketing de sua empresa, vamos focar em deixar o produto no topo? Venha conosco e vamos montar um passo a passo de estratégias pensadas apenas para você."
          imageOne="./assets/social-media/icon-1.png"
          titleImageOne="Passe mais credibilidade com o cuidado devido e planejamento da divulgação de seu produto nas redes"
          imageTwo="./assets/social-media/icon-2.png"
          titleImageTwo="Crie intimidade com os seus clientes e conquiste novas pessoas com bons copys e designs únicos feitos apenas para sua empresa"
          imageThree="./assets/social-media/icon-3.png"
          titleImageThree="Tenha a identidade perfeita para que seu chame a atenção e marque seus clientes com artes divinas para o seu comércio"
        />
        <ServicesProducedTwo
          imageOne="./assets/social-media/cases/Colab.png"
          imageOneTitle="Colab"
          imageOneLink="https://instagram.com/barra_colab?utm_medium=copy_link"
          imageTwo="./assets/social-media/cases/Security.png"
          imageTwoTitle="Security"
          imageTwoLink="https://instagram.com/hermessecurity?utm_medium=copy_link"
          imageThree="./assets/social-media/cases/Sylvio.png"
          imageThreeTitle="Sylvio"
          imageThreeLink="https://instagram.com/nutrisylvioprado?utm_medium=copy_link"
          title="Algumas artes de sucesso que nossa equipe de designers produziu"
          subTitle="Nossos divinos trabalhos desenvolvidos pela nossa equipe nos motivam a realizar projetos cada vez mais aprimorados"
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
