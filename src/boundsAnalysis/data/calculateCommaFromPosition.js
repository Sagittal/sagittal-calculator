const {COMMAS} = require("./commas")

const calculateCommaFromPosition = position => {
    if (!position) return

    return COMMAS.find(comma => {
        return comma.position === position
    })
}

module.exports = {
    calculateCommaFromPosition,
}
