const { prisma } = require("@prisma/client");
const res = require("express/lib/response");
const _error = require("../error");
const postService = require("../service/post");

exports.makePost = async (req, res) => {
  const { content, images } = req.body;
  try {
    const resp = await postService.createpost(content, images);
    res.json(resp);
  } catch (error) {
    res.json(_error("An error occured"));
  }
};

exports.makeComment = async () => {
  const { content, image } = req.body;
  try {
    const resp = await postService.createcomment(content, image);
    res.json(resp);
  } catch (error) {
    res.json(_error("An error occured"));
  }
};

exports.deleteComment = async () => {
  const { id } = req.params;
  try {
   const resp= await postService.deletecomment({ id });
   res.json(resp)
  } catch (error) {
    res.json(_error("An error occured"));
  }
};

exports.deletePost = async () => {
  const { id } = req.params;
  try {
    const resp=await postService.deletepost({ id });
    res.json(resp)
  } catch (error) {
    res.json(_error("An error occured"));
  }
};

exports.getPosts=async (req,res)=>{
  const {id}=req.params
  try {
   const resp= await postService.getposts({id})
   res.json(resp)
  } catch (error) {
    res.json(_error("An error occured"));
  }
}
