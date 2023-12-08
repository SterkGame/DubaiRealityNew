import { sendMail } from "../../mailer";

console.log('contact_us_form initialized');
let contact_us = document.getElementById('contact_us');
contact_us.addEventListener("submit", (e) =>
{
    e.preventDefault();

    console.log('event listener executed')

    let emailInput = document.getElementById('contact-us__input');
    let email = emailInput.nodeValue;

    if(email != '')
    {
        sendMail(email);
    }
});