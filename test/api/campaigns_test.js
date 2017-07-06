/* globals: api */

require('../helper');

const Campaign    = require('../../models/campaign');
const User        = require('../../models/user');
const jwt         = require('jsonwebtoken');
const { secret }  = require('../../config/environment');

let token;

describe('Campaign tests', () => {

  beforeEach(done => {
    Campaign.collection.remove();
    User.collection.remove();
    done();
  });

  describe('GET /api/campaigns', () => {

    beforeEach(done => {
      Campaign.create({
        name: 'Assitance for male in London Bridge area',
        lat: '51.5079',
        lng: '0.0877',
        createdBy: '53cb6b9b4f4ddef1ad47f943',
        description: 'This is an example description',
        isAvailable: true,
        type: true,
        categories: [ {} ]
      }, done);
    });

    it('should respond with a JSON object', done => {
      api.get('/api/campaigns')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of campaigns', done => {
      api.get('/api/campaigns')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of campaign objects', done => {
      api.get('/api/campaigns')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              'id',
              'name',
              'location',
              'address',
              'createdBy',
              'description',
              'isAvailable',
              'type',
              'categories',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });
  });

  describe('POST /api/campaigns without token', () => {

    it('should return a 401 response', done => {
      api.post('/api/campaigns')
        .set('Accept', 'application/json')
        .send({
          campaign: {
            name: 'Assitance for male in London Bridge area',
            lat: '51.5079',
            lng: '0.0877',
            createdBy: '53cb6b9b4f4ddef1ad47f943',
            description: 'This is an example description',
            isAvailable: true,
            type: true,
            categories: [ {} ]
          }
        }).expect(401, done);
    });

  });

  describe('POST /api/campaigns with token', () => {

    let user;

    beforeEach(done => {
      User.create({
        firstName: 'John',
        lastName: 'Smith',
        image: '',
        email: 'test@test.com',
        username: 'test',
        password: 'password',
        passwordConfirmation: 'password'
      }, (err, _user) => {
        token = jwt.sign({ userId: _user.id }, secret, { expiresIn: 60*60*24 });
        console.log(token, _user);
        user = _user;
        done();
      });
    });

    it('should return a 201 response', done => {
      api.post('/api/campaigns')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'Assitance for male in London Bridge area',
          lat: '51.5079',
          lng: '0.0877',
          createdBy: user.id,
          description: 'This is an example description',
          isAvailable: true,
          type: true,
          categories: [ {} ]
        }).expect(201, done);
    });
  });

  describe('GET /api/campaigns/:id', () => {

    let campaign;

    beforeEach(done => {
      Campaign.create({
        name: 'Assitance for male in London Bridge area',
        lat: '51.5079',
        lng: '0.0877',
        createdBy: '53cb6b9b4f4ddef1ad47f943',
        description: 'This is an example description',
        isAvailable: true,
        type: true,
        categories: [ {} ]
      }, (err, _campaign) => {
        campaign = _campaign;
        done();
      });
    });

    it('should return a 200 response', done => {
      api.get(`/api/campaigns/${campaign.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  describe('DELETE /api/campaigns/:id without token', () => {

    let campaign;

    beforeEach(done => {
      Campaign.create({
        name: 'Assitance for male in London Bridge area',
        lat: '51.5079',
        lng: '0.0877',
        createdBy: '53cb6b9b4f4ddef1ad47f943',
        description: 'This is an example description',
        isAvailable: true,
        type: true,
        categories: [ {} ]
      }, (err, _campaign) => {
        campaign = _campaign;
        done();
      });
    });

    it('should return a 401 response', done => {
      api.delete(`/api/campaigns/${campaign.id}`)
        .set('Accept', 'application/json')
        .expect(401, done);
    });

  });

  describe('DELETE /api/campaigns/:id with token', () => {

    beforeEach(done => {
      User.create({
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      }, (err, user) => {
        token = jwt.sign({ userId: user.id }, secret, { expiresIn: 60*60*24 });
        done();
      });
    });

    it('should return a 204 response', done => {
      Campaign.create({
        name: 'Assitance for male in London Bridge area',
        lat: '51.5079',
        lng: '0.0877',
        createdBy: '53cb6b9b4f4ddef1ad47f943',
        description: 'This is an example description',
        isAvailable: true,
        type: true,
        categories: [ {} ]
      }, (err, campaign) => {
        api.delete(`/api/campaigns/${campaign.id}`)
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .expect(204, done);
      });
    });
  });

});
