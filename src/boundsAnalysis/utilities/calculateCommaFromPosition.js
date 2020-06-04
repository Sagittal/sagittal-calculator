const {DATA} = require("../data/data")
const {calculateNeighborPositions} = require("./calculateNeighborPositions")

const calculateCommaFromPosition = (position) => {
    const datum = DATA.find(datum => {
        return datum.comma.position === position
    })

    return datum.comma
}

module.exports = {
    calculateCommaFromPosition,
}
