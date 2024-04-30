const getUsers = require('../services/userService.js')


const userController = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            error: 'Error interno del servidor'
        })
    }
}




module.exports = {
    userController
};