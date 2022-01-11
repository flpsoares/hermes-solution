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
import { PageSEO } from '../components/PageSEO'

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
    <PageSEO
      isServicePage={true}
      title="E-commerce"
      path="e-commerce"
      description={`Desenvolva seu negócio de forma digital e desfrute das vantagens de
      possuir uma loja virtual. Acompanhe com a máxima transparência em tempo
      real todos os processos que acontecem dentro do seu empreendimento,
      realizando assim uma gestão mais dinâmica com um poder de venda mais
      eficiente`}
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
          <EcommerceDevelopment />
        </Top>
        <StepByStep5
          title="Entenda o"
          subTitle="Passo a Passo"
          stepOneTitle="Elaboração do briefing"
          stepOne="A equipe entrevista o cliente para compreender e conseguir entender as demandas do projetoA equipe entrevista o cliente para compreender e conseguir atender às demandas do projeto"
          stepTwoTitle="Criação de arquitetura UX"
          stepTwo="O arquiteto gráfico realiza a criação do protótipo do projeto dentro dos padrões pré-acordados com o cliente"
          stepThreeTitle="Criação do gráfico artístico"
          stepThree="As artes são criadas pelo designer com base nas necessidades"
          stepFourTitle="Desenvolvimento tecnológico"
          stepFour="Nossa equipe desenvolve o seu projeto dentro dos padrões estabelecidos pelo cliente"
          stepFiveTitle="Entrega do projeto"
          stepFive="O projeto entra em processo de finalização sempre de acordo com os direcionamentos do cliente"
        />
        <SameWhyBuildingTwo
          title="Como podemos fazer do seu comércio, um comércio de sucesso"
          subTitle=" Sua loja virtual alcançará um público maior e se tornará muito mais efetiva em suas vendas. Criaremos juntos um negócio totalmente rentável e lucrativo"
          imageOne="./assets/ecommerce/icon-1.png"
          titleImageOne="O crescimento de comércios digitais traz consigo o crescimento da concorrência, somos profissionais que criaremos e definiremos estratégias para que seu negócio se destaque"
          imageTwo="./assets/ecommerce/icon-1.png"
          titleImageTwo="Um site bem estruturado é fundamental para maior conversão e aumento de vendas e lucros"
          imageThree="./assets/ecommerce/icon-1.png"
          titleImageThree="O e-commerce auxilia na organização de sua empresa com maior gerenciamento facilitando o desenvolvimento de seu trabalho"
          imageFour="./assets/ecommerce/icon-1.png"
          titleImageFour="É possível realizar um controle de estoque, aumentar a divulgação de seu comércio, provir mais opções de pagamentos aos seus clientes, e ainda aprimorar seu atendimento"
          photoContainer="./assets/ecommerce/banner-2.png"
        />
        <ServicesProducedTwo
          imageOne="./assets/ecommerce/cases/HSeletro.png"
          imageOneTitle="HS eletro"
          imageOneLink="https://haccess.digital/HSEletro/"
          imageTwo="./assets/ecommerce/cases/HSshop.png"
          imageTwoTitle="HS Loja Virtual"
          imageTwoLink="https://haccess.digital/HSLojaVirtual/"
          title="Algumas artes de sucesso que nossa equipe de designers produziu"
          subTitle="Nossos divinos trabalhos desenvolvidos pela nossa equipe nos motivam a realizar projetos cada vez mais aprimorados"
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

export default Ecommerce
