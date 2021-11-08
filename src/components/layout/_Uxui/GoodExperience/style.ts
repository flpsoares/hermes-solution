import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Content = styled.div`
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 4.2rem;
    font-weight: 500;
    padding: 0 20rem;
    margin-bottom: 5.6rem;
  }

  @media (max-width: 1550px) {
    h1 {
      text-align: center;
      font-size: 4.2rem;
      font-weight: 500;
      padding: 0 20rem;
    }
  }

  div {
    text-align: center;

    h2 {
      font-size: 6.8rem;
      margin-bottom: 1rem;

      b {
        font-size: 3.2rem;
      }
    }

    p {
      padding: 0 3.5rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }
`

export const Percent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  flex-direction: column;

  margin-bottom: 7rem;
`
