// server.js

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', //  your gmail account
        pass: process.env.PASSWORD || 'password' // your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'abc@gmail.com', // senders email
    to: 'cde@gmail.com', //  recievers email
    subject: 'Nodemailer - Test email',
    text: 'Oyah it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email has been sent succesfully,check your email');
});