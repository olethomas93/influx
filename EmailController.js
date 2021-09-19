const email = require('./email');


module.exports ={

sendEmail:function(req,res,pdf){

   
    const payload = {};

    

    payload['to'] = "norbye93@outlook.com";
    payload['from'] ="norbye93@gmail.com";
    payload['password'] ="General93&";
    payload['service'] = "gmail";

    email.sendEmail(payload,pdf);

    return res.json({ message: 'The email has been sent successfully!' });
}

}