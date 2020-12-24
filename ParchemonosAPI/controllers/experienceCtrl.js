const { getAll, findById, getRanking, insert, count } = require('./../services/experienceService')

const all = async (req,res) => {
    try {
        const response = await getAll() 
        res.json( response )
    } catch (error) {
        res.status(500).send(error)
    }
}

const detail = async (req,res) => {
    try {
        const id = req.params.id
        response = await findById(id)
        res.json( response )
    } catch (error) {
        res.status(error.status).send(error.message)
    }
    
}

const ranking = async (req,res) => {
    try {
        const response = await getRanking()
        res.json( response )
    } catch (error) {
        res.status(500).send(error)
    }
}

const create = async (req,res) => {
    try {
        const experienceData = req.body
        const response = await insert(experienceData)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const countExperiences = async (req,res) => {
    try {
        const response = await count()
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    all, 
    detail,
    ranking,
    create,
    countExperiences
}