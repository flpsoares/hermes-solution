import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea } from './style'

export const EcommerceDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Desenvolvimento de</p>
            <h1>E-commerce</h1>
          </Title>
          <Info>
            Desenvolva seu negócio de forma digital e desfrute das vantagens de
            possuir uma loja virtual. Acompanhe com a máxima transparência em tempo
            real todos os processos que acontecem dentro do seu empreendimento,
            realizando assim uma gestão mais dinâmica com um poder de venda mais
            eficiente
          </Info>
          <ButtonsArea>
            <TransparentLink
              link="why-building"
              offset={-140}
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
        src="./assets/ecommerce/banner.png"
        width="62.6rem"
        height="58.6rem"
        right="6rem"
        top="17rem"
        responsive={{
          1380: { width: '42.6rem', height: '38.6rem', top: '22rem' },
          1110: { width: '26.6rem', height: '22.6rem', top: '27rem' },
          950: { display: 'none' }
        }}
      />
      <FloatImage
        src="./assets/yellow-load.png"
        width="10.6rem"
        height="10.6rem"
        left="58rem"
        bottom="-19rem"
        brightness="0.1"
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
