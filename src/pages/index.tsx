import React from 'react'
import styled from 'styled-components'

import { ContactButtons } from '../components/ButtonContact'
import { Banner } from '../components/layout/_Home/Banner'

import { CompanyNumbers } from '../components/layout/_Home/CompanyNumbers'
import { CustomersServed } from '../components/layout/CustomersServed'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { LetsTalk } from '../components/layout/_Home/LetsTalk'
import { ServicesPerformed } from '../components/layout/_Home/ServicesPerformed'

import { Team } from '../components/layout/Team'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
  position: relative;
`

const Home: React.FC = () => {
  return (
    <Container>
      <Header background="var(--background-primary)" />
      <Banner />
      <CompanyNumbers />
      <ServicesPerformed />
      <CustomersServed isHome={true} />
      <Team isHome={true} />
      <LetsTalk />
      <Footer />
      <ContactButtons />
    </Container>
  )
}

export default Home
