import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 5;
`

export const WrapperCases = styled.div`
  justify-content: center;
  padding: 9rem 0;
  align-items: center;
  display: grid;
  grid-template-columns: 40% 60%;
  z-index: 5;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`

export const Left = styled.div`
  padding-right: 13rem;
  z-index: 2;

  h1 {
    font-size: 4.6rem;
    font-weight: 300;

    margin-bottom: 4.3rem;

    b {
      font-weight: 500;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.8rem;
    margin-bottom: 4.3rem;
  }
`

export const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
