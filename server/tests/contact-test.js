let mongoose = require("mongoose");
let Post = require('../models/contactmodel');
let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');


chai.should();
chai.use(chaiHttp);
const { should, have, expect} = chai;
const { it, describe, beforeEach, afterEach } = mocha;
const testPost = {
    name: "Kenny",
    email:"Kenny1@gmail.com",
    message: "This is amazing" 
}
const failTest = {
    name: '',
    email: '',
    message: '' 
}
describe('CONTACT API TEST', () => {
    afterEach(async () => {
        await Post.deleteMany({});
      });
    describe('CRD Query', () => {
            it('it should CREATE a query', async () => {
                const res = await chai.request(server).post("/api/queries").send(testPost);
                expect(res.status).to.be.equal(201);
                expect(res.body).to.have.property('message', 'Message saved successfully');
                expect(res).to.be.json;
                expect(res)
            });
           
    //         // Get all blog
            it('it should GET all queries', async () => {
                const res = await chai.request(server).get("/api/queries").send(testPost);
                expect(res.status).to.be.equal(200);
                expect(res).to.be.json;
            });

              // Get one post
              it('Should get one post', async () => {
                const post = await Post.create(testPost);
                await post.save();
                const res = await chai.request(server).get(`/api/queries/${post._id}`);
                expect(res.status).to.be.equal(200);
                expect(res).to.be.json;
            });
           
    //         // DELETE a post 
            it('Should get delete one query', async () => {
                const post = await Post.create(testPost);
                await post.save();
                const res = await chai.request(server).delete(`/api/queries/${post._id}`);
                expect(res.status).to.be.equal(200);
                expect(res).to.be.json;
            });
    });
});