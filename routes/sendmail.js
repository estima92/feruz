var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

express().use(bodyParser);

var fs = require('fs');

var mailSettigs = fs.readFileSync(__dirname + '/../config/mail.json');
mailSettigs = JSON.parse(mailSettigs);
router.post('/', function(req, res) {

    var sendMailTransport = require('nodemailer-sendmail-transport');
    var transport = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        auth: {
            user: mailSettigs.username,
            pass: mailSettigs.password
        }
    });
    var params = {
        from: mailSettigs.username,
        to: mailSettigs.username,
        subject: 'Обратный звонок',
        text: `Новая заявка на обратный звонок!
        ФИО: ${req.body.fio}
        Компания\физ-лицо: ${req.body.company}
        Телефон: ${req.body.phone}
        Email: ${req.body.email}
        Сообщение: ${req.body.message}`
    };
    transport.sendMail(params, function (err, data) {

        if (err) {
            console.error(err);
            res.send('<p>Что-то пошло не так! Перезагрузите страницу и попробуйте отправить заявку снова.</p>');
        }
        else {
            if (data.rejected.length > 0) res.send('<p>Ошибка отправки письма! Перезагрузите страницу,проверьте введенные данные и попробуйте отправить заявку снова. </p>');
            else res.send('<p>Спасибо за вашу заявку! В течение ближайшего времени мы вам ответим!.</p>');

        }
    });

});

module.exports = router;