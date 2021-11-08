import styled from 'styled-components'
import { FloatImage } from '../components/FloatImage'
import { Header } from '../components/layout/Header'
import { CRMDevelopment } from '../components/layout/_CRM/CRMDevelopment'

const Container = styled.div`
  background: var(--background-secondary);
  overflow: hidden;
`

const Top = styled.div`
  position: relative;
`

const PaidTraffic: React.FC = () => {
  return (
    <Container>
      <Top>
        <FloatImage
          src="/assets/blocks.png"
          width="42rem"
          height="42rem"
          brightness="0.4"
          top="-38rem"
          left="-24rem"
          responsive={{
            1560: { brightness: '0.2' },
            830: { brightness: '0.1' }
          }}
        />
        <FloatImage
          src="/assets/blocks.png"
          width="42rem"
          height="42rem"
          brightness="0.4"
          top="4rem"
          left="-24rem"
          responsive={{
            1560: { brightness: '0.2' },
            830: { brightness: '0.1' }
          }}
        />
        <FloatImage
          src="/assets/blocks.png"
          width="42rem"
          height="42rem"
          brightness="0.4"
          top="46rem"
          left="-24rem"
          responsive={{
            1560: { brightness: '0.2' },
            830: { brightness: '0.1' }
          }}
        />
        <Header background="var(--background-secondary)" />
        <CRMDevelopment />
      </Top>
    </Container>
  )
}

export default PaidTraffic
