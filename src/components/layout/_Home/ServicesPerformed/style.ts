import styled from 'styled-components'

export const Container = styled.div`
  background: var(--background-secondary);
  position: relative;
  width: 100%;
  z-index: 5;
`

export const WrapperCases = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 40% 60%;
  padding: 9rem 0;
  z-index: 5;

  @media (max-width: 1170px) {
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

  @media (max-width: 1170px) {
    padding-right: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h1 {
    width: 40rem;
    font-size: 4.6rem;
    font-weight: 300;

    margin-bottom: 4.3rem;

    b {
      font-weight: 500;
    }

    @media (max-width: 940px) {
      width: 30rem;
    }

    @media (max-width: 900px) {
      width: 90%;
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
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;

  @media (max-width: 1170px) {
    column-gap: 4rem;
  }

  @media (max-width: 750px) {
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  row-gap: 3rem;
  column-gap: 2rem;

  @media (max-width: 1220px) {
    justify-content: center;
    grid-template-columns: repeat(2, auto);
    column-gap: 4rem;

    div:nth-child(9) {
      grid-column: span 2;
      margin: auto;
    }
  }

  @media (max-width: 820px) {
    grid-template-columns: auto;

    div:nth-child(9) {
      grid-column: span 1;
    }
  }

  margin-top: 6rem;
`
