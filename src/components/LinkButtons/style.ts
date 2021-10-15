import styled, { css } from 'styled-components'

interface ContainerProps {
  size: string
}

export const Container = styled.button<ContainerProps>`
  position: relative;
  top: 2.2rem;

  display: flex;
  align-items: center;

  font-size: 1.9rem;
  padding: ${(props) =>
    css`
      ${props.size}rem 0
    `};
  color: var(--primary);
  font-weight: 100;
  background: transparent;
  border-left: 0px solid black;

  transition: border 0.4s, padding-left 0.4s;

  a {
    position: relative;
    text-decoration: none;
    color: var(--primary);
  }

  .icon {
    fill: var(--primary);
  }

  &:hover {
    border-left: 3px solid var(--primary);
    padding-left: 1rem;
  }

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
`
