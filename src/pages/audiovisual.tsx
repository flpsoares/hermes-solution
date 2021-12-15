import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Team } from '../components/layout/Team'
import { AudiovisualDevelopment } from '../components/layout/_Audiovisual/AudiovisualDevelopment'
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

const Audiovisual: React.FC = () => {
  return (
    <PageSEO
      isServicePage={true}
      title="Audiovisual"
      path="audiovisual"
      description={`O processo de criação audiovisual é muito importante para a divulgação de
      produtos e serviços. A identidade visual de seu comércio digital ou um
      vídeo motion podem ser tão importantes quanto um flyer bem produzido,
      relacione a criação de imagens, sons e vídeos e efetive ainda mais a
      visibilidade de seu comércio, negócio ou empresa.`}
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
          <AudiovisualDevelopment />
        </Top>
        <SameWhyBuildingThree
          title="Como podemos te ajudar a criar a melhor identidade visual da sua empresa e produto"
          subTitle="Temos profissionais mais que preparados para criar uma cara única e criativa conforme o seu gosto, prezamos a satisfação total de nossos clientes para a criação de conteúdo, e acima de tudo, a originalidade de slogans e merchans."
          imageOne="./assets/audiovisual/icon-1.png"
          titleImageOne="Temos anos de experiência e estudo contínuo para te ajudar a chamar a atenção e cativar o seu público alvo de forma criativa."
          imageTwo="./assets/audiovisual/icon-2.png"
          titleImageTwo="Você acompanhará todo o processo de criação de nossa equipe, com as suas sugestões e referências, faremos com que toda a arte seja o reflexo de seu trabalho."
          imageThree="./assets/audiovisual/icon-3.png"
          titleImageThree="Total originalidade em todas as artes e projetos criados."
        />
        <ServicesProducedTwo
          imageOne="./assets/audiovisual/cases/FTD.png"
          imageOneTitle="FTD Educação"
          imageTwo="./assets/audiovisual/cases/Amspa.png"
          imageTwoTitle="Amspa"
          imageThree="./assets/audiovisual/cases/Delux.png"
          imageThreeTitle="DeluX"
          imageFour="./assets/audiovisual/cases/GAE.png"
          imageFourTitle="Grupo Atitude Emocional"
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

export default Audiovisual
