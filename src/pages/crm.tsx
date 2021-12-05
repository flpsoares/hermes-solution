import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { SameWhyBuilding } from '../components/layout/SameWhyBuilding'
import { Team } from '../components/layout/Team'
import { StepByStep4 } from '../components/layout/StepByStep4'
import { CRMDevelopment } from '../components/layout/_CRM/CRMDevelopment'
import { Budget } from '../components/layout/Budget'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
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

const CRM: React.FC = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="CRM e CMS"
      path="crm"
      description={`Otimize sua relação com os clientes, de modo fácil e simples. O CMS e o
      CRM são ferramentas utilizadas para gerenciar conteúdos de uma plataforma
      sem a necessidade do auxílio de um desenvolvedor, facilitando as
      modificações diárias de seus conteúdos.`}
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
          <CRMDevelopment />
        </Top>
        <StepByStep4
          title="Entenda nosso"
          subTitle="Passo a passo"
          stepOneTitle="Identificação de desafios"
          stepOne="Procuramos o que pode estar dificultando sua comunicação com os clientes"
          stepTwoTitle="Jornada do consumidor"
          stepTwo="Identificamos como os clientes mais entram em contato com você e entendemos o melhor processo de venda"
          stepThreeTitle="Reveja resultados"
          stepThree="Analisamos todos os resultados para avaliar a melhor estratégia"
          stepFourTitle="Definição de nova CRM"
          stepFour="Ficamos atentos a novidades, eventos, lançamentos, notícias, etc. Acompanhando tudo para melhores resultados e correções técnicas"
        />
        <SameWhyBuilding
          title="Como podemos te ajudar a usar essas ferramentas"
          subtitle="Verifique melhor suas funções e vantagens "
          ImageOne="./assets/crm/icon.png"
          TitleImageOne="Gerenciamento de conteúdo"
          ImageTwo="./assets/crm/icon.png"
          TitleImageTwo="Informações gerenciadas"
          ImageThree="./assets/crm/icon.png"
          TitleImageThree="Armazenamento de informações dos clientes"
          ImageFour="./assets/crm/icon.png"
          TitleImageFour="Coleta de dados"
          ImageFive="./assets/crm/icon.png"
          TitleImageFive="Gerenciamento da estrutura do site"
          ImageSix="./assets/crm/icon.png"
          TitleImageSix="Maior acesso aos contatos"
          ImageSeven="./assets/crm/icon.png"
          TitleImageSeven="Avanço de leads"
          ImageEight="./assets/crm/icon.png"
          TitleImageEight="Conquista de mais vendas"
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

export default CRM
