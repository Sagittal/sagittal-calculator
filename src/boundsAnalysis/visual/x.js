const {X_SCALE, MARGIN} = require("./sizes")

const computeX = position => {
    return X_SCALE * (MARGIN + position)
}

module.exports = {
    computeX,
}
