const { db } = require('./../models/bookingModel')
const bookingModel = require('./../models/bookingModel')

// const insert = async (idExperience, bookingData, idUser) => {
//     try {
//         //await, hace que la linea termine el proceso para continuar con la otra linea
//         // console.log('...', bookingData)
//         bookingData.experienceId = idExperience
//         booking.user_id = idUser
//         const booking = await BookingModel(bookingData).save()
//         return { status: 1, booking }
//     } catch (error) {
//         throw(error)
//     }
// }

// const insert = async (bookingData, experienceId, userId) => {
//     try {
//         //await, hace que la linea termine el proceso para continuar con la otra linea
//         // console.log('...', bookingData)
//             // bookingData.idExperience = idExperience
//             // bookingData.bookingDate = bookingDate,
//             // bookingData.userId = userId,
//             // bookingDate.comment = comment
//             // bookingData.rate = rate
//         const booking = await BookingModel(bookingData, experienceId, userId).save()
//         return { status: 1, booking }
//     } catch (error) {
//         throw(error, "Error en el servicio de booking")
//     }
// }

const insert = async (bookingData) => {
    try {        
        const booking = await bookingModel(bookingData).save()
        // await bookingModel(bookingData).save()
        // const lastBooking = await bookingModel.find({},{"_id":1}).limit(1)
        return { status: 1, booking }
    } catch (error) {
        throw(error, "Error en el servicio de booking")
    }
}

const remove = async (idBookingData) => {
    try {
        const booking = await BookingModel.remove({"_id": idBookingData})
        return { status: 1, booking}
    } catch (error) {
        throw(error)
    }
}

const change = async (bookingData) => {
    try {
        const booking = await BookingModel.updateOne({"_id": bookingData._id},{$set: {"bookingDate": bookingData.bookingDate, "comment": bookingData.comment, "rate": {"score": bookingData.score, "comment": bookingData.comment}}})
        return { status: 1, booking }
    } catch (error) {
        throw(error)
    }
}

// const makeRate = async (bookingData) => {
//     try {
//         const rateBooking = await BookingModel.update({userId: bookingData.userId, experienceId: bookingData.experienceId}, {$set: {score: booking.rate, comment: booking.comment}})
//         return { status: 1, rateBooking }
//     } catch (error) {
//         throw(error)
//     }
// }

// const makeRate = async (bookingData) => {
//     try {
//         const bookingId = bookingData.bookingId,
//                 //  UserId = bookingData.userId,
//             //   IdExperience = bookingData.idExperience,              
//               score = bookingData.rate.score,
//               rateComment = bookingData.rate.rateComment,
//             //   rateComment = bookingData.comment,               
//             //   rateBooking = await BookingModel.updateOne({userId: UserId, experienceId: IdExperience}, {$set: {rate:{score: score, comment: comment}}})
//             //   rateBooking = await BookingModel.updateOne({userId: UserId}, {experienceId: IdExperience}, {$set: {rate: {score: score, rateComment: rateComment}}})
//               rateBooking = await BookingModel.updateOne({bookingId: bookingId}, {$set: {rate: {score: score, rateComment: rateComment}}})
//         return { status: 1, rateBooking }
//     } catch (error) {
//         throw(error)
//     }
// }

const makeRate = async (idBooking, bookingData) => {
    try {
        const bookingsId = idBooking
        const score = bookingData.rate.score 
        const rateComment = bookingData.rate.rateComment            
        const rateBooking = await bookingModel.updateOne({_id: bookingsId}, {$set: {rate: {score: score, rateComment: rateComment}}})            
        return { status: 1, rateBooking }
    } catch (error) {
        throw(error.message, "Error en el servicio")
    }
}

const getBooking = async (bookingData) => {
    try {
        const idUser = bookingData.userId,
              idExperience = bookingData.experienceId,
              dateBooking = booking.bookingDate,
              comment = booking.comment
              obtain = await bookingModel.find({},{userId: idUser})
        return {status: 1, obtain }
    } catch(error){
        throw (error)
    }
}

module.exports = {
    insert,
    remove,
    change,
    makeRate,
    getBooking
}