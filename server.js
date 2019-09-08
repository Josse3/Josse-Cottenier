const app = require('express')();

app.listen(process.env.PORT || 3001, err => { if (err) console.log(err) });