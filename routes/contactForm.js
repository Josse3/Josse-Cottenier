const router = require('express').Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res) => {
    console.log('mail request');
    const sendNodeMail = async () => {
        const transporter = nodemailer.createTransport({
            host: 'SMTP.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_PASS
            }
        });

        await transporter.sendMail({
            from: 'Contact Form Message',
            to: process.env.MAIL_RECEIVER,
            subject: `Message from ${decodeURIComponent(req.query.firstName)} ${decodeURIComponent(req.query.lastName)}`,
            html: `<h1>${decodeURIComponent(req.query.firstName)} ${decodeURIComponent(req.query.lastName)}</h1> ${req.query.email && `<b>${decodeURIComponent(req.query.email)}</b> <br />`} <p>${decodeURIComponent(req.query.message)}</p>`
        });
    }

    sendNodeMail()
        .then(() => console.log('mail sent'))
        .catch(console.error);
})

module.exports = router;