const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const enforce = require('express-sslify');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());
app.use(compression());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, (error) => {
	if (error) throw Error;
	console.log(`'server running on port '${port}`);
});
