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

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <CompanyNumbers />
      <ServicesPerformed />
      <CustomersServed />
      <Team />
      <LetsTalk />
      <Footer />
      <ContactButtons />
    </Container>
  )
}

export default Home
