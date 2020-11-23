const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: 'dahr2qp62',
  api_key: '975857543694789',
  api_secret: 'zmszCRqiqVkGWIIKbV3ggl4K1hc' 
});

const uploadToCloud = async (file, res) => {
  try {
    const image = await cloudinary.uploader.upload(file.path, {
      folder: "MyBrand",
      use_filename: true,
    });
    return image;
  } catch (error) {
    return Response.error(res, 500, error);
  }
};

module.exports = uploadToCloud;