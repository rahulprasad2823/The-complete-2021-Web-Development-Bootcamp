//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "Welcome welcome welcome" ;
const aboutContent = "Amazing opportunities for amazing people aalways wait be patient";
const contactContent = "Hyderabad ali briyani kali";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("<serverPath>",{useNewUrlParser: true},{useUnifiedTopology: true});

//Creating a Schema
const postSchema = {
  title: String,
  content: String
};
//mongoose model
const Post = mongoose.model("Post", postSchema);

//the home route
app.get("/", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});

// fetching "/compose" page
app.get("/compose", function(req, res){
  res.render("compose");
});

//posting title and content in /compose page
app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
// composed blog gets saved and the user is redirected to "/" route
  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});
//clicking on readmore on the home screen bring up the post with the id on the url
app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started in port 3000 successfully");
});