const {INA_SIZES} = require("./intervals")

const computeInaDistance = (distance, level) => {
    return distance / INA_SIZES[level]
}

module.exports = {
    computeInaDistance,
}
