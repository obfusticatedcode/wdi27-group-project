const port    = process.env.PORT || 4000;
const env     = process.env.NODE_ENV || 'development';
const secret = process.env.SECRET || 'shhhh...it is a secret!';

module.exports = { port, env, secret };
