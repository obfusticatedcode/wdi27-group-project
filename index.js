const express     = require('express');
const app         = express();
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise  = require('bluebird');
const routes      = require('./config/routes');
const { dbURI, port }    = require('./config/environment');
mongoose.connect(dbURI);

app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());

app.use('/api', routes);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
