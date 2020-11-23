const Post = require("../models/contactmodel")

exports.createQuery=(req, res, next) => {
    
	const post = new Post({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message, 
	});
    post.save().then(
        () =>{
            res.status(201).json({
                message:'Message saved successfully'
            });
        }
    ).catch(
       (error) => {
           res.status(400).json({
               error:error
           });
       }
    ); 
}
exports.getOneQuery=(req, res,next) => {
    Post.findOne({ 
        _id: req.params.id 
       }).then(
           (post) =>{
               res.status(200).json(post)
           }
       ).catch (
       (error) =>{
       res.status(404).json({
           error:error
       });
   }
       );
}
exports.getAllQuerries = (req, res,next) => {
    Post.find().then(
        (posts)=>{
        res.status(200).json(posts);
        }
    ).catch(
        (error) =>{
            res.status(400).json({
                error:error
            });
        }
    );
}
exports.deletePost =(req, res,next) => {
	Post.deleteOne({ _id: req.params.id }).then(
        () =>{
            res.status(200).json({
                message:"Successfully Deleted"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error:error
            });
        }
    );
}

