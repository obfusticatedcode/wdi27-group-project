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
        firstName: 'Tiara',
        lastName: 'Colleen',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/demersdesigns/128.jpg',
        location: { lat: -2.95, lng: 50 },
        email: 'Marian79@yahoo.com',
        username: 'Bruce39',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Duncan',
        lastName: 'Jared',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg',
        location: { lat: -2.35, lng: 51.4 },
        email: 'Tiara_Grant38@yahoo.com',
        username: 'Nellie_Douglas67',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Eunice',
        lastName: 'Elizabeth',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/timpetricola/128.jpg',
        location: { lat: -2.85, lng: 51.05 },
        email: 'Jeremie.Gleichner@hotmail.com',
        username: 'Thad_Streich27',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Eldora',
        lastName: 'Nelda',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/aaroni/128.jpg',
        location: { lat: -1.5999999999999999, lng: 50.95 },
        email: 'Johnnie.Hettinger@yahoo.com',
        username: 'Meda_Homenick40',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Piper',
        lastName: 'Declan',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/anthonysukow/128.jpg',
        location: { lat: -2.8, lng: 50.55 },
        email: 'Colt82@yahoo.com',
        username: 'Maynard.Bergstrom85',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Pascale',
        lastName: 'Roy',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/marclgonzales/128.jpg',
        location: { lat: -2.5, lng: 50.1 },
        email: 'Marilou.Orn24@gmail.com',
        username: 'Anna_Cummings',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Amani',
        lastName: 'Abe',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/urrutimeoli/128.jpg',
        location: { lat: -1.8499999999999999, lng: 51.35 },
        email: 'Skye95@hotmail.com',
        username: 'Reinhold72',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Hailey',
        lastName: 'Hyman',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/vonachoo/128.jpg',
        location: { lat: -3, lng: 50.9 },
        email: 'Keyon.Wehner20@hotmail.com',
        username: 'Ara61',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Buddy',
        lastName: 'Garth',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/128.jpg',
        location: { lat: -1.65, lng: 50.2 },
        email: 'Raegan18@hotmail.com',
        username: 'Lexi_Sporer',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Beverly',
        lastName: 'Kaitlin',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/bobwassermann/128.jpg',
        location: { lat: -1.7, lng: 50.65 },
        email: 'Rick_Pouros@gmail.com',
        username: 'Burley_Kling64',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Trace',
        lastName: 'Anthony',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg',
        location: { lat: -2.4, lng: 51.05 },
        email: 'Alexander38@yahoo.com',
        username: 'Heloise_Quitzon0',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Angelita',
        lastName: 'Dee',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/llun/128.jpg',
        location: { lat: -2.75, lng: 51 },
        email: 'Queenie.Hane47@yahoo.com',
        username: 'Rose29',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Estrella',
        lastName: 'Christy',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nbirckel/128.jpg',
        location: { lat: -1.9, lng: 51.05 },
        email: 'Margot.Macejkovic@hotmail.com',
        username: 'Grady_Aufderhar92',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Raina',
        lastName: 'Keon',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/emsgulam/128.jpg',
        location: { lat: -2.65, lng: 51.15 },
        email: 'Vladimir_Crona98@yahoo.com',
        username: 'Columbus_Dach96',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Santa',
        lastName: 'May',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/emmeffess/128.jpg',
        location: { lat: -2.5, lng: 50.2 },
        email: 'Nola_Rodriguez@hotmail.com',
        username: 'Kurtis.Herzog24',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Janessa',
        lastName: 'Keagan',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/vanchesz/128.jpg',
        location: { lat: -2.6, lng: 51.2 },
        email: 'Erich42@hotmail.com',
        username: 'Harley.Blanda45',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Dean',
        lastName: 'Julia',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ecommerceil/128.jpg',
        location: { lat: -1.5499999999999998, lng: 51.3 },
        email: 'Melody.Kuhic@gmail.com',
        username: 'Hilbert_Hilll8',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Earl',
        lastName: 'Carole',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/stalewine/128.jpg',
        location: { lat: -2.7, lng: 50 },
        email: 'Weston.Kassulke@yahoo.com',
        username: 'Odell62',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Rose',
        lastName: 'Aglae',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/bruno_mart/128.jpg',
        location: { lat: -2.55, lng: 50.65 },
        email: 'Vern.McCullough31@gmail.com',
        username: 'Stan.Tremblay65',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Cora',
        lastName: 'Sebastian',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/justinrhee/128.jpg',
        location: { lat: -2.85, lng: 50.3 },
        email: 'Preston91@yahoo.com',
        username: 'Antonia2',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        firstName: 'Tim',
        lastName: 'Rooke',
        image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/10609487_10152259133751701_530836782283067901_n.jpg?oh=9e05d3dd2f5f2c61106d8f75b0ce9895&oe=59C67B',
        location: { lat: 0.07, lng: 51.5055 },
        email: 'timrooke1991@gmail.com',
        username: 'timrooke',
        password: 'password',
        passwordConfirmation: 'password'
      }])

