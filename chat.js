const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    fs.readFile('message', 'utf8', (err, data) => {
        if (err) {
            data = '';
        }

        res.send(`
            <h2>Messages</h2>
            <p>${data.split('\n').join('<br>')}</p>

            <form action="/add" method="POST">
                <input type="text" name="message" required>
                <button type="submit">Send</button>
            </form>
        `);
    });
});

app.post('/add', (req, res) => {
    const message = req.body.message;

    fs.readFile('message', 'utf8', (err, data) => {
        if (err) {
            data = '';
        }

        fs.writeFile('message', message + '\n' + data, (err) => {
            if (err) {
                return res.send('Error saving message');
            }

            res.redirect('/');
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
