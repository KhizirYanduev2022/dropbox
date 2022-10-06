const mongoose = require("mongoose");
const express = require("express");
const News = require("../models/news.models");

module.exports.newsController = {
  postNews: (req, res) => {
    News.create({
      title: req.body.title,
      text: req.body.text,
      categories: req.body.categories
    }).then(() => res.json(zz))
      .catch((err) => {
        res.json(err);
      });
  },

  deleteNews: (req, res) => {
    News.findByIdAndDelete(req.params.id, (err,doc)=>{
        if(err){
           console.log(err);
        } else{
            console.log('fgdfgdfg');
        }
        res.send("hgfhghgfgh")

    })
    then(()=>{
        res.json('Новость удалена')
    })
},

updateNews: (req,res) => {
    News.findByIdAndUpdate(req.params.id,
        {title:req.body.title,
        text:req.body.text})
        .then(() => res.json('Успешно изменено'))
  .catch(() => res.json('Ошибка при изменении'))

},

findNews:(req,res) => {
    News.findById(req.params.id)
    .then(() => res.json('Успешно найдена'))
    .catch(() => res.json('Ошибка при нахождении'))
},

findAllNews:(req,res)=>{
    News.find({})
    .then(() => res.json('Успешно найдена'))
    .catch(() => res.json('Ошибка при нахождении'))
}, 

findNewsbyCategories:(req,res) => {
    News.find({categories:req.params.id}, (err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })

},




}


