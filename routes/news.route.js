const {Router} = require('express')
const { newsController } = require('../controllers/news.controller')
const Categories = require('../models/categories.models')
// const { find } = require('../models/news.models')
const router = Router()



router.post('/news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.updateNews)
router.get('/news', newsController.findNews)
router.get('/news', newsController.findNews)
router.get('/news/categories/:id', newsController.findNewsbyCategories)

module.exports = router


