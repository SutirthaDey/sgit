// I want you to read all the messages from the file and show it at the top of the form.


const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
 const url = req.url;
 const method = req.method;

 // When url = '/', it sends a form as response, submitting the form will result
 // a new post req with url '/message' which will hit the second if condition
 // we have to use res.end() carefully as after res.end() we won't be able do respond anymore.


 // This read is function which returns a promise 
 // The promise implements the asynchrounous readFile function
 // When ever read is called, readFile gets executed
 // If file is present then it tries to print the values present in data
 // if the file is not present it prints nothing and just resolves the promise

 const read = (fileName,res)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,'utf-8',(err,data)=>{
            if(!err){
                const messages = data.split('\n');
   
                messages.forEach((msg)=>{
                    if(msg.length>0)
                     res.write(`<li>${msg}</li>`);
                })
            }
            resolve();
        })
    })
 }


 if( url === '/'){
    res.write('<html>');
    res.write('<head><title>My Form</title></head>');

    //read is called, after printing the messages in the screen it will call the 
    //sync statements in .then()
    read('message.txt',res)
    .then((data)=>{
        res.write('<body>');
        res.write(`<form action='/message' method='POST'><input type='text' name='message'><input type='submit' value='send'></form>`)
        res.write('</body>');
        res.write('</html>');
        return res.end();
    })
    
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
        //with a '\n' delimeter
        
        fs.appendFile('./message.txt',message+'\n',(err)=>{
            res.statusCode = 302;
            res.setHeader('Location','/');
            
            return res.end();
        });
    })
 }
});

server.listen(5000,()=>{
    console.log('Listening to port 5000!')
})