import { GlobalContainer } from '../../../styles/container'
import { Container, ErasedTitle, Image, Grid } from './style'

export const CustomersServed: React.FC = () => {
  return (
    <Container id="customers">
      <GlobalContainer>
        <ErasedTitle>Clientes atendidos</ErasedTitle>
        <Grid>
          <Image src="./assets/customers/customer-1.svg" alt="customer" />
          <Image src="./assets/customers/customer-2.svg" alt="customer" />
          <Image src="./assets/customers/customer-3.svg" alt="customer" />
          <Image src="./assets/customers/customer-4.svg" alt="customer" />
          <Image src="./assets/customers/customer-5.svg" alt="customer" />
          <Image src="./assets/customers/customer-6.svg" alt="customer" />
        </Grid>
      </GlobalContainer>
    </Container>
  )
}
