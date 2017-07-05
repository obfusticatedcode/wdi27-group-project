const router = require('express').Router();
const campaigns = require('../controllers/campaigns');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const oauth = require('../controllers/oauth');
const users = require('../controllers/users');
const imageUpload = require('../lib/imageUpload'); // imageUpload needs to be brought in from lib

router.route('/users/:id')
  .all(secureRoute)
  .get(users.show);

router.route('/campaigns')
  .get(campaigns.index)
  .post(secureRoute, imageUpload, campaigns.create);

router.route('/campaigns/:id')
  .get(campaigns.show)
  .delete(secureRoute, campaigns.delete)
  .put(secureRoute, imageUpload, campaigns.update);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/oauth/facebook')
  .post(oauth.facebook);

router.route('/oauth/instagram')
  .post(oauth.instagram);

router.route('/campaigns/:id/categories')
  .post(secureRoute, campaigns.createCategory);

router.route('/campaigns/:id/categories/:categoryId')
  .delete(secureRoute, campaigns.deleteCategory);

router.route('/users/:id/comments')
  .post(secureRoute, users.addComment);

router.route('/users/:id/comments/:commentId')
  .delete(secureRoute, users.deleteComment);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
