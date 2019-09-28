const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/:token', (req, res) => {
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${req.params.token}`, { method: 'POST' })
        .then(response => {
            if (!response.ok) throw Error('Recaptcha verification request failed');
            return response.json();
        })
        .then(jsonResponse => res.send(jsonResponse.success));
})

module.exports = router;