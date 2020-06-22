const {computeRatioFromMonzo} = require("./ratioFromMonzo")
const {computeCentsFromRatio} = require("./centsFromRatio")
const {CENTS_PER_OCTAVE} = require("../constants")

const computeCentsFromMonzo = monzo => {
    const ratio = computeRatioFromMonzo(monzo)

    return computeCentsFromRatio(ratio)
}

const computeTwoMonzoInCentsRange = (threeMonzo, lowerBound, upperBound) => {
    if (upperBound - lowerBound > CENTS_PER_OCTAVE) throw new Error("Cents range must be less than 1200.")

    const monzo = [0, ...threeMonzo]
    let cents = computeCentsFromMonzo(monzo)
    while (cents > upperBound) {
        monzo[0] -= 1
        cents = computeCentsFromMonzo(monzo)
    }
    while (cents < lowerBound) {
        monzo[0] += 1
        cents = computeCentsFromMonzo(monzo)
    }

    return cents > lowerBound && cents < upperBound ? monzo : undefined
}

module.exports = {
    computeTwoMonzoInCentsRange
}
