import styled from 'styled-components'

interface ContainerProps {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;

  h2 {
    font-size: 8rem;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-size: 2.2rem;
  }
`
