const {DATA} = require("../data/data")

const calculateCommaFromPosition = position => {
    if (!position) return

    const datum = DATA.find(datum => {
        return datum.comma.position === position
    })

    return datum.comma
}

module.exports = {
    calculateCommaFromPosition,
}
