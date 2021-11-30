import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  img {
    width: 233px;
    height: 312px;
    border-radius: 1.5rem;
    object-fit: cover;
  }
`

export const Info = styled.div`
  margin-left: 1.5rem;

  p:nth-child(1) {
    font-size: 2rem;
    font-weight: 500;
    color: white;
  }

  p:nth-child(2) {
    font-size: 1.6rem;
    font-weight: 400;
    font-style: normal;
    color: var(--primary);
    margin-top: 0.6rem;
  }
`
