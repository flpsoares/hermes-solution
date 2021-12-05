import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea, SubInfo } from './style'

export const SocialMediaDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Entenda mais sobre</p>
            <h1>Social Media</h1>
          </Title>
          <Info>Como podemos cuidar de suas redes sociais</Info>
          <SubInfo>
            As redes sociais são muito importantes para que seu produto, serviço ou
            negócio tenha visibilidade. O Social Media pode realizar do mais simples
            ao mais complexo serviço, do atendimento às mensagens no Instagram à
            criação de um calendário editorial inteiro. Com estudo de mercado e nossa
            excelente equipe vamos realizar e auxiliar nos processos de sua rede
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
        src="./assets/social-media/banner.svg"
        width="100.2rem"
        height="65.5rem"
        right="-3rem"
        top="17rem"
        responsive={{
          1444: { width: '70.2rem', height: '59.5rem', top: '22rem' },
          1170: { width: '57.2rem', height: '49.5rem', top: '27rem' },
          1065: { width: '37.2rem', height: '29.5rem', top: '37rem' },
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
