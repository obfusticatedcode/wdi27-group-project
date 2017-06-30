const port    = process.env.PORT || 4000;
const env     = process.env.NODE_ENV || 'development';
const dbURI   = process.env.MONGODB_URI || `mongodb://localhost/wdi-group-project-${env}`;
const secret = process.env.SECRET || 'shhhh...it is a secret!';

module.exports = { port, env, secret, dbURI };
