import styled from 'styled-components'

export const Container = styled.div`
  padding: 9rem 0;
`

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 40% 60%;
`

export const Left = styled.div`
  padding-right: 13rem;

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
`
