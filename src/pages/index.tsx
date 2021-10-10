import styled from 'styled-components'
import { ContactButtons } from '../components/ButtonContact'
import { Banner } from '../components/layout/Banner'

import { CompanyNumbers } from '../components/layout/CompanyNumbers'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { LetsTalk } from '../components/layout/LetsTalk'
import { ServicesPerformed } from '../components/layout/ServicesPerformed'
import { Team } from '../components/layout/Team'

const Container = styled.div`
  overflow: hidden;
  position: relative;
`

const TopWrapper = styled.div`
  background: var(--background-primary);
`

const BodyWrapper = styled.div`
  background: var(--background-secondary);
`

const BottomWrapper = styled.div`
  background: var(--background-tertiary);
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
        <CustomersServed />
        <Team />
        <LetsTalk />
      </BodyWrapper>
      <BottomWrapper>
        <Footer />
      </BottomWrapper>
      <ContactButtons />
    </Container>
  )
}
