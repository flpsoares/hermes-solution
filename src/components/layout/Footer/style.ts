import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid var(--primary);
  border-bottom: 1px solid #1d1d1d;
  font-family: 'OpenSans', sans-serif;
`

export const Grid = styled.div`
  margin-top: 8rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 30rem 10rem;

  grid-template-areas:
    'info services cases hermes'
    'whatsapp email email icons';

  ul {
    margin-top: 2rem;
    list-style: none;
    row-gap: 1rem;
  }

  a {
    text-decoration: none;
    font-size: 14px;
  }
`

export const Title = styled.h1`
  font-size: 1.8rem;
`

export const ErasedTitle = styled.h1`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.4);
`

export const DefaultDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
`

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
`

export const Info = styled(DefaultDiv)`
  grid-area: info;

  img {
    width: 93px;
    height: 70px;
  }

  span {
    margin-top: 2.5rem;
    width: 20rem;
    width: 179px;
    height: 168px;
    opacity: 0.88;
    text-align: left;
    line-height: 19px;
    font-weight: 200;
  }
`

export const Services = styled(DefaultDiv)`
  grid-area: services;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 12rem);
    grid-template-rows: repeat(5, 1fr);
  }
`

export const Cases = styled(DefaultDiv)`
  grid-area: cases;
  ul {
    display: grid;
    grid-template-columns: repeat(1, 12rem);
    grid-template-rows: repeat(5, 1fr);
  }
`

export const Hermes = styled(DefaultDiv)`
  grid-area: hermes;

  ul {
    display: grid;
    grid-template-columns: repeat(1, 12rem);
    grid-template-rows: repeat(5, 1fr);
  }
`

export const Whatsapp = styled(DefaultDiv)`
  grid-area: whatsapp;

  p {
    font-weight: 500;
    font-style: normal;
    line-height: 32px;
    font-size: 16px;
    margin-top: 1rem;
  }
`

export const Email = styled(DefaultDiv)`
  grid-area: email;
  padding-left: 3rem;

  p {
    font-weight: 500;
    font-style: normal;
    line-height: 32px;
    font-size: 16px;
    margin-top: 1rem;
  }
`

export const Icons = styled(DefaultDiv)`
  flex-direction: row;
  gap: 4rem;
`

export const BottomFooter = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
`
