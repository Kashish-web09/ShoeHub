import transport from "./mailer.js";

    export async function sendSellerResetEmail(email, token) {

const sellerResetLink = `${process.env.BASE_URL}/api/seller/resetPass/${token}`;
    await transport.sendMail({
        from: `"ShoeHub" <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: "Reset Password",
        html: `
            <h2>Password Reset</h2>

            <p>Click the link below to reset your password.</p>

            <a href="${sellerResetLink}">Reset Password</a>
        `
    });

}


export async function sendResetEmail(email, token) {

const resetLink = `${process.env.BASE_URL}/api/users/resetPass/${token}`;
    await transport.sendMail({
        from: `"ShoeHub" <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: "Reset Password",
        html: `
            <h2>Password Reset</h2>

            <p>Click the link below to reset your password.</p>

            <a href="${resetLink}">Reset Password</a>
        `
    });

}
export async function sendFeedbackThankyou(email,name){
await transport.sendMail({
from: `"ShoeHub" <${process.env.SENDER_EMAIL}>`,
    to:email,
    subject:"Thank you for your feedback",
    html:`
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px;">
            <h2 style="color:#198754;">Thank You! ❤️</h2>

            <p>Hi <strong>${name}</strong>,</p>

            <p>Thank you for taking the time to share your feedback.</p>

            <p>Your suggestions help us improve ShoeHub and provide a better shopping experience for everyone.</p>

            <p>We truly appreciate your support.</p>

            <br>

            <p>Regards,<br>
            <strong>Team ShoeHub</strong></p>
        </div>
    `
})
}
export async function sendOrderConfirmation(email,orderId){
await transport.sendMail({
        from: `"ShoeHub" <${process.env.SENDER_EMAIL}>`,
    to:email,
    subject: `Order #${orderId} Confirmed`,
    html:`
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;">

            <h2 style="color:#0d6efd;">🎉 Order Confirmed</h2>

            <p>Thank you for shopping with <strong>ShoeHub</strong>.</p>

            <p>Your order has been placed successfully.</p>

            <h3>Order ID</h3>

            <p><strong>${orderId}</strong></p>

            <p>We'll notify you once your order has been shipped.</p>

            <hr>

            <p style="color:#777;">
                Thank you for choosing ShoeHub.
            </p>

        </div>
    `
})
}
export async function sendOrderShipped(email,orderId){
    await transport.sendMail({
        from: `"ShoeHub" <${process.env.SENDER_EMAIL}>`,
    to:email,
    subject: `Order #${orderId}  has been shipped`,
    html:`
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;">

            <h2 style="color:#198754;">📦 Your Order is on the Way!</h2>

            <p>Your order has been shipped successfully.</p>

            <h3>Order ID</h3>

            <p><strong>${orderId}</strong></p>

            <p>You can expect your package to arrive soon.</p>

            <p>Thank you for shopping with ShoeHub.</p>

            <hr>

            <p style="color:#777;">
                Team ShoeHub
            </p>

        </div>
    `
    })

}
export async function sendWelcomeEmail(email, name) {
    await transport.sendMail({
        from: `"ShoeHub" <${process.env.SENDER_EMAIL}>`,
    to:email,
    subject: `Welcome to ShoeHub ${name}!`,
    html:`
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:8px;">
            <h2 style="color:#0d6efd;">Welcome to ShoeHub 👟</h2>

            <p>Hi <strong>${name}</strong>,</p>

            <p>Thank you for creating an account with <strong>ShoeHub</strong>.</p>

            <p>We're excited to have you with us. Browse the latest collections, save your favorites, and enjoy a seamless shopping experience.</p>

            <hr>

            <p style="font-size:14px;color:#777;">
                Happy Shopping!<br>
                Team ShoeHub
            </p>
        </div>
    `
    })
}
