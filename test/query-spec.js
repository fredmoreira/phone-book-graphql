import request from 'supertest';
import {assert} from 'chai';

const url = 'http://localhost:4000';

describe('Integration: ', () => {
  it('should return array on body with lenght 1', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { id } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200);
        assert.exists(res.body.data.contacts);
        assert.isArray(res.body.data.contacts);
        assert.lengthOf(res.body.data.contacts,1);
        done();
      });
  });
  it('should return array on body with names Graphql', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { id, name } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.lengthOf(res.body.data.contacts,1);
        assert.equal(res.body.data.contacts[0].name,'Graphql');
        done();
      });
  });
  it('should return array on body with phone 32343234', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { phone } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.lengthOf(res.body.data.contacts,1);
        assert.equal(res.body.data.contacts[0].phone,'32343234');
        done();
      });
  });
  it('should return array on body with mobilephone 999999888', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { mobilephone } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.lengthOf(res.body.data.contacts,1);
        assert.equal(res.body.data.contacts[0].mobilephone,'999999888');
        done();
      });
  });
});
// console.log(res.body.data.contacts[0].id);