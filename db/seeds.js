const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');
const { dbURI }   = require('../config/environment');
const Campaign    = require('../models/campaign');
const User        = require('../models/user');


mongoose.connect(dbURI);

User.collection.drop();
Campaign.collection.drop();


User
.create([{
  firstName: 'James',
  lastName: 'Harris',
  image: '',
  email: 'jim@jim.com',
  username: 'jgbharris',
  password: 'password',
  passwordConfirmation: 'password'
}])

.then((users) => {
  console.log(`${users.length} users created`);

  return Campaign
  .create([{
    name: 'Shelter needed',
    lat: 51.515419,
    lng: -0.141099,
    createdBy: users[0],
    description: 'I need shelter for my family',
    expiryDate: '2017/08/01',
    isAvailable: true,
    type: true,
    categories: { 'beds': 4 }
  }]);
})

.then(campaigns => console.log(`${campaigns.length} campaigns created!`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
