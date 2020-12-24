const jwt = require('jsonwebtoken')

const authVerify = (req,res,next) => {
    //verificar si llega la autorizacion el la cabecera del request
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        //token sin firma
        const token = req.headers.authorization.split(' ')[1]
        try {
            //token decodificado
            const decoded = jwt.verify(token, process.env.SECRET)
            //crear payload para el request
            req.payload = decoded
        } catch (error) {
            res.status(401).send('Unauthorized')
        }
    } else {
        res.status(400).send('Token is mandatory')
    }
    next()
}

module.exports = authVerify