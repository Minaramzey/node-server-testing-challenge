const request = require('supertest');
const server = require('./server.js');

describe('server.js', () =>{
    describe('index route', () => {
        it('should return an OK status', () => {
          const expectedStatusCode = 200;
          return request(server)
          .get('/');
          expect(res.status).toBe(expectedStatusCode);
})
it('should return a JSON object from the index route', () => {
    const expectedBody = { api: 'uppp' };

    return request(server).get('/');

    expect(response.body).toEqual(expectedBody);
  });

  it('should return a JSON object from the index route', async () => {
    const response = await request(server).get('/');

    expect(response.type).toEqual('application/json');
  });
});
}); 