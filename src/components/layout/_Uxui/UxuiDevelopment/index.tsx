import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea } from './style'

export const UxuiDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <h1>
              UX/ UI Design <br />e Design Thinking
            </h1>
          </Title>
          <Info>
            Tenha um design exclusivo para o seu projeto, e aumenta sua credibilidade
            e reputação. Trabalho focado no melhor atendimento ao cliente para que
            seja entendido qual a cara e o que deseja passar para os clientes, para
            que seja a melhor experiência possível ao usuário.
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
        src="./assets/uxui/banner.svg"
        width="84.2rem"
        height="50.5rem"
        right="6rem"
        top="17rem"
        responsive={{
          1415: { right: '0' },
          1300: { right: '0', width: '64.2rem', height: '40.5rem', top: '27rem' },
          1120: { right: '0', width: '44.2rem', height: '30.5rem', top: '33rem' },
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
