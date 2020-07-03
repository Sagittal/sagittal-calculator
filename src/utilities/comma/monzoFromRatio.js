const {combineMonzos} = require("./combineMonzos")
const {computeMonzoFromInteger} = require("./monzoFromInteger")

const computeMonzoFromRatio = ratio => {
    const positiveFactors = computeMonzoFromInteger(ratio[0])
    const negativeFactors = computeMonzoFromInteger(ratio[1]).map(term => -term)

    while (positiveFactors.length < negativeFactors.length) {
        positiveFactors.push(0)
    }

    return combineMonzos(positiveFactors, negativeFactors)
}

module.exports = {
    computeMonzoFromRatio,
}
