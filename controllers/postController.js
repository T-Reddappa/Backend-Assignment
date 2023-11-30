const express = require("express");

const Post = require("../models/Post");
const User = require("../models/User");

const createPost = async (req, res) => {
  console.log(req.email, "createPost");
  try {
    const { title, content } = req.body;
    const postedBy = await User.findOne({ email: req.email });
    const userId = postedBy._id;
    console.log(userId);
    const newPost = new Post({
      title,
      content,
      author: userId,
    });
    const createdPost = await newPost.save();
    if (createdPost) {
      res
        .status(201)
        .json({ message: "Post Created Successfully", createdPost });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletedPost = await Post.findByIdAndDelete(postId);
    res
      .status(200)
      .json({ message: "Post Deleted Successfully.", deletedPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const updatedPostDetails = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      updatedPostDetails,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Post Updated Successfully.", updatedPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { comment } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.comments.push(comment);

    await post.save();

    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPost, getPosts, deletePost, updatePost, addComment };
