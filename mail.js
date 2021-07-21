const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email-here',
        pass: 'your-password-here'
  }
});

const message = {
    sender: 'sender-mail-here',
    from: 'from-mail-here',
    replyTo: 'reply-to-mail-here',
    to: 'receiver-mail-here',         // List of recipients
    subject: 'Test Mail using Nodemailer', // Subject line
    text: 'Check and please do not reply' // Plain text body
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});