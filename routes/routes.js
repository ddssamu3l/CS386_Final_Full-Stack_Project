const { model } = require("mongoose");
const { html_top, html_home, html_bottom } = require("../views/partials/htmlFormats");
const Post = require("../models/createPostsSchema");
const mongoose = require("mongoose");
// implement logic to get posts from posts table

function fRoutes(app) {
    app.get("/", function(req, res) {
      const modelPost = require("../models/createPostsSchema.js");
      try{
        modelPost
          .find()
          .lean()
          .then(function (posts) {
            //console.log("Posts retrieved: " + JSON.stringify(posts));
            res.render("view_posts", { posts: posts });
          });
      }catch(err){
        console.log("ERROR retrieving posts: " + err);
      }
    });

    // "/search" route for searching posts by tag, title, content or authorEmail using an OR condition. 
    // Posts will be filtered by field properties that that matches the search query.
    app.get("/search", function(req, res) {
      const modelPost = require("../models/createPostsSchema.js");
      try{
        modelPost
          .find({
            $or: [
              { tag: req.query.queryString },
              { title: { $regex: req.query.queryString, $options: "i" } },
              { content: { $regex: req.query.queryString, $options: "i" } },
              { authorEmail: req.query.queryString},
            ],
          })
          .lean()
          .then(function (posts) {
            res.render("view_searched_posts", {
              queryString: req.query.queryString,
              posts: posts,
            });
          });
      }catch(err){
        console.log("ERROR searching posts: " + err);
      }
    });

    app.get("/create", function(req, res) {
      res.render("create_post");
    });

    app.post("/insert-post", async(req, res) => {
      console.log("Inserting post: " + JSON.stringify(req.body));
      try{
        const newPost = new Post({
          _id: new mongoose.Types.ObjectId(),
          title: req.body.title,
          content: req.body.content,
          tag: req.body.tag,
          authorEmail: req.body.authorEmail,
          date: Date.now(),
        })

        await newPost.save();
        res.status(201).send("Post inserted successfully");
      }catch(err){
        console.log("ERROR inserting post: " + err);
        return res.status(500).send("Error inserting post: " + err);
      }
    });

    // 404 error handling
    app.use(function (req, res, next) {
      const error = new Error("Page not found");
      error.status = 404;
      next(error);
    });
    // 500 error handling
    app.use(function (error, req, res, next) {
      let errCode = error.status || 500;
      let errMsg = error.message || "Internal Server Error";
      res.status(errCode);
      res.send(`<h1>Error ${errCode}</h1><p>${errMsg}</p>`);
    });
}

module.exports = fRoutes;