const http = require('http')

const server = http.createServer((req,res)=>{
    res.end(`<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
        <div style="background-color: black; width:100vw; height:100vh; color: white; text-align: center;">
  <h1 style="font-size: 48px; margin-bottom: 20px;">Welcome to the Server</h1>
  <p style="font-size: 20px;">You're successfully connected to the server running on <strong>port 3000</strong>.</p>
</div>
        </body>
`)
});
server.listen(3000,()=>{
    console.log("server litsning on port 3000")
})