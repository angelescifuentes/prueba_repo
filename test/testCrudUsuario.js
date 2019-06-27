'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const util = require('util');

chai.should();
chai.use(chaiHttp);


/* user object */
var usuario = {
    id: 50,
    name: "Nuevo Usuario",
    email: "Nuevo@Nuevo.com"
}

before(done => {
  console.log('\n\n-----------------------\n--\n-- START TEST\n--\n-------------------------');
  done();
});
after(done => {
  console.log('\n\n-----------------------\n--\n-- END TEST\n--\n-------------------------');
  done();
});


/* asyn test */
describe(' Usuario crud test', () => {
  it('get "usuarios" record', done => {
    chai.request(server)
    .get('/usuarios')
    .end(function (err, res) {
      if(err) done(err);
      done();
      console.log('status code: %s, numero de usuarios: %s',res.statusCode, res.body.length)
    });
  }).timeout(0);

  it('get "Usuario by id" record', done => {
    chai.request(server)
    .get('/usuarios/1')
    .end(function (err, res) {
      if(err) done(err);
      done();
      console.log('status code: %s, usuario: %s',res.statusCode, util.inspect(res.body, false, null))
    });
  }).timeout(0);

  it('crear "Usuario" record', done => {
          chai.request(server)
              .post('/usuarios')
              .send(usuario)
              .then(res => {
                  done();
                  console.log('status code: %s',res.statusCode)
              })
              .catch(err => {
                  done(err);
              });
      }).timeout(0);

});
