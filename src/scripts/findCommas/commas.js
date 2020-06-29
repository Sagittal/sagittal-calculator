const {computeFiveMonzosToCheck} = require("./fiveMonzosToCheck")
const {computeCommasFromFiveMonzo} = require("./commasFromFiveMonzo")
const {invertMonzo} = require("../../utilities/comma/invertMonzo")

const computeCommas = parameters => {
    const {
        lowerBound,
        upperBound,
        maximumSopfgtt,
        maximumCopfgtt,
        maximumApotomeSlope,
        maximumPrimeLimit,
        maximumAbsoluteThreeExponent,
        fiveRoughMonzo,
        sort,
    } = parameters

    let commas = []

    const fiveMonzosToCheck = fiveRoughMonzo ? [fiveRoughMonzo, invertMonzo(fiveRoughMonzo)] : computeFiveMonzosToCheck({
        maximumPrimeLimit,
        maximumSopfgtt,
        maximumCopfgtt,
    })

    fiveMonzosToCheck.forEach(fiveMonzoToCheck => {
        commas = commas.concat(
            computeCommasFromFiveMonzo(
                fiveMonzoToCheck,
                {
                    lowerBound,
                    upperBound,
                    maximumApotomeSlope,
                    maximumAbsoluteThreeExponent,
                },
            ),
        )
    })

    if (sort) {
        commas.sort((a, b) => {
            return a[sort] - b[sort]
        })
    }

    return commas
}

module.exports = {
    computeCommas,
}
