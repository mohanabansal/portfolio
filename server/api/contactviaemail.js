const router = require('express').Router()
const nodemailer = require('nodemailer')

// router.get('/', async(req, res, next)=> {
//   console.log('in get route');
//   res.send('Sending response to get req');
// })

router.post('/', async (req, res, next) => {
  const {name, email, message} = req.body
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mohanabansal92@gmail.com',
        pass: 'Skyispink',
      },
    })

    const mailOptions = {
      from: 'mohanabansal92@gmail.com',
      to: 'mohanabansal10@gmail.com',
      subject: `Connect with ${name} - from portfolio`,
      text: `Name: ${name} \n Email: ${email} \n Message: ${message}`,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
