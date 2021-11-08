import { Container, Content, Percent } from './style'

import { YellowLink } from '../../../YellowLink'
import { GlobalContainer } from '../../../../styles/container'
import { YellowButton } from '../../../YellowButton'

const GoodExperience: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <Content>
          <h1>Como uma boa experiência do usuário impacta em seu negócio?</h1>
          <Percent>
            <div>
              <h2>80%</h2>
              <p>
                Dos erros que os usuários cometem nas interfaces é resultado de um UX
                mal planejado
              </p>
            </div>
            <div>
              <h2>94%</h2>
              <p>
                Do que é percebido pelos usuários em um produto digital é relacionado
                ao design de experiência
              </p>
            </div>
            <div>
              <h2>83%</h2>
              <p>
                De retorno comprovado quando uma empresa usa 20% de sua verba é
                utilizada em UX Design
              </p>
            </div>
            <div>
              <h2>
                <b>Até</b> 80%
              </h2>
              <p>
                De aumento real nos resultados apenas com pequenas alterações no UX
                de um produto
              </p>
            </div>
          </Percent>

          <YellowLink
            link="contact"
            smooth={true}
            children="Simule um orçamento"
            width="26rem"
            height="5rem"
          />
        </Content>
      </GlobalContainer>
    </Container>
  )
}

export default GoodExperience
