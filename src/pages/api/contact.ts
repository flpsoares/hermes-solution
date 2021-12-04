import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const { OAuth2 } = google.auth

const email = process.env.MAILADRESS
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN

const OAuth2_client = new OAuth2(clientId, clientSecret)
OAuth2_client.setCredentials({ refresh_token: refreshToken })

const accessToken = OAuth2_client.getAccessToken()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
})

const mailer = ({ senderMail, name, text }) => {
  const from = `${name} <${senderMail}>`
  const reply = senderMail
  const message = {
    from,
    to: `${email}`,
    subject: 'Formulário de orçamento',
    html: text,
    replyTo: reply
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    })
  })
}

export default async (req, res) => {
  const { senderMail, name, content } = req.body

  if (senderMail === '' || name === '' || content === '') {
    return res.status(403).send()
  }

  const mailerRes = await mailer({ senderMail, name, text: content })

  return res.send(mailerRes)
}
