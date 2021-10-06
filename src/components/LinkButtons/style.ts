import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.9rem;
  padding: 1rem;
  color: var(--primary);
  font-weight: 100;
  background: rgb(0, 0, 0);
  margin-left: 0;
  border-left: 0px solid black;

  transition: border 0.4s, margin-left 0.2s;

  a {
    text-decoration: none;
    color: var(--primary);
    margin-right: 1rem;
  }

  .icon {
    fill: var(--primary);
  }

  &:hover {
    margin-left: 0.2rem;
    border-left: 3px solid var(--primary);
  }

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
`
