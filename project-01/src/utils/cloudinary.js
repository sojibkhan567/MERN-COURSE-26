import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: "dpqpudyog",
  api_key: "492412873418871",
  api_secret: "QvcZhuQUoSgTe8zneGggXIXuWXE", // Click 'View API Keys' above to copy your API secret
  //api_secret: "<your_api_secret>", // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader(localFilePath, {
      resource_type: "auto",
    });
    // file has been upload successfully
    console.log("file is uploaded on cloudinary", response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove temp file if it is failed
    return null;
  }
};
