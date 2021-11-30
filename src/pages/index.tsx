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
import { PageSEO } from '../components/PageSEO'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
  position: relative;
`

const Home: React.FC = () => {
  return (
    <PageSEO
      isServicePage={false}
      title="Hermes Solutions"
      description={`A Hermes Solutions é uma empresa que foca em atingir o melhor resultado possível para 
        nossos clientes, oferecendo soluções divinas em nossos projetos.`}
    >
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
    </PageSEO>
  )
}

export default Home
