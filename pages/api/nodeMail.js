export default function(req, res) {

    res.status(200)
    res.send()
  
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "invitecardz@gmail.com",
        pass: process.env['gmailPass']
      },
      secure: true,
    })
  
    const mailData = {
      from: "invitecardz@gmail.com",
      to: req.body.email,
      subject: `Message From Me`,
      text: req.body.message,
      html: `<div><img src="cid:123456789"/></div>`,
      attachments: [
        {
          filename: 'image.png',
          content: Buffer.from(req.body.imageFilt, 'base64'),
          cid: '123456789'
        }
      ]
    }
  
    transporter.sendMail(mailData, function(err, info) {
      if (err) {
        console.log(err)
        console.log(mailData)
      }
      else
        console.log(info)
    })
  
  
  
  };