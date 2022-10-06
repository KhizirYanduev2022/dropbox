const {Router} = require('express')
const router = Router()
const {categoriesController} = require('../controllers/categories.controller')

router.post('/categories', categoriesController.createCategories )
router.delete('/categories/:id', categoriesController.deleteCategories)
router.get('/categories', categoriesController.findCategories )


module.exports = router