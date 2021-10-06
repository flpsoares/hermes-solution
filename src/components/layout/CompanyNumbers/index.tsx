import { GlobalContainer } from '../../../styles/container'
import { BoxNumbers } from '../../BoxNumbers'
import { FloatImage } from '../../FloatImage'
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
            <button>Conheça nossa empresa </button>
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
          <BoxNumbers
            title="Missão"
            context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin"
            borderleft="1px solid var(--primary)"
          />
          <BoxNumbers
            title="Visão"
            context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin"
            bordertop="2px solid var(--primary)"
          />
          <BoxNumbers
            borderright="2px solid var(--primary)"
            title="Valores"
            context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin"
          />
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
    </Container>
  )
}
