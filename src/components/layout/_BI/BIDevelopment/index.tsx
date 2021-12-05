import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea, SubInfo } from './style'

export const BIDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Entenda mais sobre</p>
            <h1>Business Intelligence</h1>
          </Title>
          <Info>Informação é a alma do negócio</Info>
          <SubInfo>
            O estudo do mercado em que se atua é fundamental para qualquer tomada de
            decisão, o cuidado com números, estratégias e objetivos é o que faz uma
            empresa crescer. O crescimento digital fez com que todos tenham inúmeros
            concorrentes, e com isso, o cuidado com a criação de estratégias virou
            uma chave importante para todas as empresas
          </SubInfo>
          <SubInfo>
            Planejar cada passo, tendo em mente o que está acontecendo no mercado, é
            o que o BI pode te proporcionar
          </SubInfo>
          <ButtonsArea>
            <TransparentLink
              link="why-building"
              smooth
              width="18.9rem"
              height="5.3rem"
            >
              Conheça o serviço
            </TransparentLink>
            <YellowLink
              link="budget"
              fontsize="1.7rem"
              offset={-140}
              smooth
              width="18.9rem"
              height="5.3rem"
            >
              Simule o orçamento
            </YellowLink>
          </ButtonsArea>
        </Wrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/bi/banner.svg"
        width="80.2rem"
        height="45.5rem"
        right="2rem"
        top="20rem"
        responsive={{
          1355: { width: '60.2rem', height: '35.5rem', top: '22rem' },
          1150: { width: '40.2rem', height: '25.5rem', top: '27rem' },
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
