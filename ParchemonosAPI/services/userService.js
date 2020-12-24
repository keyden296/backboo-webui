const UserModel = require('./../models/userModel')
const jwt = require('jsonwebtoken')

const register = async (userData) => {
    try {
        const user = await UserModel(userData).save()
        return{ status: 1, user}
    } catch (error) {
        throw(error)
    }
}

const auth = async (email, password) => {
    try {
        const user = await UserModel.findOne({email, password})
        if (user) {
            const idUser = user._id
            const payload = {
                idUser,
                name: user.name
            }
            const option = { expiresIn: '1h' }
            const token = jwt.sign(payload, process.env.SECRET, option)
            return {status: 1, token, idUser}
        }
        throw {status: 401, message: 'user not authorized'}
    } catch (error) {
        throw error
    }
}

// const qualify = async (id, idStar, comment) => {
//     try {
//         const rate = await UserModel
//     } catch (error) {
        
//     }
// }

module.exports = {
    register,
    auth
    // qualify
}