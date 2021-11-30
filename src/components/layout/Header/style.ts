import styled from 'styled-components'

interface Props {
  background: string
}

export const Space = styled.div<Props>`
  height: 130px;
  background: ${(props) => props.background};
`

export const Container = styled.header<Props>`
  height: 130px;
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 100;

  padding: 0 10rem;

  &.sticky {
    transition: background 0.2s height 2s;
    background: ${(props) => props.background};
  }

  ul {
    list-style: none;
    display: flex;
    gap: 8rem;
    font-weight: 700;
    font-size: 14px;

    margin-right: 11rem;

    @media (max-width: 1130px) {
      margin-right: 0;
    }

    @media (max-width: 665px) {
      gap: 4rem;
    }

    @media (max-width: 360px) {
      gap: 3rem;
    }
  }

  li {
    a {
      text-decoration: none;
      color: #fff;
      cursor: pointer;

      transition: color 0.2s;

      white-space: nowrap;

      &:hover {
        color: var(--primary);
      }
    }
  }

  @media (max-width: 1130px) {
    margin-bottom: 2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;

  @media (max-width: 1130px) {
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 20rem;
  }
`

export const Logo = styled.img`
  width: 230px;
  height: 130px;
  object-fit: contain;

  cursor: pointer;

  @media (max-width: 1130px) {
    width: 180px;
    height: 80px;
    z-index: 100;
  }
`
