const User = require('../models/user');

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: showRoute
};
