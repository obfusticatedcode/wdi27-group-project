const Campaign = require('../models/campaign');


function indexRoute(req, res, next) {
  Campaign
  .find()
  .populate('createdBy')
  .exec()
  .then((campaigns) => res.json(campaigns))
  .catch(next);
}

function createRoute(req, res, next) {
  Campaign
  .create(req.body)
  .then((campaign) => res.status(201).json(campaign))
  .catch(next);
}

function showRoute(req, res, next) {
  Campaign
  .findById(req.params.id)
  .populate('createdBy')
  .exec()
  .then((campaign) => {
    // No error handling
    if(!campaign) return res.notFound();

    res.json(campaign);
  })
  .catch(next);
}

function updateRoute(req, res, next) {
  Campaign
    .findById(req.params.id)
    .exec()
    .then((campaign) => {
      if(!campaign) return res.notFound();

      for(const field in req.body) {
        campaign[field] = req.body[field];
      }

      return campaign.save();
    })
    .then((campaign) => res.json(campaign))
    .catch(next);
}


function deleteRoute(req, res, next) {
  Campaign
  .findById(req.params.id)
  .exec()
  .then((campaign) => {
    if(!campaign) return res.notFound();

    return campaign.remove();
  })
  .then(() => res.status(204).end())
  .catch(next);
}


module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute
};
