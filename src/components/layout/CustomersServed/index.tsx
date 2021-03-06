import { GlobalContainer } from '../../../styles/container'
import { Container, ErasedTitle, Image, Grid } from './style'
import { FloatImage } from '../../FloatImage'

interface CustomersServedProps {
  isHome?: boolean
  marginTop?: string
}

export const CustomersServed: React.FC<CustomersServedProps> = ({
  isHome,
  marginTop
}) => {
  return (
    <Container marginTop={marginTop} id="customers">
      <GlobalContainer>
        <ErasedTitle>Clientes atendidos</ErasedTitle>
        <Grid>
          <Image src="./assets/customers/customer-1.svg" alt="customer-1" />
          <Image src="./assets/customers/customer-2.svg" alt="customer-2" />
          <Image src="./assets/customers/customer-3.svg" alt="customer-3" />
          <Image src="./assets/customers/customer-4.svg" alt="customer-4" />
          <Image src="./assets/customers/customer-5.svg" alt="customer-5" />
          <Image src="./assets/customers/customer-6.svg" alt="customer-6" />
        </Grid>
      </GlobalContainer>
      {!isHome && (
        <>
          <FloatImage
            src="./assets/chain.png"
            width="88.6rem"
            height="2.6rem"
            brightness="0.4"
            right="24rem"
            top="0"
            responsive={{
              1500: { display: 'none' }
            }}
          />
          <FloatImage
            src="./assets/chain.png"
            width="88.6rem"
            height="2.6rem"
            brightness="0.4"
            right="0rem"
            top="0"
            responsive={{
              1150: { right: '-16rem' },
              1030: { display: 'none' }
            }}
          />
        </>
      )}
    </Container>
  )
}
