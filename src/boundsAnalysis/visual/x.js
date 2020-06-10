const {X_SCALE, MARGIN} = require("./constants")

const computeX = position => {
    return X_SCALE * (MARGIN + position)
}

module.exports = {
    computeX,
}
