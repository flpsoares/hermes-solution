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

export const Instagram = styled(Link)`
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
`

export const Whatsapp = styled(Link)`
  background: #4dcb5b;
`
