const { Router } = require('express');
const router = Router();
const userRouter = require ('./userRouter')
const posteosRouter = require ('./posteosRouter')



router.use('/users', userRouter)
router.use('/posteos', posteosRouter)


module.exports = router;