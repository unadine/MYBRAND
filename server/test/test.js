
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
const token = "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmJiYzc4N2RlZjYyOTllOTllYjk2OTIiLCJpYXQiOjE2MDY2MzUzNzJ9.g7j_SHMedjOd9qjmfuqKJ4BhxDmCyqBe-RKj6O5xPls"
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
      .attach("picture", fs.readFileSync("test/img/dribble.png"), "dribble.png")
      .set("Authorization", token)
      .end((err, res) => {
        // console.log(res.body);
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("message");
        done();
      });
  });
  // it("should update a blog post", async () => {
  //   const blogRes = await chai
  //     .request(server)
  //     .post("/api/blogs/:id")
  //     .set("Authorization", token)
  //     .field({
  //       title: testPost.title,
  //       author: testPost.author,
  //       body: testPost.body
  //     })
  //     .attach("picture", fs.readFileSync("test/img/dribble.png"), "dribble.png");

  //   const res = await chai
  //     .request(server)
  //     .put(`/api/blogs/${blogRes.body._id}`)
  //     .set("Authorization", token)
  //     .send(testPost);
  //   expect(res.status).to.be.equal(200);
  //   expect(res.body).to.have.property("message");
  // });
// });
// describe('/POST blog', () => {
//   it('it should  POST a blog ', (done) => {
//     chai.request(server)
//         .post('/api/blogs')
//         .field({title:testPost.title,author:testPost.author,body:testPost.body}).attach('picture',fs.readFileSync('test/img/dribble.png'),'dribble.png')
//         .set('Authorization',token)
//         .end((err, res) => {
//           console.log(res)
//               res.should.have.status(201);
//               res.body.should.be.a('object');
//               res.body.should.have.property('message');
//           done();
//         });
//   });

// });
});
// describe("Blog  tests:", async () => {
//   beforeEach(async () => {
//     await Blog.deleteMany({});
//   });

//   afterEach(async () => {
//     await Blog.deleteMany({});
   
//   });

//   it("Should create a blog", async () => {
//     const res = await chai
//       chai.request(server)
//       .post("/api/blogs")
//       .set("Authorization", token)
//       .field({
//         title:testPost.title,
//         author:testPost.author,
//         body:testPost.body
//       })
//       .attach(
//         'picture',
//         fs.readFileSync('test/img/dribble.png'),
//         'dribble.png'
//       );
//       console.log(res.body);
//     expect(res.status).to.be.equal(201);
//     expect(res.body).to.have.property("message");
    
//   });
// });

