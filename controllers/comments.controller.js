const mongoose = require('mongoose')
const express = require('express')
const Comments = require('../models/comments.models')


module.exports.commentsController = {
createComments:(req,res)=>{
Comments.create({name:req.body.name,
               newsid: req.body.newsid }, (err,data)=>{
    if(err){
        res.json('ошибка')
    } else{
        res.json(data) 
    }
})

},
findNewsbyComments:(req,res) => {
    Comments.create(req.body)
    res.json('hfghgfhf')
},


    
    deleteComments : (req,res) => {
        Comments.findOneAndDelete(req.params.id, (err,data)=>{
            if(err){
                res.json('Ошибка')
            }else{
                res.json('удален')
            }
        })
    },

findComments: (req,res) => {
    Comments.find({},(err,data)=>{
        if(err){
            res.json('Ошибка')
        }else{
            res.json(data)
        }
    })
}


}


