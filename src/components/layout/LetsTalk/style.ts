import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow-y: hidden;
`

export const Wrapper = styled.div`
  display: flex;

  margin-top: 9rem;

  img {
    width: 604px;
    height: 539px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 30%;
  margin-left: 17rem;

  h2 {
    font-weight: 500;
    font-style: normal;
    font-size: 26px;
    color: #ffffff;
    line-height: 56px;
  }

  h1 {
    font-size: 46px;
    color: #ffffff;
    text-align: left;
    font-weight: 200;
    font-style: normal;
    line-height: 56px;
    margin-bottom: 4rem;
  }
`
