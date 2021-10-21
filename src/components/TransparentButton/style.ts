import styled from 'styled-components'

interface ContainerProps {
  width: string
  height: string
}

export const Container = styled.button<ContainerProps>`
  border: 1px solid white;
  border-radius: 0.4rem;
  color: white;
  padding: 1rem 0rem;
  font-size: 1.8rem;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  box-shadow: 0 0 2px 0 #ffffff;

  transition: background 0.2s;

  &:hover {
    background: var(--primary);
  }
`
