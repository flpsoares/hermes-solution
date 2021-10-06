import styled from 'styled-components'
import { Banner } from '../components/layout/Banner'
import { CompanyNumbers } from '../components/layout/CompanyNumbers'
import { Header } from '../components/layout/Header'

const Container = styled.div`
  overflow: hidden;
  background: var(--background-secondary);
`

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <CompanyNumbers />
    </Container>
  )
}
