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

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const Left = styled.div`
  padding-right: 13rem;
  z-index: 2;

  @media (max-width: 900px) {
    padding-right: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

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
  @media (max-width: 900px) {
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
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-weight: 400;
    font-size: 4.6rem;
    max-width: 37rem;
    z-index: 2;
  }

  p {
    font-weight: 200;
    font-size: 1.8rem;
    color: #d7d7d7;
    max-width: 40rem;
    margin: auto 0;
    z-index: 2;
  }
`

export const Line = styled.div`
  background: var(--primary);
  width: 3px;
  height: 11.5rem;
  z-index: 2;

  @media (max-width: 900px) {
    width: 31.5rem;
    height: 3px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 20rem);
    justify-content: center;
    column-gap: 12rem;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  margin-top: 6rem;
`
