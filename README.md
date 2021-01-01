# Nodemailer_egs

# Send email with Gmail - Nodemailer

How to send an email with your personal gmail account using Nodemailer
Read the following instructions before execution

 Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps'

Prerequisite:
- Nodejs (Installed)


Before running any of the following steps. Make sure you run `npm install` to install any dependencies needed for this project. 


#### Step 1
Create a file named `.env`. Inside the *.env* file, fill in the information with your email and password. 



#### Step 2
We need to define our nodemailer transporter to connect to our service. Make sure you fill in with your credentials such as `email` and `password`.
```
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', 
        pass: process.env.PASSWORD || '1234'
    }
});
```


#### Step 3
Define a `mailOptions` variable. It should contains information that your receiver should know about it. 
```
let mailOptions = {
    from: 'abc@gmail.com', 
    to: 'cba@gmail.com',
    subject: 'Nodemailer - Test email',
    text: 'Oyah it works!!'
};
```


#### Step 4
In order to send an email with nodemailer, we need to bring the transporter that we previously configured above, and invoke the `sendMail` function. If everything goes well, you should receive an email.
```
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs,Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps');
    }
    return log('Email has been sent succesfully,check your email');
});

```