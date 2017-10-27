// const socket = require('socket.io');
const app = require('express')();
const HTTP_PORT = 3001;
const blockchain = require('./blockchain');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/mine', (req, res) => {
    console.log(req.body);
    console.log(req.body.transaction);
    // console.log(req.body.data);
    // blockchain.create_block(JSON.stringify(req.body.data))
    // blockchain.push(req.)
    blockchain.create_block(req.body.transaction);
    res.send('success');
});

app.get('/blocks', (req, res) => {
    console.log('llll');
    console.log(blockchain.chain);
    res.send(JSON.stringify(blockchain.chain));
});

app.listen(HTTP_PORT, () => {
    console.log(`listening to port ${HTTP_PORT}`);
});
