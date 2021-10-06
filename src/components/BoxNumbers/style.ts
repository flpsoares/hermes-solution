import styled from 'styled-components'

interface ContainerProps {
  bordertop?: string
  borderbottom?: string
  borderleft?: string
  borderright?: string
}

export const Container = styled.div<ContainerProps>`
  border-top: ${(props) => props.bordertop};
  border-bottom: ${(props) => props.borderbottom};
  border-right: ${(props) => props.borderright};
  border-left: ${(props) => props.borderleft};

  @media (max-width: 800px) {
    width: 100%;
  }

  width: 90%;
  background: var(--background-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 3rem;
  border-radius: 1.4rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 300;
    margin-bottom: 1.6rem;
    color: var(--primary);
  }
  p {
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 2.2rem;
  }
`
