
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to homepage')
    }

    if(req.url === '/about') {
        res.end('Welcome to about page')
    }
    res.write(`
        <h1>404 page</h1>
        <a href="/">Back to homepage</a>
    `)

    res.end()
})

server.listen(5000)