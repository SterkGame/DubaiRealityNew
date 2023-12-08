// require('dotenv').config()
// const nodemailer = require('nodemailer')
import nodemailer from "nodemailer"

function sendMail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'danilkokosta@gmail.com',//process.env.EMAIL,
            pass: 'vuwaexsbuynmlhpr'//process.env.PASSWORD
        }
    })

let emailInput = document.getElementById('contact-us__input');
let email = emailInput.nodeValue;

console.log(email);

    const mailOptions = {
        from: 'danilkokosta@gmail.com',
        // to: 'danilkokosta@gmail.com',
        to: email,
        subject: 'Лист',
        text: 'Дякую за підписку'
    }

    transporter.sendMail(mailOptions)
}

export { sendMail }