const mongoose = require("mongoose");
const Categories = require('../models/categories.models')
const express = require("express");
module.exports.categoriesController = {

createCategories: (req,res)=>{
Categories.create({name: req.body.name})
.then(() => res.json('done'))
  .catch(() => res.json('err'))

},

deleteCategories: (req,res) => {
    Categories.findByIdAndDelete(req.params.id, (err,data)=>{
        if(err){
            res.json('Ошибка')
        } else{
            res.json('Сделано')
        }
    })
},

findCategories: (req,res) => {
Categories.find({},(err,data)=>{
    if(err){
        res.json('Ошибка')
    } else{
        res.json(data)
    }
})
}

}




