const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "perindevboot@gmail.com",
        pass: "gxkqsyymnogquthd",
      },
    });

async function main(texto,imprimirConsole,assunto,para) {
    await transporter.sendMail({
        from: "perindevboot@gmail.com",
        to: para,
        subject: assunto,
        text: texto
    });
    console.log(imprimirConsole)
}

module.exports = { main };