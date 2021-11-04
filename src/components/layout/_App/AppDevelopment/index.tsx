import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea } from './style'

export const AppDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <h1>Aplicativos</h1>
            <p>IOS/ANDROID</p>
          </Title>
          <Info>
            Criação de aplicativos IOS e Android para qualquer finalidade, podendo
            criar designes únicos e de alta performance. Além de criar um laço mais
            firme com o seu cliente, também valoriza sua empresa e ajuda na evolução
            da marca, fazendo com que o cliente sempre saiba onde te encontrar.
          </Info>
          <ButtonsArea>
            <TransparentLink link="#" width="18.9rem" height="5.3rem">
              Conheça o serviço
            </TransparentLink>
            <YellowLink link="#" width="18.9rem" height="5.3rem">
              Simule o orçamento
            </YellowLink>
          </ButtonsArea>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/app/banner.png"
        width="68.4rem"
        height="65.7rem"
        right="2rem"
        top="12rem"
        responsive={{
          1325: { height: '63.7rem' },
          1145: { width: '57.2rem', height: '39.5rem', top: '22rem' },
          1030: { width: '47.2rem', height: '29.5rem', top: '27rem' },
          950: { display: 'none' }
        }}
      />
      <FloatImage
        src="./assets/yellow-load.png"
        width="7.5rem"
        height="7.5rem"
        right="22rem"
        bottom="-32rem"
        brightness="0.5"
      />
    </Container>
  )
}
