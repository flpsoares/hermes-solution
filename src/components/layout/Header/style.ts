import styled from 'styled-components'

export const Space = styled.div`
  height: 130px;
`

export const Container = styled.header`
  background: transparent;

  height: 130px;
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 100;

  padding: 0 10rem;

  &.sticky {
    transition: background 0.2s height 2s;
    background: var(--background-primary);
  }

  ul {
    list-style: none;
    display: flex;
    gap: 8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;

    margin-right: 11rem;

    @media (max-width: 1100px) {
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

  @media (max-width: 830px) {
    margin-bottom: 2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 830px) {
    flex-direction: column;
    margin-bottom: 20rem;
  }
`

export const Logo = styled.img`
  width: 115px;
  height: 115px;
  object-fit: contain;

  @media (max-width: 830px) {
    width: 100px;
    height: 100px;
    z-index: 100;
  }
`
