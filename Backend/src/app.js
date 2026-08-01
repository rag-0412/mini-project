import express, { request } from "express";
import multer from "multer";
import uploadFile from "./services/storage.services.js";
import postModel from "./models/post.model.js";

const app = express();
app.use(express.json());


const upload = multer({storage: multer.memoryStorage() })


app.post('/create-post', upload.single("image"), async (req, res) => {

    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
        image_Url: result.url,
        caption: req.body.caption,
    })
    return res.status(201).json({
        message: "post created successfully",
        post
    })
})

app.get('/fetch', async (req, res) => {

    const fetch = await postModel.find()

    
    return res.status(200).json({
        message: "post fetched succesfully",
        fetch,
    })
})

export default app;