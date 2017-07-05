const express     = require('express');
const app         = express();
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise  = require('bluebird');
const routes      = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');
const { dbURI, port, env }    = require('./config/environment');
mongoose.connect(dbURI);

if ('test' !== env) app.use(require('morgan')('dev'));

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json({ limit: '5mb' }));
app.use(customResponses);
app.use('/api', routes);
app.use(errorHandler);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;
