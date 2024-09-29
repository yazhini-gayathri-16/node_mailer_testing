var nodejsmailer  = require('nodemailer'); 

var mailOptions ={
    from:'yazhinigayathri.2002@gmail.com',
    to:'sit21co004@sairamtap.edu.in, sit20cs025@sairamtap.edu.in',
    subject:"ithellaam web app daa maa, Testing the nodemailer",
    text:"Welcome to NodeMailer, It's Working",
    html: '<h1 style = "color: green">Welcome</h1><p>That was easy!</p>',
    
}    // details of to send from, to,  subject, text(message),


var transporter = nodejsmailer.createTransport({
    service:'gmail',
    auth:{
        user:'yazhinigayathri.2002@gmail.com',
        pass:'hmlmgutceecozhzc'      // note: always keep password in .env file to keep it hidden
    }
}); // initialize create Transport service

//sends the mail
transporter.sendMail(mailOptions,function(error,info){

     if(error){
         console.log(error);
     }else{
         console.log('Email Send ' + info.response);
     }
});