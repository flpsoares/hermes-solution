import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 60% 40%;
  padding: 9rem 0;
  z-index: 5;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export const Photos = styled.div`
  padding-right: 11rem;
  z-index: 2;

  @media (max-width: 1100px) {
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

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding-right: 2rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
