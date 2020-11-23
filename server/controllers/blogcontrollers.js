const Blog = require("../models/blogs")
const uploadToCloud = require("../config/cloudinary");

exports.createBlog=(req, res, next) => {
    const img =  uploadToCloud(req.file, res);
	const blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        picture:req.file.filename 
	});
    blog.save().then(
        () =>{
            res.status(201).json({
                message:'Blog saved successfully'
            });
        }
    ).catch(
       (error) => {
        // console.log(error);
           res.status(400).json({
               error:error
            
           });
       }
    ); 
}
exports.getOneBlog=(req, res,next) => {
    	 Blog.findOne({ 
             _id: req.params.id 
            }).then(
                (blog) =>{
                    res.status(200).json(blog)
                }
            ).catch (
            (error) =>{
    		res.status(404).json({
                error:error
            });
        }
            );
    }
exports.updateBlog=(req, res,next) => {
const blog = new Blog({
    _id:req.params.id,
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    picture:req.body.picture,
});
Blog.updateOne({_id: req.params.id}, blog).then(
    () =>{
        res.status(201).json({
            message:"Blog updated successfully"
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
exports.deleteBlog =(req, res,next) => {
	Blog.deleteOne({ _id: req.params.id }).then(
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
exports.getAllBlogs = (req, res,next) => {
	 Blog.find().then(
         (blogs)=>{
         res.status(200).json(blogs);
         }
     ).catch(
         (error) =>{
             res.status(400).json({
                 error:error
             });
         }
     );
}