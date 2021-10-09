import styled from 'styled-components'
import { Banner } from '../components/layout/Banner'
import { Cases } from '../components/layout/Cases'
import { CompanyNumbers } from '../components/layout/CompanyNumbers'
import { Header } from '../components/layout/Header'

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
        <Cases />
      </BodyWrapper>
    </Container>
  )
}
