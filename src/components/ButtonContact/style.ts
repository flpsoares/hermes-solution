import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 10;
`

export const Link = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`

export const Email = styled(Link)`
  background: var(--primary);
`

export const Whatsapp = styled(Link)`
  background: #4dcb5b;
`
