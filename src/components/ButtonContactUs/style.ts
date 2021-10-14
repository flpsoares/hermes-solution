import styled, { css } from 'styled-components'

interface ContainerProps {
  size: string
}

export const Container = styled.button<ContainerProps>`
  border-radius: 0.4rem;
  color: #000000;
  padding: 1.1rem 0;
  width: ${(props) => props.size};
  font-size: 1.8rem;
  background: var(--primary);

  box-shadow: 0 0 2px 0 #ffffff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`
