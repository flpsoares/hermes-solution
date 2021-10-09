import { GlobalContainer } from '../../../styles/container'
import { BoxCases } from '../../BoxCases'
import { LinkButtons } from '../../LinkButtons'
import { Container, Wrapper, Left, Right } from './style'

export const Cases = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Left>
            <h1>
              Alguns <b>cases</b> de sucesso que produzimos
            </h1>
            <p>
              Nossos divinos trabalhos desenvolvidos pelos membros de nossa equipe
              nos motivam a realizar projetos cada vez mais aprimorados.{' '}
            </p>
            <LinkButtons link="#" children="Veja todos os cases" />
          </Left>
          <Right>
            <BoxCases title="Sistema gerencial" url="./assets/melao.jpg" />
            <BoxCases title="E-commerce em Magento" url="./assets/melao.jpg" />
            <BoxCases title="Website wordpress" url="./assets/melao.jpg" />
            <BoxCases title="Aplicativo IOS e Android" url="./assets/melao.jpg" />
          </Right>
        </Wrapper>
      </GlobalContainer>
    </Container>
  )
}
