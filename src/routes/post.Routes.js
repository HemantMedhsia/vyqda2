import express from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../Controller/post.Controller.js";

const router = express.Router();

router.post("/create-post", createPost);
router.get("/get-all-post", getPosts);
router.get("/get-post/:id", getPostById);
router.put("/update-post/:id", updatePost);
router.delete("/delete-post/:id", deletePost);

export { router as postRoutes };
