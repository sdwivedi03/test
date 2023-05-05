const http = require('http');
const app = require('./app')

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Server is listening on 8000');
});

server.on('error', (err) => {
    console.log(err);
})
