import request from 'supertest';
import {assert} from 'chai';

const url = 'http://localhost:4000';

describe('Integration - Mutations: ', () => {
  it.skip('should return data on body with valid id', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .set('Accept', '*/*')
      .send({query: 'mutation{ createContact(name: "Test-Mutation", phone: "98986565") { id }}'})
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200);
        assert.exists(res.body.data.createContact.id);
        done();
      });
  });
  it.skip('should return contact on body with name Test-Mutation', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .set('Accept', '*/*')
      .send({query: 'mutation{ createContact(name: "Test-Mutation", phone: "98986565") { name }}'})
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200);
        assert.equal(res.body.data.createContact.name,'Test-Mutation');
        assert.isUndefined(res.body.data.createContact.phone);
        assert.isUndefined(res.body.data.createContact.mobilephone);
        done();
      });
  });
  it.skip('should return contact on body with name Test-Mutation and phone 98986565', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .set('Accept', '*/*')
      .send({query: 'mutation{ createContact(name: "Test-Mutation", phone: "98986565") { name phone }}'})
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200);
        assert.equal(res.body.data.createContact.phone,'98986565');
        assert.equal(res.body.data.createContact.name, 'Test-Mutation');
        assert.isUndefined(res.body.data.createContact.mobilephone);
        done();
      });
  });
});