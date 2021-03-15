const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'vijaytalviya24@gmail.com',
        subject: 'We Welcome you',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app `
    })

}

const sendCancleEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'vijaytalviya24@gmail.com',
        subject:'Sorry to see you go!',
        text:`GoodBye :) ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancleEmail
}
