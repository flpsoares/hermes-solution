import React from 'react'
import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Team } from '../components/layout/Team'
import { StepByStep } from '../components/layout/_WebSites/StepByStep'
import { WebSitesDevelopment } from '../components/layout/_WebSites/WebSitesDevelopment'

const Container = styled.div`
  background: var(--background-secondary);
`

const Top = styled.div`
  position: relative;
  overflow-y: hidden;
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
          zindex="20"
        />
        <FloatImage
          src="/assets/blocks.png"
          width="42rem"
          height="42rem"
          brightness="0.4"
          top="4rem"
          left="-24rem"
          zindex="20"
        />
        <FloatImage
          src="/assets/blocks.png"
          width="42rem"
          height="42rem"
          brightness="0.4"
          top="46rem"
          left="-24rem"
          zindex="20"
        />
        <Header background="var(--background-secondary)" />
        <WebSitesDevelopment />
      </Top>
      <StepByStep />
      <CustomersServed />
      <Team isHome={false} />
      <Footer />
    </Container>
  )
}

export default WebSites
