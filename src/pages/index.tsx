import styled from 'styled-components'
import { Banner } from '../components/layout/Banner'
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
    </Container>
  )
}
