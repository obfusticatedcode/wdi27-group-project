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

  if(req.file) req.body.image = req.file.filename;
  req.body.createdBy = req.user;
  console.log(req.body);
  Campaign
  .create(req.body)
  .then((campaign) => {
    res.status(201).json(campaign);
  })
  .catch(next);
}

function showRoute(req, res, next) {

  req.body.createdBy = req.user;

  Campaign
  .findById(req.params.id)
  .populate('createdBy')
  .exec()
  .then((campaign) => {
    if(!campaign) return res.notFound();
    res.json(campaign);
  })
  .catch(next);
}

function updateRoute(req, res, next) {

  if(req.file) req.body.image = req.file.filename;
  req.body.createdBy = req.user;
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

function createCategoryRoute(req, res, next) {

  req.body.createdBy = req.user;

  Campaign
  .findById(req.params.id)
  .exec()
  .then((campaign) => {
    if(!campaign) return res.notFound();

    const category = campaign.categories.create(req.body);
    campaign.categories.push(category);

    return campaign.save()
    .then(() => res.json(category));
  })
  .catch(next);
}

function deleteCategoryRoute(req, res, next) {
  console.log(req.params.id);
  Campaign
  .findById(req.params.id)
  .exec()
  .then((campaign) => {
    if(!campaign) return res.notFound();

    const category = campaign.category.id(req.params.categoryId);
    category.remove();

    return campaign.save();
  })
  .then((campaign) => res.redirect(`/campaigns/${campaign.id}`))
  .catch(next);
}



module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute,
  createCategory: createCategoryRoute,
  deleteCategory: deleteCategoryRoute
};
