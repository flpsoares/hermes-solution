import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea } from './style'

export const DataSecurityDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <h1>Segurança de dados</h1>
          </Title>
          <Info>
            Você, seu público, projeto, ideia e serviço merecem a melhor segurança
            possível. Ataques e invasões podem acontecer em qualquer negócio, as
            pequenas e grandes empresas se preocupam com suas informações e dados, e
            é necessário uma prevenção de alto nível para que tudo esteja seguro e
            preservado, tanto para você quanto para todos que acessarem seu site
          </Info>
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
        src="./assets/data-security/banner.png"
        width="70.6rem"
        height="58.6rem"
        right="6rem"
        top="17rem"
        responsive={{
          1500: { width: '42.6rem', height: '38.6rem', top: '22rem' },
          1110: { width: '26.6rem', height: '22.6rem', top: '27rem' },
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
