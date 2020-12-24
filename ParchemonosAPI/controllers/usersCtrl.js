const { response } = require('express')
const {register, auth, qualify} = require('./../services/userService')

const signup = async (req, res) => {
    try {
        const userData = req.body
        const response = await register(userData)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const response = await auth(email, password)
        res.json(response)
    } catch (error) {
        res.status(error.status).send(error.message)
    }
}

// const rate = async (req, res) => {
//     try {
//         const id = req.params.id,
//               { idStar, comment } = req.body
//         response = await qualify(id, idStar, comment)
//         res.json(response)
//     } catch (error) {
//         res.status(error.status).send(error.message)
//     }
// }

module.exports = {
    signup,
    login
    // rate
}