var express = require('express'),
    restful = require('node-restful'),
    bodyParser = require('body-parser'),
    path = require('path'),
    methodOverride = require('method-override'),
    mongoose = restful.mongoose;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/public')));

app.post('/api/email', function (req, res) {
    console.log(req.body);
    // https://github.com/sendgrid/sendgrid-nodejs
    var helper = require('sendgrid').mail;
    from_email = new helper.Email(req.body.email);
    to_email = new helper.Email("douglasrmoney@gmail.com");
    subject = "Web Form Message from:" + req.body.name;
    content = new helper.Content("text/plain", req.body.message);
    mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')("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");
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    sg.API(request, function (error, response) {
        if (!error) {
            res.send({ "status": 0, "msg": "success", "result": "Mail sent successfully" });
        } else {
            res.send({ "status": 1, "msg": "failure", "result": "Error while sending mail." });
        }
       
    });
});


// application -------------------------------------------------------------
app.get('/', function (req, res) {
    res.redirect('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});