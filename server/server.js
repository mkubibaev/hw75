const express = require('express');
const Caesar = require('caesar-salad').Caesar;

const app = express();
const port = 8000;

app.use(express.json());

app.post('/encode', (req, res) => {
    if (req.body.password) {
        const password = req.body.password;
        const message = req.body.message;
        const encoded = Caesar.Cipher(password).crypt(message);

        res.send({encoded});
    } else {
        res.send({message: 'password is required!'});
    }
});

app.post('/decode', (req, res) => {
    if (req.body.password) {
        const password = req.body.password;
        const message = req.body.message;
        const decoded = Caesar.Decipher(password).crypt(message);

        res.send({decoded});
    } else {
        res.send({message: 'password is required!'});
    }
});

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
});