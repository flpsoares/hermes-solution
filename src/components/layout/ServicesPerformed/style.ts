import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Wrapper = styled.div`
  padding-top: 9rem;
`

export const Header = styled.div`
  padding-top: 5rem;

  display: flex;
  gap: 4rem;

  h1 {
    font-weight: 400;
    font-size: 4.6rem;
    width: 37rem;
  }

  p {
    font-weight: 200;
    font-size: 1.8rem;
    color: #d7d7d7;
    width: 40rem;
    margin: auto 0;
  }
`

export const Line = styled.div`
  background: var(--primary);
  width: 3px;
  height: 11.5rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 3rem;

  margin-top: 6rem;
`
