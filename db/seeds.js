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
        firstName: 'Dwight',
        lastName: 'Ora',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.7000000000000001, lng: 50.25 },
        email: 'Janice_Reinger68@hotmail.com',
        username: 'Libbie78',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Monte',
        lastName: 'Lonny',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.8, lng: 50.05 },
        email: 'Ana48@hotmail.com',
        username: 'Kennedi.VonRueden95',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Khalil',
        lastName: 'Hilton',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.5, lng: 51.25 },
        email: 'Jacky.Medhurst99@gmail.com',
        username: 'Verla_Spinka',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Anita',
        lastName: 'Minnie',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.35000000000000003, lng: 50.25 },
        email: 'Rodrigo61@gmail.com',
        username: 'Jana.Wunsch',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Elliot',
        lastName: 'Maribel',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.8, lng: 50.3 },
        email: 'Bennett3@yahoo.com',
        username: 'Aimee_Goyette25',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Eugene',
        lastName: 'Tod',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 1.4000000000000001, lng: 51.05 },
        email: 'Gay24@yahoo.com',
        username: 'Luther39',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Mathilde',
        lastName: 'Holden',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 1, lng: 50.9 },
        email: 'Silas_Ebert82@yahoo.com',
        username: 'Madisen52',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Hilbert',
        lastName: 'Jabari',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.05, lng: 50.25 },
        email: 'Timmy.Kilback@gmail.com',
        username: 'Jason51',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Jess',
        lastName: 'Narciso',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 1.25, lng: 50.85 },
        email: 'Allan.Medhurst50@hotmail.com',
        username: 'Ashtyn_Casper28',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Wilson',
        lastName: 'Myrtle',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 1.3, lng: 51.05 },
        email: 'Chanel_Cremin@hotmail.com',
        username: 'Duncan82',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Roselyn',
        lastName: 'Alexander',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.30000000000000004, lng: 50.75 },
        email: 'Vada44@yahoo.com',
        username: 'Camren_Zulauf41',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Robb',
        lastName: 'Percy',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.75, lng: 51.45 },
        email: 'Alexandria_Kirlin@gmail.com',
        username: 'Trevor_Barton',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Candida',
        lastName: 'Virgie',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.6000000000000001, lng: 51.2 },
        email: 'Raheem.Miller@yahoo.com',
        username: 'Dena.Koch',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Luis',
        lastName: 'Kylee',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.7000000000000001, lng: 50.35 },
        email: 'Eddie_Harris@yahoo.com',
        username: 'Jermey_Jerde',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Delphia',
        lastName: 'Keith',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 1.4500000000000002, lng: 50 },
        email: 'Harold46@hotmail.com',
        username: 'Joseph.Larkin45',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Issac',
        lastName: 'Itzel',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.45, lng: 51.05 },
        email: 'Reggie_Jacobs@hotmail.com',
        username: 'Peyton.Johns27',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Luther',
        lastName: 'Afton',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.8, lng: 50.95 },
        email: 'Norval.Lehner36@hotmail.com',
        username: 'Trinity.Wiegand',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Mercedes',
        lastName: 'Miracle',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.55, lng: 50 },
        email: 'German87@hotmail.com',
        username: 'Aiden65',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Kaden',
        lastName: 'Alyson',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.1, lng: 51.15 },
        email: 'Cecilia.Berge@gmail.com',
        username: 'Zaria.Grady70',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Stephon',
        lastName: 'Travon',
        image: 'http://lorempixel.com/640/480/people',
        location: { lat: 0.30000000000000004, lng: 50.3 },
        email: 'Shanelle76@hotmail.com',
        username: 'Teresa.Rosenbaum9',
        password: 'password',
        passwordConfirmation: 'password'
      }])

