const {X_SCALE, MARGIN} = require("./size")

const computeX = position => {
    return X_SCALE * (MARGIN + position)
}

module.exports = {
    computeX,
}
