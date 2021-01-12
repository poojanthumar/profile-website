const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.user = (data) => {
    let htmlString = nodeMailer.renderTemplate({"name": data.name}, 'mail.ejs');

    nodeMailer.transporter.sendMail({
       from: 'poojanthumar@gmail.com',
       to: data.email,
       subject: "Greetings from Poojan Thumar",
       html: htmlString
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }
        return;
    });
}