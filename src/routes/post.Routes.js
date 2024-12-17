import express from "express";
import { createPost } from "../Controller/post.Controller.js";

const router = express.Router();

router.post("/create-post", createPost);

export { router as postRoutes };
