import request from 'supertest';
import {assert} from 'chai';

const url = 'http://localhost:4000';

describe('Integration: ', () => {
  it('should return empty array on body > data > contacts ', (done) => {
    request(url)
      .post('/')
      .set('Content-type', 'application/json')
      .send({query: '{ contacts { id } }' })
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200);
        assert.exists(res.body.data.contacts);
        done();
      });
  });
});
