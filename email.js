let nodemailer = require('nodemailer');
const cron = require('node-cron');
var shedulemail =[]
// const cron = require('node-cron');
module.exports.sendEmail = async function(payload,pdf) {
  
let testAccount = await nodemailer.createTestAccount();
  // e-mail message options
  let message = {
    from: payload['from'],
    to: payload['to'],
    subject: 'rapport',
    text: 'Some content to send',
    attachments: [{
      filename: "rapport.pdf",
      content: pdf,
      contentType:'application/pdf'
  }]
};

console.log(message)
let transporter = nodemailer.createTransport({
   service:"gmail",
    auth: {
      user:payload['from'], // generated ethereal user
      pass:payload['password'], // generated ethereal password
    },
    attachments: [
        {  
          filename: 'Report.pdf',
          content: pdf,
          contentType:'application/pdf'
        }],
  });
//   transporter.sendMail(message).then((error,info)=>{
//     if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
   

// })

  
shedulemail = cron.schedule('* * * * *', () => {
// Send e-mail
 transporter.sendMail(message).then((error,info)=>{
    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
   
})


})


}