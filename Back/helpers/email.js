import nodemailer from 'nodemailer'

//Email para registro
export const emailRegistro = async (datos) => {
    
    const { email, nombre, token} = datos

  
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      //contenido del email
      const info = await transport.sendMail({
          from: '"Project App - Administrador" <cuentas@projectapp.com>',
          to: email,
          subject: "Project App - Confirma tu cuenta",
          text: "Confirma tu cuenta de Project App",
          html: `<p>Hola: ${nombre}, confirma tu cuenta en Project App</p>
          <p>Tu cuenta ya esta casi lista, solo debes confirmarla en el siguiente enlace:
          
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>
          `
      })
}

//Email para recuperar contraseña y generar token
export const emailOlvidoPassword = async (datos) => {
    
    const { email, nombre, token} = datos

    
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
      });

      //contenido del email
      const info = await transport.sendMail({
          from: '"Project App - Administrador" <cuentas@projectapp.com>',
          to: email,
          subject: "Reestablece tu Password",
          text: "Reestablece tu Password",
          html: `<p>Hola: ${nombre}, has solicitado reestablecer tu password</p>
          <p>Sigue el siguiente enlace para generar un nuevo password:

          <a href="${process.env.FRONTEND_URL}/olvido-password/${token}">Reestablecer Password</a>
          `
      })
}