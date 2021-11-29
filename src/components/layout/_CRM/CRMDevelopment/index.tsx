import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, ButtonsArea } from './style'

export const CRMDevelopment: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <h1>CRM e CMS</h1>
          </Title>
          <Info>
            Otimize sua relação com os clientes, de modo fácil e simples. O CMS e o
            CRM são ferramentas utilizadas para gerenciar conteúdos de uma plataforma
            sem a necessidade do auxílio de um desenvolvedor, facilitando as
            modificações diárias de seus conteúdos.
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
        src="./assets/crm/banner.png"
        width="77.2rem"
        height="49.5rem"
        right="6rem"
        top="17rem"
        brightness="0.5"
        responsive={{
          1295: { width: '57.2rem', height: '39.5rem', top: '22rem' },
          1060: { width: '47.2rem', height: '29.5rem', top: '27rem' },
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
