
const { Router } = require("express");
// const { userController } = require('../controllers/userController.js');
// const { postController } = require('../controllers/postController.js');
const { userRouter } = require("./userRouter.js");
const { postRouter } = require("./postRouter.js");


const router = Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);


module.exports = router;




















