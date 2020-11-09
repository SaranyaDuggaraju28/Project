let port = 9090;
let http = require("http");
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("welcome to http server home page");
    }
    else if(req.url=="/aboutus"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("welcome to http server about page");
    }else if((req.url=="/contactus")){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<font color='red'>ContactUs</font>");
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<font color='red'>Error Page!</font>");
    }
    res.end();
}).listen(port);

console.log(`The server is running on port ${port}`);