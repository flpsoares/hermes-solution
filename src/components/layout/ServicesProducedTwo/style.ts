import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 15rem;
`

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 53% 47%;
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
  height: 100%;
  padding: 0 10rem;
  z-index: 2;

  display: flex;
  flex-direction: column;

  justify-content: center;

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
    margin-bottom: 3.3rem;
  }

  @media (max-width: 1212px) {
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 3.6rem;
      font-weight: 300;
      padding: 0 1rem;

      margin-bottom: 4.3rem;

      b {
        font-weight: 500;
      }
    }

    p {
      font-size: 1.6rem;
      padding: 0 5rem;
      font-weight: 300;
      line-height: 2.8rem;
      margin-bottom: 4.3rem;
    }
  }
  @media (max-width: 530px) {
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 2.6rem;
      font-weight: 300;
      padding: 0;

      margin-bottom: 3.3rem;

      b {
        font-weight: 500;
      }
    }

    p {
      font-size: 1.4rem;
      padding: 0;
      font-weight: 300;
      line-height: 2.8rem;
      margin-bottom: 4.3rem;
    }
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  @media (max-width: 900px) {
    width: 80%;
    grid-template-columns: repeat(2, 50%);
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
