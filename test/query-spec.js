import request from 'supertest';
import {assert} from 'chai';

const url = 'http://localhost:4000';

describe('Integration: ', () => {
  it('should return array on body with lenght 2 > data > contacts ', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { id } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200);
        assert.exists(res.body.data.contacts);
        assert.isArray(res.body.data.contacts);
        assert.lengthOf(res.body.data.contacts,2);
        done();
      });
  });
  it('should return array on body with names Tester and Graphql > data > contacts ', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { id, name } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.lengthOf(res.body.data.contacts,2);
        assert.equal(res.body.data.contacts[0].name,'Tester');
        assert.equal(res.body.data.contacts[1].name,'Graphql');
        done();
      });
  });
  it('should return array on body with phones > data > contacts ', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { phone } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.lengthOf(res.body.data.contacts,2);
        assert.equal(res.body.data.contacts[0].phone,'33225566');
        assert.equal(res.body.data.contacts[1].phone,'32343234');
        done();
      });
  });
  it('should return array on body with mobilephones > data > contacts ', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { mobilephone } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.lengthOf(res.body.data.contacts,2);
        assert.isNull(res.body.data.contacts[0].mobilephone);
        assert.equal(res.body.data.contacts[1].mobilephone,'999999888');
        done();
      });
  });
});
// console.log(res.body.data.contacts[0].id);