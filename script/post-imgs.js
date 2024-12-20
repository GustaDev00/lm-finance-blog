require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const axios = require("axios");
const path = require("path");
const fs = require("fs");

const downloadImage = async (imageUrl, destinationPath) => {
  if (fs.existsSync(destinationPath)) {
    return;
  }

  try {
    const response = await axios.head(imageUrl);
    if (response.status === 200) {
      const imageResponse = await axios.get(imageUrl, {
        responseType: "stream",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
        },
      });
      imageResponse.data.pipe(fs.createWriteStream(destinationPath));
      return new Promise((resolve, reject) => {
        imageResponse.data.on("end", () => resolve());
        imageResponse.data.on("error", (error) => reject(error));
      });
    } else {
      throw new Error(`Image not found: ${imageUrl}`);
    }
  } catch (error) {
    throw new Error(`Failed to download image: ${error.message}`);
  }
};

const getImageAndDownload = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
      },
    };

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/posts`;
    const response = await fetch(apiUrl, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));

    const posts = response;
    if (Array.isArray(posts) && posts.length > 0) {
      for (const post of posts) {
        const imageUrl = post.img;
        const jsonImageName = path.basename(post.json.img);

        if (imageUrl && jsonImageName) {
          const destinationPath = path.join("public", "", jsonImageName);
          await downloadImage(imageUrl, destinationPath);
        } else {
          console.log("No image URL or image name found in the API response.");
        }
      }
    }
  } catch (error) {
    console.error(`Error fetching posts: ${error.message}`);
  }
};

getImageAndDownload();
