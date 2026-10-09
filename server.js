const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (req, res) => {
res.send('Welcome home');
});

app.get('/about', (req, res) => {
res.send('Welcome to About Us');
});

app.get('/node', (req, res) => {
res.send('Welcome to my Node Js project');
});

app.get('/', (req, res) => {
res.send('Hello World');
});

app.get('/pizza', (req, res) => {
res.send('This is your pizza');
});

app.use((req, res) => {
res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});
