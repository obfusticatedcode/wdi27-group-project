// const User = require('../models/user');
// const { secret } = require('../config/environment');
// const jwt = require('jsonwebtoken');
//
// function register(req, res, next) {
//   User
//     .create(req.body)
//     .then(() => {
//       return res.json({ message: 'Resgistration successful' });
//     })
//     .catch(next);
// }
//
// function login(req, res, next) {
//   User
//     .findOne({ email: req.body.email })
//     .then((user) => {
//       if(!user || !user.validatePassword(req.body.password)) return res.unauthorized();
//
//       const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr'});
//       return res.json({ token, message: `Welcome back ${user.username}`});
//     })
//     .catch(next);
// }
//
// module.exports = {
//   register,
//   login
// };
