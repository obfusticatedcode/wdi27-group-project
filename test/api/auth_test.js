/* globals: api */
require('../helper');

const User = require('../../models/user');

describe('Authentications tests', () => {

  beforeEach((done) => {
    User.collection.drop();
    done();
  });

  describe('POST /api/register with good credentials', () => {
    it('should return a message', (done) => {
      api.post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'test',
          email: 'test@test.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.body.message).to.be.a('string');
          done();
        });
    });
  });

  describe('POST /api/register with bad credentials', () => {
    it('should return a 400 response', (done) => {
      api.post('/api/register')
      .set('Accept', 'application/json')
      .send({
        username: 'test',
        email: 'test@test.com'
      })
      .expect(400, done);
    });
  });

  describe('POST /api/login with good credentials', () => {

    beforeEach((done) => {
      User.create({
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      }, done);
    });

    it('should return a token', (done) => {
      api.post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.body.token).to.be.a('string');
          done();
        });
    });
  });

  describe('POST /api/login with bad credentials', () => {

    beforeEach((done) => {
      User.create({
        username: 'test',
        email: 'test@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      }, done);
    });

    it('should return a 401 response', (done) => {
      api.post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'fail'
        })
        .expect(401, done);
    });
  });

});
