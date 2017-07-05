const User = require('../models/user');

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('campaigns comments.createdBy')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);

    })
    .catch(next);
}


//add comments
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

//delete comments
function deleteCommentRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      const comment = user.comments.id(req.params.commentId);
      comment.remove();

      return user.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  show: showRoute,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute
};
