const router = require('express').Router();
const campaigns = require('../controllers/campaigns');

router.route('/campaigns')
.get(campaigns.index)
.post(campaigns.create);

router.route('/campaigns/:id')
.get(campaigns.show)
.delete(campaigns.delete)
.put(campaigns.update);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
