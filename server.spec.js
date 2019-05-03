const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
})

  describe('post /', () => {
    return request(server)
    .post({name:billy})
    .expect(res.status).toBe(200);
    });
  describe('Delete /', () => {
    return request(server)
    .delete({id:1})
    .expect(res.body).toBe({})
 
   
    });
//     it('should return JSON', async () => {
//       const res = await request(server).get('/');

//       expect(res.type).toBe('application/json');
//     });

//     it('should return { api: "up" }', async () => {
//       const res = await request(server).get('/');

//       expect(res.body).toEqual({ api: "up" });
//     });
//   });
// });
