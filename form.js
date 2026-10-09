const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');

        res.end(`
            <form action="/submit" method="POST">
                <label>Name:</label>
                <input type="text" name="username" required>
                <button type="submit">Submit</button>
            </form>
        `);
    }

    else if (url === '/submit' && method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const username = params.get('username');

            fs.appendFile('users.txt', username + '\n', (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error writing to file');
                    return;
                }

                res.writeHead(302, {
                    'Location': '/'
                });

                res.end();
            });
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
