const app = require('express')();

const captchaRoutes = require('./routes/captcha');
const contactFormRoutes = require('./routes/contactForm');

app.use('/captcha', captchaRoutes);
app.use('/contactform', contactFormRoutes);

app.listen(process.env.PORT || 3001, err => { if (err) console.log(err) });