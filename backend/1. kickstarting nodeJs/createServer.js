// create a simple http server

const http = require('http');

const rqListener = (req,res)=>{
    const text = 'Hello World';
    const message = text.split(' ')[1];
    res.write(`<html>`);
    res.write(`<body><h1>${message}</h1></body>`)
    res.write(`</html>`);
}

// rqListener is the function managed by event loop get executed wheneven
// there is a new request made


// createServer takes a callback function like rqListener and returns a server 
const server = http.createServer(rqListener);


// Listens for any particular port

server.listen(4000,()=>{
    console.log('Listening on port 4000')
});