const {computeSecondaryCommaZone} = require("../../../../src/notations/ji/secondaryCommaZone")
const {computeCommas} = require("../../../../src/scripts/findCommas/commas")
const {presentCommas} = require("../../../../src/utilities/comma/present/commas")
const {computeCommaName} = require("../../../../src/utilities/comma/name")
const {SYMBOLS} = require("../../../../src/notations/ji/symbols")

describe("verifying primary commas", () => {
    xit("checks that every symbol's primary comma is its best-ranked comma in its secondary comma zone according to our metric", () => {
        SYMBOLS.forEach(symbol => {
            const commaName = computeCommaName(symbol.primaryComma.monzo)

            console.log(`\n\n${symbol.ascii} ${commaName}\n\n`)

            const secondaryCommaZone = computeSecondaryCommaZone(symbol)
            const lowerBound = secondaryCommaZone[0]
            const upperBound = secondaryCommaZone[1]
            const maximumFiveRoughSopfr = 61
            const maximumFiveRoughCopfr = 555
            const maximumApotomeSlope = 14
            const maximumPrimeLimit = 47
            const maximumAbsoluteThreeExponent = 15
            const fiveRoughMonzo = undefined
            const sort = "fiveRoughSopfr"

            const commas = computeCommas({
                lowerBound,
                upperBound,
                maximumFiveRoughSopfr,
                maximumFiveRoughCopfr,
                maximumApotomeSlope,
                maximumPrimeLimit,
                maximumAbsoluteThreeExponent,
                fiveRoughMonzo,
                sort,
            })

            console.log(presentCommas(commas))
        })
    })
})
