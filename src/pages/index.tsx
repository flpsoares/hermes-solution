import styled from 'styled-components'
import { Banner } from '../components/layout/Banner'
import { CompanyNumbers } from '../components/layout/CompanyNumbers'
import { Header } from '../components/layout/Header'

const Container = styled.div`
  overflow: hidden;
`

const TopWrapper = styled.div`
  /* padding: 0 25rem; */
  background: var(--background-primary);
`

const BodyWrapper = styled.div`
  padding: 0 25rem;
  background: var(--background-secondary);
`

export default function Home() {
  return (
    <Container>
<<<<<<< HEAD
      <TopWrapper>
        <Header />
        <Banner />
      </TopWrapper>
      <BodyWrapper>

      </BodyWrapper>
=======
      <TopWrapper>
        <Header />
        <Banner />
      </TopWrapper>
      <BodyWrapper>
        <CompanyNumbers />
      </BodyWrapper>
>>>>>>> 64f74ab9a971851a6c809837c14ae4fb6717572a
    </Container>
  )
}
