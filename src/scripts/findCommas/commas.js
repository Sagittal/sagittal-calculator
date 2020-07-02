const {computeFiveSlicedMonzosToCheck} = require("./fiveSlicedMonzosToCheck")
const {computeCommasFromFiveSlicedMonzo} = require("./commasFromFiveSlicedMonzo")
const {invertMonzo} = require("../../utilities/comma/invertMonzo")

const computeCommas = options => {
    const {
        lowerBound,
        upperBound,
        maximumFiveRoughSopfr,
        maximumFiveRoughCopfr,
        maximumApotomeSlope,
        maximumPrimeLimit,
        maximumAbsoluteThreeExponent,
        fiveSlicedMonzo,
        sortKey,
    } = options

    let commas = []

    const fiveSlicedMonzosToCheck = fiveSlicedMonzo ? [fiveSlicedMonzo, invertMonzo(fiveSlicedMonzo)] : computeFiveSlicedMonzosToCheck({
        maximumPrimeLimit,
        maximumFiveRoughSopfr,
        maximumFiveRoughCopfr,
    })

    fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
        commas = commas.concat(
            computeCommasFromFiveSlicedMonzo(
                fiveSlicedMonzoToCheck,
                {
                    lowerBound,
                    upperBound,
                    maximumApotomeSlope,
                    maximumAbsoluteThreeExponent,
                },
            ),
        )
    })

    if (sortKey) {
        commas.sort((comma, nextComma) => {
            return comma[sortKey] - nextComma[sortKey]
        })
    }

    return commas
}

module.exports = {
    computeCommas,
}
