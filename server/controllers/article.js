const Articles = require('../models/articles.js')
// var bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

class Article{
    static AddArticle(req,res){
        console.log("masuk add");
        Articles.create({
            title:req.body.title,
            content:req.body.content,
            category:req.body.category,
            author:req.body.author,
        })
        .then(Article=>{
            res.json(Article)
        })
        .catch(err=>{
            res.json(err)
        })
        
    }
    static List(req,res){
        Articles.find({})
        .populate('author')
        .exec(function(err,articles){
            if(err){
                res.json(err)
            }
            else{
                res.json(articles)
            }
        })
        // .then(Articles=>{
        //     res.json(Articles)
        // })
        // .catch(err=>{
        //     res.json(err)
        // })
    }
    static ListbyUser(req,res){
        Articles.findOne({
            author:req.params.author
        })
        .then(Article=>{
            res.json(Article)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static Delete(req,res){
        Articles.findByIdAndDelete(req.params.id)
        .then(article=>{
            res.json(article)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static Update(req,res){
        Articles.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            content:req.body.content,
            category:req.body.category
        })
        .then(article=>{
            res.json(article)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static Category(req,res){
        Articles.find({
            category:req.params.category
        })
        .then(article=>{
            res.json(article)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}


module.exports = Article