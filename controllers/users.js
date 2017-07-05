const User = require('../models/user');
// const Campaign = require('../models/campaign');

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('campaigns comments.createdBy')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      // Campaign
      //   .find({createdBy: req.params.id })
      //   .exec()
      //   .then((campaigns) => {
      //     res.json({ user, campaigns });
      //   })
      //   .catch((err) => {
      //     next(err);
      //   });
      res.json(user);

    })
    .catch(next);
}


//comments
function addCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  User
    .findById(req.params.id)

    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      const comment = user.comments.create(req.body);
      user.comments.push(comment);

      return user.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}

module.exports = {
  show: showRoute,
  addComment: addCommentRoute
};
