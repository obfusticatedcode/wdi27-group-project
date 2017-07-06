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
  image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/c2.0.320.320/p320x320/10609487_10152259133751701_530836782283067901_n.jpg?oh=3f01db086c5bcf62e3812080c57da23f&oe=5A101B0D',
  location: { lat: 51.71541, lng: -0.111099 },
  email: 'jim@jim',
  username: 'jgbharris',
  password: 'password',
  passwordConfirmation: 'password'
}, {
  firstName: 'Tim',
  lastName: 'Rooke',
  image: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/c2.0.320.320/p320x320/10609487_10152259133751701_530836782283067901_n.jpg?oh=3f01db086c5bcf62e3812080c57da23f&oe=5A101B0D',
  location: { lat: 51.510936, lng: -0.086630 },
  email: 'timrooke1991@gmail.com',
  username: 'timro123',
  password: 'password',
  passwordConfirmation: 'password'
}, {
  firstName: 'Chisomo',
  lastName: 'Lungu',
  image: 'https://i.imgur.com/pmJd2YG.jpg',
  location: { lat: 55.510936, lng: -0.486630 },
  email: 'fake@gmail.com',
  username: 'driver',
  password: 'password',
  passwordConfirmation: 'password'
}])

.then((users) => {
  console.log(`${users.length} users created`);

  return Campaign
  .create([{
    name: 'Shelter needed',
    location: { lat: 51.515419, lng: -0.141099 },
    createdBy: users[0],
    description: 'I need shelter for my family',
    isAvailable: true,
    type: true,
    categories: [{ 'beds': 2 }]
  }, {
    name: 'Food needed',
    location: { lat: 51.71541, lng: -0.111099 },
    createdBy: users[0],
    description: 'I need shelter for my family',
    isAvailable: true,
    type: true,
    categories: [{ 'beds': 4 }]
  }, {
    name: 'Roof for a night!',
    location: { lat: 51.215419, lng: -0.101099 },
    createdBy: users[0],
    description: 'I need food and shelter for my family',
    isAvailable: true,
    type: false,
    categories: [{ 'beds': 3 }]
  }, {
    name: 'Shelter needed',
    location: { lat: 51.915419, lng: -0.21099 },
    createdBy: users[0],
    description: 'I need shelter for my family',
    isAvailable: true,
    type: false,
    categories: [{ 'beds': 4 }]
  }, {
    name: 'Shelter needed',
    location: { lat: 51.645419, lng: -0.1111099 },
    createdBy: users[0],
    description: 'I need shelter for my family',
    isAvailable: true,
    type: false,
    categories: [{ 'beds': 4 }]
  }]);
})

.then(campaigns => console.log(`${campaigns.length} campaigns created!`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
