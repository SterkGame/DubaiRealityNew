require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    from: 'danilkokosta@gmail.com',
    to: 'danilkokosta@gmail.com',
    subject: 'Лист',
    text: 'Дякую за підписку'
}

transporter.sendMail(mailOptions)