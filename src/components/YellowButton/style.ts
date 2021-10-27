import styled, { css } from 'styled-components'

interface ContainerProps {
  width: string
  height: string
}

export const Container = styled.button<ContainerProps>`
  border-radius: 0.4rem;
  color: #000000;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1.8rem;
  background: var(--primary);

  z-index: 20;

  box-shadow: 0 0 2px 0 #ffffff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
