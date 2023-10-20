const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by SalvaV');
});

//Issue 3
app.get('/hours', (req, res, next) => {
  res.sendfile("assets/1a_dev_hours.json");
});

//Issue 4
app.get('/size', (req, res, next) => {
	res.sendfile("assets/1a_proxy_size.json");
});

app.get('/test1', (req, res, next) => {
	res.sendfile("assets/3a_test1.json");
});

app.get('/test2', (req, res, next) => {
	res.sendfile("assets/3a_test2.json");
});

app.get('/test3', (req, res, next) => {
	res.sendfile("assets/3a_test3.json");
});

app.get('/test4', (req, res, next) => {
	res.sendfile("assets/3a_test4.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));
