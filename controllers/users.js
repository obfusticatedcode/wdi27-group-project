const User = require('../models/user');
const Campaign = require('../models/campaign');

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      
      Campaign
        .find({createdBy: req.params.id })
        .exec()
        .then((campaigns) => {
          res.json({ user, campaigns });
        })
        .catch((err) => {
          next(err);
        });


    })
    .catch(next);
}

module.exports = {
  show: showRoute
};
