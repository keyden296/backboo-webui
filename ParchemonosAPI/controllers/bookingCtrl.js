const {insert, remove, change, makeRate, getBooking} = require('./../services/bookingService')

// const create = async (req, res) => {
//     try {
//         const idExperience = req.params.id
//         const bookingData = req.body
//         const bookingData.rate.score = ""
//         const userId = req.payload.UserId;
//         // const user = req.payload
//         const response = await insert(idExperience, bookingData, userId)
//         res.json(response)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

// const create = async (req, res) => {
//     try {
//         const bookingData = req.body,
//               experienceId = req.params.id,
//               userId = req.payload.UserId
//         // bookingData.bookingDate = req.body.bookingDate
//         // bookingData.comment = req.body.comment
//         // bookingData.rate.score = req.body.score
//         // bookingData.rate.rateComment = req.body.rateComment
//         // bookingData.rate = {
//         //     score = 0,
//         //     rateComment = ""
//         // }
//         const response = await insert(bookingData, experienceId, userId)
//         res.json(response)        
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

const create = async (req, res) => {
    try {
        const idExperience = req.params.id
        // const idUser = req.payload.idUser
        const bookingData = req.body
        bookingData.experienceId = idExperience
        // bookingData.rate = {
        //     score = 0,
        //     rateComment = ""
        // }
        // bookingData.rate.rateComment = ""
        // bookingData.userId = idUser
        // const user = req.payload
        const response = await insert(bookingData)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const erase = async (req, res) => {
    try {
        const idBookingData = req.params.id 
        const response = await remove(idBookingData)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const update = async (req, res) => {
    try {
        const bookingData = req.body
        const response = await change(bookingData)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const rate = async (req, res) => {
    try {
        const idBooking = req.params.id
        const bookingData = req.body
        const response = await makeRate(idBooking, bookingData)
        res.json(response)
    } catch (error) {
        res.status(res.status).send(error.message)
    }
}

// const rate = async (req, res) => {
//     try {
//         // const userId = req.payload.UserId,
//         const bookingData = req.body
//         response = await makeRate(bookingData)
//         res.json(response)
//     } catch (error) {
//         res.status(error.status).send(error.message)
//     }
// }

const get = async (req,res) => {
    try{
        const idExperience = req.params.id
        const idUser = req.payload.idUser
        const bookingData = req.body
        bookingData.experienceId = idExperience
        bookingData.userId = idUser
        const response = await getBooking(bookingData)
        res.json(response)
    } catch (error){
        res.status(error.status).send(error.message)
    }
}

module.exports = {
    create,
    erase,
    update,
    rate,
    get
}