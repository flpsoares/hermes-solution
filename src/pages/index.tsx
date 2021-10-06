import styled from 'styled-components'
import { Banner } from '../components/layout/Banner'
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
      <TopWrapper>
        <Header />
        <Banner />
      </TopWrapper>
      <BodyWrapper></BodyWrapper>
    </Container>
  )
}
