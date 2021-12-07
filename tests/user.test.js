const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});

describe('Test : Get one users', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/api/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});

describe('Test : create user', function() {
    it('responds with json', function(done) {
        request(app)
            .post('/api/createuser')
            .field('firstname', 'Create_test')
            .field('lastname', 'C_test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});


describe('Test : delete user', function() {
    it('responds with json', function(done) {
        request(app)
            .delete('/api/deleteuser')
            .field('id','666')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});

describe('Test : update user', function() {
    it('responds with json', function(done) {
        request(app)
            .put('/api/updateuser')
            .field('id', '666')
            .field('firstname', 'Test-Update')
            .field('lastname', 'Update-test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});

// describe('Test : cannot get one user', function() {
//     it('responds with json', function(done) {
//         request(app)
//             .get('/api/users/0')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(404, done);
//     });
// });