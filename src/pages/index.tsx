import styled from 'styled-components'
import { Banner } from '../components/layout/Banner'

import { CompanyNumbers } from '../components/layout/CompanyNumbers'
import { Header } from '../components/layout/Header'
import { ServicesPerformed } from '../components/layout/ServicesPerformed'
import { Team } from '../components/layout/Team'

const Container = styled.div`
  overflow: hidden;
`

const TopWrapper = styled.div`
  background: var(--background-primary);
`

const BodyWrapper = styled.div`
  background: var(--background-secondary);
`

export default function Home() {
  return (
    <Container>
      <TopWrapper>
        <Header />
        <Banner />
      </TopWrapper>
      <BodyWrapper>
        <CompanyNumbers />
        <ServicesPerformed />

        <Team />
      </BodyWrapper>
    </Container>
  )
}
