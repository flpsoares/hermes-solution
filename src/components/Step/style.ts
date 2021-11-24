import styled from 'styled-components'

interface ContainerProps {
  top?: string
  right?: string
  bottom?: string
  left?: string
  isAbsolute: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: ${(props) => (props.isAbsolute ? 'absolute' : 'initial')};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  h1 {
    width: 80%;
  }

  div {
    background: var(--primary);
    height: 0.3rem;
    width: 5rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.6rem;
    width: 21rem;
  }
`
