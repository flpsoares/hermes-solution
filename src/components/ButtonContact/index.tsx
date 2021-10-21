import { Container, Email, Whatsapp } from './style'

export const ContactButtons: React.FC = () => {
  return (
    <Container>
      <Email target="_blank" href="mailto:contato@hermessolutions.agency">
        <img src="/assets/contact/email.svg" alt="email" />
      </Email>
      <Whatsapp
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5511988209426"
      >
        <img src="/assets/contact/whatsapp.svg" alt="whatsapp" />
      </Whatsapp>
    </Container>
  )
}
