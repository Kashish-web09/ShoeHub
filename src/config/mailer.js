import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});
transport.verify((err, success) => {
    if (err) {
        console.log("Mailer Error:", err);
    } else {
        console.log("Mailer ready");
    }
});

export default transport;