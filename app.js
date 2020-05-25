const express = require('express');
const app = express();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.key
    }
});

var mailOptions = {
    to: process.env.myEmail,
    subject: 'Portfolio form',
};

app.post('/email', (req, res) => {
        mailOptions.text = req.query;
        res.header("Access-Control-Allow-Origin", "https://aakashsarang.com/");
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(404);
            } else {
                res.status(200);
            }
        });
        res.send("Done");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening to port ${port}`));
