import nodemailer from "nodemailer";

const controller = {
  consulta: async (req, res, next) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const message = {
      from: `"${req.body.name}" <${req.body.email}>`,
      replyTo: `"${req.body.name}" <${req.body.email}>`,
      to: process.env.SMTP_USER,
      subject: "Consultas a Diseño Web Plus",
      html: `<p style="font-size: 20px;"><br>Consultas a <strong>Diseño Web Plus!!</strong><br>
      <strong>Nombre:</strong> ${req.body.name}<br>
      <strong>Consulta:</strong> ${req.body.question}<br>
      </p>
      <p style="color: grey;">-------------------------<br>
      Atentamente,<br>
      Diseño Web Plus<br>
      <br>
      ¡Gracias por usar mi aplicación! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.<br>
     
      `,
    };
    try {
      await transporter.sendMail(message, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(
            "Correo de consulta enviado: " + info.response
          );
        }
      });

      return res.status(200).json({
        success: true,
        message: "Consulta enviada correctamente",
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default controller;
