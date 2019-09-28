const app = require('express')();

const captchaRoutes = require('./routes/captcha');

app.use('/captcha', captchaRoutes);

app.listen(process.env.PORT || 3001, err => { if (err) console.log(err) });