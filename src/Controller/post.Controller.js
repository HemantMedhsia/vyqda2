import { ApiResponse } from "../utils/responseHandler.js";
import { ApiError } from "../utils/apiErrorHandler.js";
import { asyncHandler } from "../utils/wrapAsync.js";
import { Post } from "../models/index.js";

export const createPost = asyncHandler(async (req, res, next) => {
  const { title, content } = req.body;

  const post = await Post.create({
    title,
    content,
  });

  if (!post) {
    res.status(400).json(new ApiError(400, "Post not created"));
  }

  res.status(201).json(new ApiResponse(201, post, "Post created"));
});

export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.findAll();

  if (posts.length === 0) {
    res.status(400).json(new ApiError(400, "No posts found"));
  }

  res.status(200).json(new ApiResponse(200, posts, "Posts found"));
});

export const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);

  if (!post) {
    res.status(400).json(new ApiError(400, "Post not found"));
  }

  res.status(200).json(new ApiResponse(200, post, "Post found"));
});

export const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);

  if (!post) {
    res.status(400).json(new ApiError(400, "Post not found"));
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  await post.save();

  res.status(200).json(new ApiResponse(200, post, "Post updated"));
});

export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);

  if (!post) {
    res.status(400).json(new ApiError(400, "Post not found"));
  }

  await post.destroy();

  res.status(200).json(new ApiResponse(200, post, "Post deleted"));
});
