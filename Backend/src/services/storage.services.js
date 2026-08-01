import ImageKit from "@imagekit/nodejs";
import { configDotenv } from "dotenv";
configDotenv();


const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});

async function uploadFile(buffer) {

    const result = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })    

    return result;
}

export default uploadFile;

