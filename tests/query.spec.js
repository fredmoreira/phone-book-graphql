/* eslint-disable no-undef */
const request = require('supertest');

const url = 'http://localhost:4000';

describe('Integration: ', () => {
  it('should return Indentifier with ID standard ', (done) => {
    request(url)
      .post('/')
      .send()
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toEqual(200);
        expect(res.body.data).toBeTruthy();
        done();
      });
  });
});
