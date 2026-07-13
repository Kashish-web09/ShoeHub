import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure:false,
    auth:{
        user: process.env.BREVO_EMAIL,
        pass: process.env.BREVO_SMTP_KEY
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

