import styled from 'styled-components'

import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

import { StepByStep } from '../components/layout/StepByStep'

import { CRMDevelopment } from '../components/layout/_CRM/CRMDevelopment'
import { FloatImage } from '../components/FloatImage'
import GoodExperience from '../components/layout/_Uxui/GoodExperience'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
`

const Top = styled.div`
  position: relative;
`

const Uxui = () => {
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
        <CRMDevelopment />
      </Top>
      <StepByStep
        title="Entenda o"
        subTitle="Passo a passo"
        stepOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepFour="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
        stepFive="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus"
      />
      <GoodExperience />
      <Footer />
    </Container>
  )
}

export default Uxui
