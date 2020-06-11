const {round} = require("./round")
const {ACCURACY_THRESHOLD} = require("./constants")

const computeIsCloseTo = (valueOne, valueTwo, accuracyThreshold = ACCURACY_THRESHOLD) => {
    const difference = valueOne - valueTwo

    return Math.abs(round(difference, accuracyThreshold)) === 0
}

module.exports = {
    computeIsCloseTo,
}
