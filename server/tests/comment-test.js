let mongoose = require("mongoose");
let Post = require('../models/commentmodel');
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
    comment: "This is amazing" 
}
const failTest = {
    name: '',
    comment: '' 
}
describe('COMMENT API TEST', () => {
    afterEach(async () => {
        await Post.deleteMany({});
      });
    describe('CRD Comment', () => {
            it('it should CREATE a comment', async () => {
                const res = await chai.request(server).post("/api/comments").send(testPost);
                expect(res.status).to.be.equal(200);
                expect(res.body).to.have.property('message', 'Comment saved successfully');
                expect(res).to.be.json;
                expect(res)
            });
            it('it should get an error when creating', async () => {
                const res = await chai.request(server).post("/api/comments").send(failTest);
                expect(res.status).to.be.equal(400);
                expect(res).to.be.json;
            });
            // Get all comments
            it('it should GET all the comments', async () => {
                const res = await chai.request(server).get("/api/comments").send(testPost);
                expect(res.status).to.be.equal(200);
                expect(res).to.be.json;
            });
    //         // DELETE a comment
            it('Should get delete one comment', async () => {
                const post = await Post.create(testPost);
                await post.save();
                const res = await chai.request(server).delete(`/api/comments/${post._id}`);
                expect(res.status).to.be.equal(200);
                expect(res).to.be.json;
            });
    });
});