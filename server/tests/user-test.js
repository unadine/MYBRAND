let mongoose = require("mongoose");
let User= require('../models/user');
let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');


chai.should();
chai.use(chaiHttp);
const { should, have, expect} = chai;
const { it, describe, beforeEach, afterEach } = mocha;
const testPost = {
    email: "Ken@gmail.com",
    password: "test123" 
}
const loginuser ={
    email: "Ken@gmail.com",
    password: "test123" 

}
describe('Blogs testing', () => {
    beforeEach((done) => { 
       User.deleteMany({}, (err) => {
          done();
        });
     });
     it('it should  CREATE a user', async () => {
        const res = await chai.request(server).post("/api/auth/signup").send(testPost);
        expect(res.status).to.be.equal(201);
        expect(res).to.be.json;
        expect(res)
    });
   
    it('it should not CREATE an existing user', async () => {
        await chai.request(server).post("/api/auth/signup").send(testPost)
        const res = await chai.request(server).post("/api/auth/signup").send(testPost);
        expect(res.status).to.be.equal(500);
        expect(res).to.be.json;
        expect(res)
    });
    it('it should LOGIN a user', async () => {
        await chai.request(server).post("/api/auth/signup").send(testPost)
        const res = await chai.request(server).post("/api/auth/login").send(loginuser);
        expect(res.status).to.be.equal(200);
        expect(res).to.be.json;
        expect(res)
    });


});

