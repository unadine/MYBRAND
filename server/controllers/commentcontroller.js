const Comment = require("../models/commentmodel")


exports.createComment=(req, res, next) => {
	const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment,
	});
    comment.save().then(
        () =>{
            res.status(201).json({
                message:'Comment saved successfully'
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
exports.getAllComments = (req, res,next) => {
    Comment.find().then(
        (comments)=>{
        res.status(200).json(comments);
        }
    ).catch(
        (error) =>{
            res.status(400).json({
                error:error
            });
        }
    );
}
exports.deleteComment =(req, res,next) => {
	Comment.deleteOne({ _id: req.params.id }).then(
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


