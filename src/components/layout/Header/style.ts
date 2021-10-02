import styled from 'styled-components'

export const Container = styled.div`
  background: var(--background-primary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 130px;

  padding: 6px 250px;
  position: relative;

  ul {
    list-style: none;
    display: flex;
    gap: 80px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;

    margin-right: 110px;
  }

  li {
    a {
      text-decoration: none;
      color: #fff;

      transition: color 0.2s;

      &:hover {
        color: var(--primary);
      }
    }
  }
`

export const Logo = styled.img`
  width: 115px;
  height: 115px;
  object-fit: contain;
`