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
      criar designes únicos e de alta performance. Além de criar um laço mais
      firme com o seu cliente, também valoriza sua empresa e ajuda na evolução
      da marca, fazendo com que o cliente sempre saiba onde te encontrar.`}
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
          subtitle="Muitos entendem os benefícios de aplicativos como a facilidade de achar uma empresa e de solicitar os serviços, mas, vai muito além disso. O aplicativo também reduz consideravelmente o uso de dados dos clientes, também ajuda as empresas a manter o nível de segurança e resolver seus problemas. Portanto os benefícios de obter um aplicativo são inúmeros, para o cliente ele vai se sentir mais confortável do que procurar em um navegador, terá acesso rápido de sempre saber onde te encontrar, terá mais segurança e seu consumo de dados serão reduzidos. "
          ImageOne="./assets/app/icon.png"
          TitleImageOne="Lorem ipsum dolor sit amet, consectetur"
          ImageTwo="./assets/app/icon.png"
          TitleImageTwo="Lorem ipsum dolor sit amet, consectetur"
          ImageThree="./assets/app/icon.png"
          TitleImageThree="Lorem ipsum dolor sit amet, consectetur"
          ImageFour="./assets/app/icon.png"
          TitleImageFour="Lorem ipsum dolor sit amet, consectetur"
          ImageFive="./assets/app/icon.png"
          TitleImageFive="Lorem ipsum dolor sit amet, consectetur"
          ImageSix="./assets/app/icon.png"
          TitleImageSix="Lorem ipsum dolor sit amet, consectetur"
          ImageSeven="./assets/app/icon.png"
          TitleImageSeven="Lorem ipsum dolor sit amet, consectetur"
          ImageEight="./assets/app/icon.png"
          TitleImageEight="Lorem ipsum dolor sit amet, consectetur"
        />
        <ServicesProducedTwo
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
          title="Alguns cases de sucesso que produzimos"
          subTitle="Nossos divinWos trabalhos desenvolvidos pelos membros de nossa equipe nos motivam a realizar projetos cada vez mais aprimorados."
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

export default App
