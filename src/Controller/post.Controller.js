import Post from "../models/post.model.js";
import { ApiResponse } from "../utils/responseHandler.js";
import { ApiError } from "../utils/apiErrorHandler.js";
import { asyncHandler } from "../utils/wrapAsync.js";

export const createPost = asyncHandler(async (req, res, next) => {
  const { title, content } = req.body;

  console.log(req.body);

  const post = await Post.create({
    title,
    content,
  });

  if (!post) {
    return next(new ApiError(500, "Post not created"));
  }

  res.status(201).json(new ApiResponse(201, post, "Post created"));
});
