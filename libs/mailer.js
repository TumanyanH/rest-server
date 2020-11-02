const sgMail = require('@sendgrid/mail')

const sendConfirmationMail = (to, token) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  return new Promise((resolve, reject) => {
    const msg = {
      to: to, 
      from: 'hakobtumanyan5@gmail.com', 
      subject: 'Please confirm your registraion',
      // text: 'Confirmation',
      html: '<p>Please go through this link to confirm your account.</p><br/><a href="' + token + '">Confirm</a>',
    }
    sgMail
      .send(msg)
      .then((res) => {
        resolve('Email sent')
      })
      .catch((error) => {
        reject(error)
      })
  })
}

module.exports = { sendConfirmationMail }