import { GlobalContainer } from '../../../styles/container'
import { BoxNumbers } from '../../BoxNumbers'
import { FloatImage } from '../../FloatImage'
import { LinkButtons } from '../../LinkButtons'
import { Number } from '../../Numbers'
import { BoxWrapper, Container, Left, Right, Wrapper } from './style'

export const CompanyNumbers: React.FC = () => {
  return (
    <Container>
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
              Anos de estudo e preparo para que o seu problema digital seja
              solucionado de forma divina! Nossa meta, são as realizações de suas
              metas, venha conosco!
            </p>
            <LinkButtons size="1" link="#" children="Conheça nossa empresa" />
          </Left>
          <Right>
            <Wrapper>
              <Number
                number={87}
                title="Projetos realizados"
                top="0.4rem"
                right="5.6rem"
              />
              <Number number={9} title="Profissionais" bottom="4rem" right="3.5em" />
            </Wrapper>

            <Wrapper>
              <Number
                number={38}
                title="Clientes Atendidos"
                top="1em"
                right="-1rem"
              />
              <Number
                number={11}
                title="Anos de experiência"
                bottom="3em"
                right="-3rem"
              />
            </Wrapper>
          </Right>
        </section>
        <BoxWrapper>
          <BoxNumbers title="Missão" borderleft="1px solid var(--primary)">
            Temos o objetivo de desenvolver ideias no mundo Digital com a melhor
            performance, entendendo as necessidades de nossos clientes e seguindo
            para o melhor resultado.
          </BoxNumbers>
          <BoxNumbers title="Visão" bordertop="2px solid var(--primary)">
            Temos como visão trabalhar com dedicação para alcançar um mundo mais
            conectado, com o acesso digital para o maior número de pessoas possível.
            Enquanto visamos a realização de nossos clientes para que possamos ser
            reconhecidos por nosso serviço.
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
