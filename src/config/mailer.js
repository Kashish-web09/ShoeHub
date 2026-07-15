import dotenv from "dotenv";
dotenv.config();

import * as Brevo from "@getbrevo/brevo";


const apiInstance = new Brevo.TransactionalEmailsApi();


apiInstance.setApiKey(
    Brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
);


const transport = {

    async sendMail(options) {

        try {

            const email = new Brevo.SendSmtpEmail();

            email.sender = {
                name: "ShoeHub",
                email: process.env.SENDER_EMAIL
            };

            email.to = [
                {
                    email: options.to
                }
            ];

            email.subject = options.subject;
            email.htmlContent = options.html;


            const response = await apiInstance.sendTransacEmail(email);

            console.log("Email sent successfully");

            return response;

        } catch (error) {

            console.log(
                "Brevo API Error:",
                error.response?.body || error.message
            );

            throw error;
        }
    }
};


export default transport;