import styled, { css } from 'styled-components'

interface ContainerProps {
  size?: string
}

export const Container = styled.button<ContainerProps>`
  border-radius: 0.4rem;
  color: #000000;
  padding: 1.1rem 0;
  /* width: ${(props) => props.size}; */
  width: 15%;
  font-size: 1.8rem;
  background: var(--primary);

  box-shadow: 0 0 2px 0 #ffffff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1350px) {
    font-size: 1.8rem;
    width: 20%;
  }
  @media (max-width: 750px) {
    font-size: 1.8rem;
    width: 25%;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
    width: 30%;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
    width: 40%;
  }
  @media (max-width: 350px) {
    font-size: 1.6em;
    padding: 1.3rem 0;
  }
`
