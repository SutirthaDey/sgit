const http = require('http');
const {route} = require('./routes')

const server = http.createServer(route);

server.listen(4000,()=>{
    console.log('Listening to port 4000!')
})