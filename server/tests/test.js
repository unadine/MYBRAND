
let Blog = require('../models/blogs');
let mongoose = require("mongoose");
let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
const fs = require('fs');


chai.should();
chai.use(chaiHttp);
const { should, have, expect} = chai;
const { it, describe, beforeEach, afterEach } = mocha;
const token = "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmJiYzc4N2RlZjYyOTllOTllYjk2OTIiLCJpYXQiOjE2MDc1MTM0NDl9.CxZSz4VwkDyoB0g0yPa8VKyaKU4kYp8YiMAj5PKrplE"
let testPost = {
            title: "The Lord of the Rings ",
            author: "J.R.R. Tolkien",
            body: "This is sooo interesting"
        }

chai.use(chaiHttp);
// Our parent block
describe('Blogs testing', () => {
    beforeEach((done) => { 
       Blog.deleteMany({}, (err) => {
          done();
        });
     });
/*
  * Test the /GET route
  */
  // describe('GET /blogs', () => {
      it('it should GET all the blogs', (done) => {
        chai.request(server)
            .get('/api/blogs')
            .set('Authorization',token)
            .end((err, res) => {
              // console.log(res.body);
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  // });
// describe("/POST blog", () => {
  it("it should  POST a blog ", (done) => {
    chai
      .request(server)
      .post("/api/blogs")
      .field({
        title: testPost.title,
        author: testPost.author,
        body: testPost.body
      })
      .attach("picture", fs.readFileSync("tests/img/dribble.png"), "dribble.png")
      .set("Authorization", token)
      .end((err, res) => {
        // console.log(res.body);
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("message");
        done();
      });
  });
});

// });

