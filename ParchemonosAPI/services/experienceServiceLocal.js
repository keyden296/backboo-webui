const EXPERIENCE_REPO = require('./../repository/experienceRepository')

const getAll = () => {
    return { status: 1, 'list': EXPERIENCE_REPO }
} 

const findById = (id) => {
    const experience = EXPERIENCE_REPO.find(item => item.id === id)
    //terminar el proceso si no encuentra la experiencia
    if (experience == undefined) throw ('Experience not found')
    return { status: 1, experience }
}

const getRanking = () => {
    const experienceSorted = EXPERIENCE_REPO.sort((a,b) => {
        if (a.stars < b.stars) return 1
        if (a.stars > b.stars) return -1
        return 0
    })
    //devolver solo 5 posiciones
    const ranking = experienceSorted.slice(0,5)
    return { status: 1, ranking }
}

const makeRate = (id, rate, idUser) => {
 
}

module.exports = {
    getAll,
    findById,
    getRanking,
    makeRate
}