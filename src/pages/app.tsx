import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ServicesProducedTwo } from '../components/layout/ServicesProducedTwo'
import { SameWhyBuilding } from '../components/layout/SameWhyBuilding'
import { Team } from '../components/layout/Team'
import { AppDevelopment } from '../components/layout/_App/AppDevelopment'
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

const App: React.FC = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="App"
      path="app"
      description={`Criação de aplicativos IOS e Android para qualquer finalidade, podendo
      criar designs únicos e de alta performance. Além de criar um laço mais
      firme com o seu cliente, também valoriza sua empresa e ajuda na evolução
      da marca, fazendo com que o cliente sempre saiba onde te encontrar`}
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
          <AppDevelopment />
        </Top>
        <SameWhyBuilding
          title="Por que possuir um App? "
          subtitle="Considere alguns benefícios que possuir um aplicativo pode trazer"
          ImageOne="./assets/app/icon.png"
          TitleImageOne="Acesso rápido"
          ImageTwo="./assets/app/icon.png"
          TitleImageTwo="Redução do uso de dados do cliente"
          ImageThree="./assets/app/icon.png"
          TitleImageThree="Manutenção do nível de segurança da empresa"
          ImageFour="./assets/app/icon.png"
          TitleImageFour="Fácil acesso"
          ImageFive="./assets/app/icon.png"
          TitleImageFive="Melhor gerenciamento"
          ImageSix="./assets/app/icon.png"
          TitleImageSix="Alavancagem de processos e etapas"
          ImageSeven="./assets/app/icon.png"
          TitleImageSeven="Estratégias mais efetivas"
          ImageEight="./assets/app/icon.png"
          TitleImageEight="Aumento da visibilidade"
        />
        {/* <ServicesProducedTwo
          imageOne="./assets/case1.png"
          imageOneTitle="Cartões Caixa"
          imageOneSubTitle="Ux Design"
          imageTwo="./assets/case1.png"
          imageTwoTitle="Cartões Caixa"
          imageTwoSubTitle="Ux Design"
          imageThree="./assets/case1.png"
          imageThreeTitle="Cartões Caixa"
          imageThreeSubTitle="Ux Design"
          imageFour="./assets/case1.png"
          imageFourTitle="Cartões Caixa"
          imageFourSubTitle="Ux Design"
          title="Alguns projetos de sucesso que realizamos"
          subTitle="Nossos divinos trabalhos desenvolvidos pela nossa equipe nos motivam a realizar projetos cada vez mais aprimorados"
        /> */}
        <CustomersServed />
        <Team isHome={false} />
        <Budget />
        <Footer />
        <ContactButtons />
      </Container>
    </PageSEO>
  )
}

export default App
