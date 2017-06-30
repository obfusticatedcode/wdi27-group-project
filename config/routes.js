const router = require('express').Router();
const campaigns = require('../controllers/campaigns');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/campaigns')
  .get(campaigns.index)
  .post(secureRoute, campaigns.create);

router.route('/campaigns/:id')
  .get(campaigns.show)
  .delete(secureRoute, campaigns.delete)
  .put(secureRoute, campaigns.update);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
