import { GlobalContainer } from '../../../styles/container'
import { Container, ErasedTitle, Image, Grid } from './style'

export const CustomersServed: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <ErasedTitle>Clientes atendidos</ErasedTitle>
        <Grid>
          <Image src="./assets/customers/customer-1.png" alt="customer" />
          <Image src="./assets/customers/customer-1.png" alt="customer" />
          <Image src="./assets/customers/customer-1.png" alt="customer" />
          <Image src="./assets/customers/customer-1.png" alt="customer" />
          <Image src="./assets/customers/customer-1.png" alt="customer" />
          <Image src="./assets/customers/customer-1.png" alt="customer" />
          <Image src="./assets/customers/customer-1.png" alt="customer" />
        </Grid>
      </GlobalContainer>
    </Container>
  )
}