.then((users) => {
  console.log(`${users.length} users created`);

  return Campaign
  .create([{
        name: 'Help help help!',
        location: { lat: 51.45, lng: -0.5499999999999999 },
        createdBy: users[18],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'food': 0 }]
      },{
        name: 'Food needed',
        location: { lat: 52.45, lng: -0.7 },
        createdBy: users[3],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: false,
        categories: [{ 'food': 2 }]
      },{
        name: 'Can someone help?',
        location: { lat: 52.35, lng: -1.45 },
        createdBy: users[7],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'food': 2 }]
      },{
        name: 'Help help help!',
        location: { lat: 51, lng: -0.75 },
        createdBy: users[9],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: false,
        categories: [{ 'food': 2 }]
      },{
        name: 'Food required',
        location: { lat: 51.85, lng: -0.8999999999999999 },
        createdBy: users[11],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'food': 3 }]
      },{
        name: 'Food needed',
        location: { lat: 51.4, lng: -1.45 },
        createdBy: users[5],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'beds': 0 }]
      },{
        name: 'Bed for tonight?',
        location: { lat: 51.95, lng: -0.5499999999999999 },
        createdBy: users[18],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: false,
        categories: [{ 'beds': 1 }]
      },{
        name: 'Food required',
        location: { lat: 51, lng: -0.95 },
        createdBy: users[18],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'beds': 0 }]
      },{
        name: 'Help needed',
        location: { lat: 52.45, lng: -0.19999999999999996 },
        createdBy: users[10],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'food': 0 }]
      },{
        name: 'Food needed',
        location: { lat: 51.1, lng: -1.05 },
        createdBy: users[14],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'food': 0 }]
      },{
        name: 'Food required',
        location: { lat: 51.25, lng: -1.1 },
        createdBy: users[2],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'food': 0 }]
      },{
        name: 'I need help',
        location: { lat: 51.95, lng: -0.09999999999999987 },
        createdBy: users[1],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'food': 4 }]
      },{
        name: 'Food needed',
        location: { lat: 51.3, lng: -0.5499999999999999 },
        createdBy: users[1],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'beds': 2 }]
      },{
        name: 'Assistance needed',
        location: { lat: 52.15, lng: -0.09999999999999987 },
        createdBy: users[18],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'beds': 4 }]
      },{
        name: 'Bed required',
        location: { lat: 51.65, lng: -0.34999999999999987 },
        createdBy: users[5],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'washing': 2 }]
      },{
        name: 'Food needed',
        location: { lat: 52.05, lng: -0.34999999999999987 },
        createdBy: users[9],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'beds': 3 }]
      },{
        name: 'Bed for tonight?',
        location: { lat: 51.3, lng: -1.05 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'washing': 3 }]
      },{
        name: 'Bed required',
        location: { lat: 52.45, lng: -0.8999999999999999 },
        createdBy: users[14],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'washing': 2 }]
      },{
        name: 'Bed for tonight?',
        location: { lat: 51.65, lng: -0.7999999999999999 },
        createdBy: users[6],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: false,
        categories: [{ 'food': 2 }]
      },{
        name: 'Food needed',
        location: { lat: 52.25, lng: -0.19999999999999996 },
        createdBy: users[17],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: false,
        categories: [{ 'beds': 0 }]
      },{
        name: 'Help help help!',
        location: { lat: 52.3, lng: -1.35 },
        createdBy: users[0],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: false,
        categories: [{ 'food': 2 }]
      },{
        name: 'Bed required',
        location: { lat: 51.65, lng: -0.75 },
        createdBy: users[5],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: false,
        categories: [{ 'beds': 3 }]
      },{
        name: 'I need help',
        location: { lat: 51.6, lng: -0.19999999999999996 },
        createdBy: users[3],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: false,
        categories: [{ 'beds': 3 }]
      },{
        name: 'Bed required',
        location: { lat: 51.5, lng: -1.05 },
        createdBy: users[18],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'washing': 4 }]
      },{
        name: 'Help needed',
        location: { lat: 52.25, lng: -1.15 },
        createdBy: users[3],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'food': 1 }]
      },{
        name: 'Bed for tonight?',
        location: { lat: 51.95, lng: -1.25 },
        createdBy: users[18],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'food': 1 }]
      },{
        name: 'Food needed',
        location: { lat: 51.55, lng: -0.04999999999999982 },
        createdBy: users[9],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'beds': 3 }]
      },{
        name: 'Assistance needed',
        location: { lat: 52.05, lng: -0.1499999999999999 },
        createdBy: users[10],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: false,
        categories: [{ 'washing': 4 }]
      },{
        name: 'Help help help!',
        location: { lat: 52.35, lng: -0.95 },
        createdBy: users[17],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'washing': 2 }]
      },{
        name: 'Bed required',
        location: { lat: 51.6, lng: -0.7999999999999999 },
        createdBy: users[7],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: false,
        categories: [{ 'food': 0 }]
      },{
        name: 'Bed required',
        location: { lat: 51.55, lng: -1.05 },
        createdBy: users[6],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: false,
        categories: [{ 'beds': 2 }]
      },{
        name: 'Assistance needed',
        location: { lat: 51.6, lng: -1.15 },
        createdBy: users[18],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'beds': 0 }]
      },{
        name: 'Food required',
        location: { lat: 51.2, lng: -1.35 },
        createdBy: users[17],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: false,
        categories: [{ 'beds': 2 }]
      },{
        name: 'I need help',
        location: { lat: 51, lng: -0.6499999999999999 },
        createdBy: users[1],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'food': 4 }]
      },{
        name: 'I need help',
        location: { lat: 52.35, lng: -0.7 },
        createdBy: users[12],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'food': 0 }]
      },{
        name: 'Food required',
        location: { lat: 52, lng: -0.6 },
        createdBy: users[16],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'beds': 1 }]
      },{
        name: 'I need help',
        location: { lat: 52.35, lng: -0.8999999999999999 },
        createdBy: users[17],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: false,
        categories: [{ 'food': 0 }]
      },{
        name: 'Help needed',
        location: { lat: 52.4, lng: -0.6499999999999999 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: false,
        categories: [{ 'washing': 4 }]
      },{
        name: 'Bed required',
        location: { lat: 51.15, lng: -0.2999999999999998 },
        createdBy: users[11],
        description: 'I need shelter for my family',
        isAvailable: true,
        type: true,
        categories: [{ 'washing': 0 }]
      },{
        name: 'Help help help!',
        location: { lat: 51.95, lng: -1.25 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: false,
        type: true,
        categories: [{ 'washing': 0 }]
      }]);
})

.then(campaigns => console.log(`${campaigns.length} campaigns created!`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
