var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const HTTP_PORT = 8080;
const Blockchain = require('./blockchain');
const bodyParser = require('body-parser');
const peers = [];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

server.listen(HTTP_PORT);
const myBlockChain = new Blockchain();

app.post('/mine', (req, res) => {
    console.log(req.body);
    console.log(req.body.transaction);
    // console.log(req.body.data);
    // blockchain.create_block(JSON.stringify(req.body.data))
    // blockchain.push(req.)
    blockchain.create_block(req.body.transaction);
    res.send('success');
});

app.post('/transaction', (req, res) => {
    const nt = req.body;
    // blockchain.transaction_list.push(nt);
    res.send(`
      New transaction:
      FROM: ${nt.from}
      TO: ${nt.to}
      AMOUNT: ${nt.amount}
      Submission successful
    `);
});

app.get('/blocks', (req, res) => {
    console.log(myBlockChain.chain);
    res.send(JSON.stringify(myBlockChain.chain));
});

console.log(myBlockChain.chain)

io.on('connection', function (socket) {
  console.log("a new node connected")
  if(peers.indexOf(socket.handshake.address) === -1) {
      peers.push(socket.handshake.address);
  }
  socket.emit('new_node', { ip: JSON.stringify(peers), blockchain: JSON.stringify(myBlockChain.chain) });
  socket.on('new_node', function (data) {
    console.log(data);
  });
});
