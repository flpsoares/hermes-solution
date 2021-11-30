import { Container, Email, Whatsapp, Instagram } from './style'
import { AiOutlineInstagram } from 'react-icons/ai'

export const ContactButtons: React.FC = () => {
  return (
    <Container>
      {/* <Email target="_blank" href="mailto:contato@hermessolutions.agency">
        <img src="/assets/contact/email.svg" alt="email" />
      </Email> */}
      <Instagram
        aria-label="Instagram"
        target="_blank"
        href="https://www.instagram.com/hermes_solutions/"
      >
        <AiOutlineInstagram size={34} />
      </Instagram>
      <Whatsapp
        aria-label="Whatsapp"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5511988209426"
      >
        <img src="/assets/contact/whatsapp.svg" alt="whatsapp" />
      </Whatsapp>
    </Container>
  )
}
