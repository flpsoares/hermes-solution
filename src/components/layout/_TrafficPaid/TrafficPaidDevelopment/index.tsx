import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, SubInfo, ButtonsArea } from './style'

export const TrafficPaidDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Veiculação de</p>
            <h1>Tráfego Pago</h1>
          </Title>
          <Info>
            Tráfego pago é um modelo de investimento em publicidade, através de todas
            as plataformas digitais, sites, redes sociais, aplicativos e mais.
          </Info>
          <SubInfo>
            O tráfego pago é responsável por todos os anúncios e propagandas que
            existem nas mídias digitais, e com eles vem os Adsenses (ADS), entre as
            principais plataformas o Google Adsense e o Facebook Adsense, com eles é
            possível monitorar todo o desempenho de seus anúncios, uma de suas
            funções, são os famosos cookies, utilizados para o monitoramento das
            pessoa, para poder mostrar um anúncio de um produto ou serviço, de algo
            que já se interessou algum dia navegando na internet.
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
        src="./assets/broken-circle.png"
        width="55.7rem"
        height="54.9rem"
        right="13rem"
        top="5rem"
        brightness="0.15"
        responsive={{
          1335: { right: '2rem' },
          1175: { right: '2rem', width: '45.7rem', height: '44.9rem', top: '10rem' },
          1090: { right: '2rem', width: '35.7rem', height: '34.9rem', top: '15rem' },
          990: { right: '2rem', width: '30.7rem', height: '29.9rem', top: '20rem' },
          930: { right: '2rem', width: '20.7rem', height: '19.9rem', top: '20rem' },
          830: { display: 'none' }
        }}
      />
    </Container>
  )
}
