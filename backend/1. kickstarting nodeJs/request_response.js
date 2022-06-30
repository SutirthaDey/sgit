/* Based on the url the user hits , I want you to return custom responses.
 When url = /home , return response ==> Welcome home
 When url = /about, return response ==> Welcome to About Us page
 When url =/node, return response ==> Welcome to my Node Js project */


const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === '/home'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Welcome home</h1>')
        res.write('</body>');
        res.write('</html>');
    }

    if(url === '/about'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Welcome to About Us page</h1>')
        res.write('</body>');
        res.write('</html>');
    }

    if(url === '/node'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Welcome to my Node Js project</h1>')
        res.write('</body>');
        res.write('</html>');
    }
    
    res.end();
})

server.listen(4000,()=>{
    console.log('Listening on port 4000');
});