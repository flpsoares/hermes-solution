import { GlobalContainer } from '../../../../styles/container'
import { BoxNumbers } from '../../../BoxNumbers'
import { FloatImage } from '../../../FloatImage'
import { LinkButtons } from '../../../LinkButtons'
import { Number } from '../../../Numbers'
import { BoxWrapper, Container, Left, Right, Wrapper } from './style'

export const CompanyNumbers: React.FC = () => {
  const startDate = 2019
  const currentDate = new Date()
  const year = currentDate.getFullYear() - startDate

  return (
    <Container id="who-we-are">
      <GlobalContainer>
        <section>
          <Left>
            <h1>
              Uma maneira única
              <br /> de{' '}
              <b>
                desenvolver
                <br /> seu sonho…
              </b>
            </h1>
            <p>
              Profissionais altamente capacitados e qualificados para desenvolver
              soluções divinas para seu negócio! Nossa meta são as realizações de
              suas metas, venha conosco!
            </p>
            <LinkButtons
              size="1"
              link="hermes"
              offset={-80}
              smooth
              children="Conheça nossa empresa"
            />
          </Left>
          <Right>
            <Wrapper>
              <Number
                number="+52450"
                title="Linhas de código"
                top="0.4rem"
                right="5.6rem"
              />
              <Number
                number="12"
                title="Profissionais"
                bottom="4rem"
                right="3.5em"
              />
            </Wrapper>

            <Wrapper>
              <Number
                number="+12580"
                title="Xícaras de café"
                top="1em"
                right="-1rem"
              />
              <Number
                number={year.toString()}
                title="Anos de experiência"
                bottom="3em"
                right="-3rem"
              />
            </Wrapper>
          </Right>
        </section>
        <BoxWrapper>
          <BoxNumbers title="Missão" borderleft="1px solid var(--primary)">
            Temos o objetivo de desenvolver ideias no mundo digital com a melhor
            performance, entendendo as necessidades de nossos clientes e seguindo
            para o melhor resultado
          </BoxNumbers>
          <BoxNumbers title="Visão" bordertop="2px solid var(--primary)">
            Temos como visão trabalhar com dedicação para alcançar um mundo mais
            conectado, com o acesso digital para o maior número de pessoas possível.
            Enquanto visamos a realização de nossos clientes para que possamos ser
            reconhecidos por nosso serviço
          </BoxNumbers>
          <BoxNumbers borderright="2px solid var(--primary)" title="Valores">
            <p>- Ser íntegro</p>
            <p>- Ter dedicação com o cliente</p>
            <p>- Ser criativo sempre</p>
            <p>- Não ter medo de ser julgado</p>
            <p>- Conquistar o impossível</p>
            <p>- Sempre pensar no próximo</p>
          </BoxNumbers>
        </BoxWrapper>
      </GlobalContainer>
      <FloatImage
        src="./assets/colored-circle.gif"
        height="471px"
        width="478px"
        top="-12rem"
        right="16rem"
        zindex="1"
        brightness="0.1"
        responsive={{
          700: { right: '7rem' },
          500: { right: '0', width: '458px', height: '451px', brightness: '0.2' },
          380: {
            right: '-4rem',
            width: '408px',
            height: '401px',
            brightness: '0.2'
          }
        }}
      />
      <FloatImage
        src="./assets/triangle.png"
        height="75px"
        width="93px"
        top="34rem"
        left="6rem"
        brightness="1"
        rotate="30"
        animation="vertical"
        responsive={{
          1500: {
            left: '62rem'
          },
          1285: {
            left: '52rem'
          },
          1200: {
            left: '52rem',
            top: '50rem'
          },
          900: {
            left: '62rem'
          }
        }}
      />
      <FloatImage
        src="./assets/yellow-load.png"
        width="64px"
        height="64px"
        brightness="0.46"
        right="12rem"
        bottom="7rem"
        animation="vertical"
      />
    </Container>
  )
}
