import styled from 'styled-components'

interface ContainerProps {
  width: string
  height: string
  fontsize: string
  margintop?: string
}

export const Container = styled.button<ContainerProps>`
  border-radius: 0.4rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margintop};
  font-size: ${(props) => (props.fontsize ? props.fontsize : '1.8rem')};
  background: var(--primary);

  box-shadow: 0 0 2px 0 #ffffff;

  transition: filter 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #000000;
    text-decoration: none;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
