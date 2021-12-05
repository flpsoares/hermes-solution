import styled from 'styled-components'

interface ContainerProps {
  width: string
  height: string
}

export const Container = styled.button<ContainerProps>`
  border: 1px solid white;
  border-radius: 0.4rem;
  color: white;
  font-size: 1.8rem;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  box-shadow: 0 0 2px 0 #ffffff;

  transition: background 0.2s, color 0.2s;

  z-index: 20;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  &:hover {
    background: var(--primary);

    a {
      color: black;
    }
  }
`
