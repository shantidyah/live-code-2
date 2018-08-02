const Users = require('../models/users.js')
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class User{
    static AddUser(req,res){
        console.log("masuk add");
        Users.findOne({
            username:req.body.username
        })
        .then(user=>{
            if(user==null){
                var salt = bcrypt.genSaltSync(5);
                var hash = bcrypt.hashSync(req.body.password, salt);
                Users.create({
                    username:req.body.username,
                    password:hash
                })
                .then(user=>{
                    res.json(user)
                })
                .catch(err=>{
                    res.json(err)
                })
            }
            else{
                res.json("invalid")
            }
        })
        .catch(err=>{
            res.json(err)
        })
        
    }
    static Login(req,res){
        Users.findOne({
            username:req.body.username
        })
        .then(user=>{
            if(user==null){
                res.json("error");
            }
            else{
                var status = bcrypt.compareSync(req.body.password, user.password);
                if(status){
                    const token = jwt.sign({ id: user._id, username: user.username }, process.env.secret)
                    res.json(token)
                }
                else{
                    res.json("error");
                }
            }
        })
    }
    static List(req,res){
        Users.find({})
        .then(users=>{
            res.json(users)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static ListbyId(req,res){
        Users.findById(req.params.id)
        .then(user=>{
            res.json(user)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}


module.exports = User