
const { Router } = require("express");
// const { userController } = require('../controllers/userController.js');
// const { postController } = require('../controllers/postController.js');
const { userRouter } = require("./userRouter.js");
const { postRouter } = require("./postRouter.js");

const saludoIndex = (req, res) => {
    try {
        res.status(200).send('Hola desde el index')
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}

const router = Router();

router.get('/', saludoIndex);

router.use('/users', userRouter);
router.use('/posts', postRouter);


module.exports = router;

