.then((users) => {
  console.log(`${users.length} users created`);

  return Campaign
  .create([{
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.3, lng: -1 },
        createdBy: users[2],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'food',  people: 2 }]
      }, {
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.3, lng: -1.15 },
        createdBy: users[1],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'food',  people: 4 }]
      }, {
        name: 'Food needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.7, lng: -1.25 },
        createdBy: users[8],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'food',  people: 0 }]
      }, {
        name: 'I need help',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.45, lng: -1.4 },
        createdBy: users[17],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'washing',  people: 1 }]
      }, {
        name: 'Bed for tonight?',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.45, lng: -0.09999999999999987 },
        createdBy: users[13],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'undefined',  people: 2 }]
      }, {
        name: 'Can someone help?',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.1, lng: -0.95 },
        createdBy: users[14],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'food',  people: 4 }]
      }, {
        name: 'Food required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.75, lng: -0.75 },
        createdBy: users[8],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 0 }]
      }, {
        name: 'Help needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.15, lng: -0.25 },
        createdBy: users[9],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'food',  people: 4 }]
      }, {
        name: 'Food needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.4, lng: -1.3 },
        createdBy: users[15],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'undefined',  people: 0 }]
      }, {
        name: 'Assistance needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.4, lng: -0.75 },
        createdBy: users[17],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 0 }]
      }, {
        name: 'Assistance needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.25, lng: -1.5 },
        createdBy: users[7],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'washing',  people: 2 }]
      }, {
        name: 'Food required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.5, lng: -0.7 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'washing',  people: 1 }]
      }, {
        name: 'Assistance needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.1, lng: -1.5 },
        createdBy: users[2],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 3 }]
      }, {
        name: 'Can someone help?',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.15, lng: -1.05 },
        createdBy: users[16],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'washing',  people: 3 }]
      }, {
        name: 'I need help',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.15, lng: -0.04999999999999982 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 2 }]
      }, {
        name: 'Help needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.85, lng: -0.5499999999999999 },
        createdBy: users[14],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 2 }]
      }, {
        name: 'Assistance needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.1, lng: -0.6 },
        createdBy: users[8],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'undefined',  people: 1 }]
      }, {
        name: 'I need help',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.35, lng: -1.1 },
        createdBy: users[11],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'undefined',  people: 3 }]
      }, {
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.3, lng: -0.1499999999999999 },
        createdBy: users[5],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'food',  people: 3 }]
      }, {
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.2, lng: -1.1 },
        createdBy: users[3],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'washing',  people: 1 }]
      }, {
        name: 'I need help',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.65, lng: -0.04999999999999982 },
        createdBy: users[16],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'washing',  people: 4 }]
      }, {
        name: 'Help needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.1, lng: -0.34999999999999987 },
        createdBy: users[3],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'undefined',  people: 0 }]
      }, {
        name: 'Food required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.8, lng: -0.6 },
        createdBy: users[6],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'undefined',  people: 4 }]
      }, {
        name: 'Help needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.8, lng: -0.44999999999999996 },
        createdBy: users[0],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'food',  people: 3 }]
      }, {
        name: 'Help needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.55, lng: -0.85 },
        createdBy: users[4],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'washing',  people: 2 }]
      }, {
        name: 'Food required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.85, lng: -0.25 },
        createdBy: users[14],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'food',  people: 1 }]
      }, {
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.3, lng: -0.7 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'washing',  people: 1 }]
      }, {
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.15, lng: -1.5 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'food',  people: 0 }]
      }, {
        name: 'Bed for tonight?',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.05, lng: -0.25 },
        createdBy: users[1],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 2 }]
      }, {
        name: 'Can someone help?',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.65, lng: -0.7 },
        createdBy: users[17],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'washing',  people: 0 }]
      }, {
        name: 'Help needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.5, lng: -0.19999999999999996 },
        createdBy: users[19],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'food',  people: 1 }]
      }, {
        name: 'Food required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.7, lng: -0.25 },
        createdBy: users[9],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 0 }]
      }, {
        name: 'I need help',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.45, lng: -0.2999999999999998 },
        createdBy: users[15],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'washing',  people: 3 }]
      }, {
        name: 'Can someone help?',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.85, lng: -1.25 },
        createdBy: users[8],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'undefined',  people: 2 }]
      }, {
        name: 'Help needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.9, lng: -0.2999999999999998 },
        createdBy: users[6],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'undefined',  people: 3 }]
      }, {
        name: 'I need help',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.15, lng: -0.95 },
        createdBy: users[5],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'washing',  people: 4 }]
      }, {
        name: 'Assistance needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.25, lng: -1.05 },
        createdBy: users[5],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Helper',
        categories: [{ name: 'washing',  people: 2 }]
      }, {
        name: 'Assistance needed',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 51.5, lng: -1.1 },
        createdBy: users[16],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Helper',
        categories: [{ name: 'washing',  people: 2 }]
      }, {
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52, lng: -0.19999999999999996 },
        createdBy: users[11],
        description: 'I need shelter for my family',
        isAvailable: true,
        campaignType: 'Campaigner',
        categories: [{ name: 'food',  people: 4 }]
      }, {
        name: 'Bed required',
        image: 'http://lorempixel.com/640/480/city',
        location: { lat: 52.45, lng: -0.3999999999999999 },
        createdBy: users[7],
        description: 'I need shelter for my family',
        isAvailable: false,
        campaignType: 'Campaigner',
        categories: [{ name: 'food',  people: 2 }]
      }]);
})

.then(campaigns => console.log(`${campaigns.length} campaigns created!`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
