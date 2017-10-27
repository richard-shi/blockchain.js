const socket = require('socket.io');
const app = require('express')()
const HTTP_PORT = 3001;
const SOCKET_PORT = 6001;
const blockchain = require('./blockchain');

app.post('/mine', (req,res)=>{
    console.log(req.body);
    // blockchain.push(req.)
    // blockchain.mine(req.body)
    res.send("success")
})

app.get('/blocks', (req,res) => {
    res.send(blockchain.chain);
})

app.listen(HTTP_PORT, () =>{
    console.log("listening to port")
})
