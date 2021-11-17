import { GlobalContainer } from '../../../../styles/container'
import { FloatImage } from '../../../FloatImage'
import { TransparentLink } from '../../../TransparentLink'
import { YellowLink } from '../../../YellowLink'
import { Container, Wrapper, Title, Info, SubInfo, ButtonsArea } from './style'

import Carousel from 'react-elastic-carousel'
import { useRef } from 'react'

export const WebSitesDevelopment: React.FC = () => {
  const carouselRef = useRef(null)
  const totalPages = 3
  let resetTimeout

  return (
    <Container>
      <GlobalContainer>
        <Wrapper>
          <Title>
            <p>Desenvolvimento de</p>
            <h1>Websites</h1>
          </Title>
          <Carousel
            ref={carouselRef}
            enableAutoPlay={true}
            autoPlaySpeed={10000}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout)
              if (index + 1 === totalPages) {
                resetTimeout = setTimeout(() => {
                  carouselRef.current.goTo(0)
                }, 10000)
              }
            }}
            className="carousel"
            showArrows={false}
            isRTL={false}
          >
            <Info>
              <b>Landing Page</b> - Orientada para conversão, a Landing Page, é uma
              página básica de apresentação, com o intuito de demonstrar o seu
              trabalho e chamar a atenção dos usuários destacando seus diferenciais e
              enaltecendo os aspectos mais importantes da sua marca
            </Info>
            <Info>
              <b>Blog</b> - Os blogs têm como função atualizar diariamente o público
              ou clientes com informações e conteúdos, através dessa comunicação a
              empresa mantém mais contato de uma forma mais pessoal e cativante,
              criando uma relação estável
            </Info>
            <Info>
              <b>Sites</b> - Tenha sua página para qualquer finalidade, tenha o
              melhor desenvolvimentos para a divulgação de suas ideias e projetos,
              tenha seus views ou conversões mostrando seu diferencial a todos.
            </Info>
          </Carousel>
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
