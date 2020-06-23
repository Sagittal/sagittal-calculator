const {COMMAS} = require("./commas")

const computePositionComma = position => {
    if (!position) return

    return COMMAS.find(comma => {
        return comma.position === position
    })
}

module.exports = {
    computePositionComma: computePositionComma,
}
