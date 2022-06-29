// create a simple http server

const http = require('http');

const rqListener = (req,res)=>{
    console.log('Sutirtha Dey');
}

// rqListener is the function managed by event loop get executed wheneven
// there is a new request made


// createServer takes a callback function like rqListener and returns a server 
const server = http.createServer(rqListener);


// Listens for any particular port
server.listen(4000);