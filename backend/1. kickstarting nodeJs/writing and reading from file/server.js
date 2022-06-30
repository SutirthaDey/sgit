const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
 const url = req.url;
 const method = req.method;

 // When url = '/', it sends a form as response, submitting the form will result
 // a new post req with url '/message' which will hit the second if condition
 // we have to use res.end() carefully as after res.end() we won't be able do respond anymore.


 if( url === '/'){
    res.write('<html>');
    res.write('<head><title>My Form</title></head>');
    res.write('<body>');
    res.write(`<form action='/message' method='POST'><input type='text' name='message'><input type='submit' value='send'></form>`)
    res.write('</body>');
    res.write('</html>');
    return res.end();
    
    // return res.end() will return the control of the server, so the rest of the code won't get
    // executed.
 }

 // This will be executed after sending the form data
 if(url === '/message' && method === 'POST'){
    

    // This is for reading the chunk of data asynchronously from req
    const data = [];
    req.on('data',(chunk)=>{
        data.push(chunk);
    })

    //This is executed after getting the stream data from the req and acts like 
    //a buffer which takes the data and store it
    req.on('end',()=>{
        const parsedBody = Buffer.concat(data).toString();
        const message = parsedBody.split('=')[1];

        //This is to store the message asynchronously into a file

        fs.appendFile('./message.txt', '\n'+message,(err)=>{
            res.statusCode = 302;
            res.setHeader('Location','/');
            
            return res.end();
        });
    })
 }
});

server.listen(4000,()=>{
    console.log('Listening to port 4000!')
})