
const {Router} = require('express')
const { newsController } = require('../controllers/news.controller')
const {commentsController}  = (require('../controllers/comments.controller'))
const router = Router()


router.get('/comments', commentsController.createComments)
router.post('/comments',commentsController.findNewsbyComments)
router.delete('/comments/:id', commentsController.deleteComments)
router.get('/comments', commentsController.findComments)

module.exports = router