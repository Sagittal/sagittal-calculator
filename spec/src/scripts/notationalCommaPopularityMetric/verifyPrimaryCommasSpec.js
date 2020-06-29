const {computeSecondaryCommaZone} = require("../../../../src/notations/ji/secondaryCommaZone")
const {computeCommas} = require("../../../../src/scripts/findCommas/commas")
const {presentCommas} = require("../../../../src/utilities/comma/present/commas")
const {computeCommaName} = require("../../../../src/utilities/comma/commaName") // todo: can't this just be called name
const {SYMBOLS} = require("../../../../src/notations/ji/symbols")

describe("verifying primary commas", () => {
    xit("checks that every symbol's primary comma is its best-ranked comma in its secondary comma zone according to our metric", () => {
        SYMBOLS.forEach(symbol => {
            const commaName = computeCommaName(symbol.primaryComma.monzo)

            console.log(`\n\n${symbol.ascii} ${commaName}\n\n`)

            const secondaryCommaZone = computeSecondaryCommaZone(symbol)
            const lowerBound = secondaryCommaZone[0]
            const upperBound = secondaryCommaZone[1]
            const maximumSopfgtt = 61
            const maximumCopfgtt = 555
            const maximumApotomeSlope = 14
            const maximumPrimeLimit = 47
            const maximumAbsoluteThreeExponent = 15
            const fiveRoughMonzo = undefined
            const sort = "sopfgtt"

            const commas = computeCommas({
                lowerBound,
                upperBound,
                maximumSopfgtt,
                maximumCopfgtt,
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
