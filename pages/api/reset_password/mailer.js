import nodemailer from "nodemailer";
import { toast } from "react-toastify";
import hbs from 'nodemailer-express-handlebars'
const sendResetPasswordEmail = function({ User, hash })  {
    return new Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GOOGLE_USER,
                pass: process.env.GOOGLE_PASSWORD,
            }
        })
transporter.use('compile',hbs({
    viewEngine:"express-handlebars",
    viewPath:"../../views/"
}))
        const message = {
            from: process.env.GOOGLE_USER,
            to:User.email,
            // to:'jhs1941jhs@gmail.com',
            subject: "RKMGEC - RESET PASSWORD",
            html: `
        <h3 > Hello <h2>${User.name}</h2> </h3>
        <p>To reset your password please follow this link: <a target="_" href="${process.env.DOMAIN}/reset_password/${hash}">RESET PASSWORD</a></p>
        <p>Thanks</p>
        <h4>RKMGEC ADMIN</h4>
      `,
      template:"index"
        }

        
        transporter.sendMail(message, function (err, info) {
            if (err) {
                rej(err);
               toast.error(err.name)
            } else {
                res(info);
                toast.info(info)
            }
        })
    })
}

export default sendResetPasswordEmail;
