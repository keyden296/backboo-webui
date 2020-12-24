const { db } = require('./../models/experienceModel')
const ExperienceModel = require('./../models/experienceModel')

const getAll = async () => {
    try {
        const experiences = await ExperienceModel.find() 
        return { status: 1, 'list': experiences }
    } catch (error) {
        throw(error)
    }
} 

const findById = async (id) => {
    try {
        const experience = await ExperienceModel.findById(id)
        if (!experience) throw { status: 404, message: 'Expierence not found'}
        return { status: 1, experience }
    } catch (error) {
        throw { status: 500, message: error}
    }
}

const getRanking = async () => {
    try {
        const ranking = await ExperienceModel.find().sort({ score: 'desc'}).limit(5)
        return { status: 1, ranking }
    } catch (error) {
        throw(error)
    }
}

//el controlador entrega un objeto json 'ExperienceData'
const insert = async (experienceData) => {
    try {
        //await, hace que la linea termine el proceso para continuar con la otra linea
        const experience = await ExperienceModel(experienceData).save()
        return { status: 1, experience }
    } catch (error) {
        throw(error)
    }
}

const count = async () => {
    try {
        // const countExperiences = await db.experiences.find().count()
        var MyCollection = dbConnection.model('experiences', ExperienceModel);
        const countExperiences = MyCollection.count()
        return { status: 1, countExperiences}
    } catch (error) {
        throw(error)
    }
}

module.exports = {
    getAll,
    findById,
    getRanking,
    insert,
    count
}